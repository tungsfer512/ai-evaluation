import React, { useEffect, useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { debounce } from "lodash";
import PropTypes from "prop-types";

import {
  Button,
  Col,
  Row,
  Form,
  FormControl,
  Card,
  CardGroup,
  Collapse,
} from "react-bootstrap";
import ReactObjectTableViewer from "../ReactObjectTableViewer/ReactObjectTableViewer";

import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

import "./server-dashboard.css";
import { timeSince } from "../../util/timeSince";
import { usePaginationParams } from "../../util/paginationParams";
import PaginationFooter from "../PaginationFooter/PaginationFooter";

const RowListItem = ({ text }) => (
  <span className="server-dashboard-row-list-item">{text}</span>
);
RowListItem.propTypes = {
  text: PropTypes.string,
};

const ServerDashboard = (props) => {
  const base_url = window.base_url || "/";
  const [searchParams, setSearchParams] = useSearchParams();

  const [errorAlert, setErrorAlert] = useState(null);
  const [collapseStates, setCollapseStates] = useState({});

  let user_data = useSelector((state) => state.user_data);
  const user_page = useSelector((state) => state.user_page);

  const { setOffset, offset, setLimit, handleLimit, limit, setPagination } =
    usePaginationParams();

  const name_filter = searchParams.get("name_filter") || "";
  const sort = searchParams.get("sort") || "id";
  const state_filter = searchParams.get("state") || "";

  const total = user_page ? user_page.total : undefined;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  var {
    updateUsers,
    shutdownHub,
    startServer,
    stopServer,
    deleteServer,
    startAll,
    stopAll,
  } = props;

  const dispatchPageUpdate = (data, page) => {
    // trigger page update in state
    // in response to fetching updated user list
    // data is list of user records
    // page is _pagination part of response
    // persist page info in url query
    setPagination(page);
    // persist user data, triggers rerender
    dispatch({
      type: "USER_PAGE",
      value: {
        data: data,
        page: page,
      },
    });
  };

  const setNameFilter = (new_name_filter) => {
    // persist ?name_filter parameter
    // store in url param, clear when value is empty
    setSearchParams((params) => {
      // clear offset when name filter changes
      if (new_name_filter !== name_filter) {
        params.delete("offset");
      }
      if (new_name_filter) {
        params.set("name_filter", new_name_filter);
      } else {
        params.delete("name_filter");
      }
      return params;
    });
  };

  const setSort = (sort) => {
    // persist ?sort parameter
    // store in url param, clear when value is default ('id')
    setSearchParams((params) => {
      if (sort === "id") {
        params.delete("id");
      } else {
        params.set("sort", sort);
      }
      return params;
    });
  };

  const setStateFilter = (new_state_filter) => {
    // persist ?state filter
    // store in url param, clear when value is default ('')
    setSearchParams((params) => {
      // clear offset when filter changes
      if (new_state_filter !== state_filter) {
        params.delete("offset");
      }
      if (!new_state_filter) {
        params.delete("state");
      } else {
        params.set("state", new_state_filter);
      }
      console.log("setting search params", params.toString());
      return params;
    });
  };

  // the callback to update the displayed user list
  const updateUsersWithParams = () =>
    updateUsers({
      offset,
      limit,
      name_filter,
      sort,
      state: state_filter,
    });

  useEffect(() => {
    updateUsersWithParams()
      .then((data) => dispatchPageUpdate(data.items, data._pagination))
      .catch((err) => setErrorAlert("Failed to update user list."));
  }, [offset, limit, name_filter, sort, state_filter]);

  if (!user_data || !user_page) {
    return <div data-testid="no-show"></div>;
  }

  const handleSearch = debounce(async (event) => {
    setNameFilter(event.target.value);
  }, 300);

  const ServerButton = ({ server, user, action, name, extraClass }) => {
    var [isDisabled, setIsDisabled] = useState(false);
    return (
      <button
        className={`btn btn-xs ${extraClass}`}
        disabled={isDisabled || server.pending}
        onClick={() => {
          setIsDisabled(true);
          action(user.name, server.name)
            .then((res) => {
              if (res.status < 300) {
                updateUsersWithParams()
                  .then((data) => {
                    dispatchPageUpdate(data.items, data._pagination);
                  })
                  .catch(() => {
                    setIsDisabled(false);
                    setErrorAlert(`Failed to update users list.`);
                  });
              } else {
                setErrorAlert(`Failed to ${name.toLowerCase()}.`);
                setIsDisabled(false);
              }
              return res;
            })
            .catch(() => {
              setErrorAlert(`Failed to ${name.toLowerCase()}.`);
              setIsDisabled(false);
            });
        }}
      >
        {name}
      </button>
    );
  };

  const StopServerButton = ({ server, user }) => {
    if (!server.ready) {
      return null;
    }
    return ServerButton({
      server,
      user,
      action: stopServer,
      name: "Stop Server",
      extraClass: "btn-danger stop-button",
    });
  };
  const DeleteServerButton = ({ server, user }) => {
    if (!server.name) {
      // It's not possible to delete unnamed servers
      return null;
    }
    if (server.ready || server.pending) {
      return null;
    }
    return ServerButton({
      server,
      user,
      action: deleteServer,
      name: "Delete Server",
      extraClass: "btn-danger stop-button",
    });
  };

  const StartServerButton = ({ server, user }) => {
    if (server.ready) {
      return null;
    }
    return ServerButton({
      server,
      user,
      action: startServer,
      name: server.pending ? "Server is pending" : "Start Server",
      extraClass: "btn-success start-button",
    });
  };

  const SpawnPageButton = ({ server, user }) => {
    if (server.ready) {
      return null;
    }
    return (
      <a
        href={`${base_url}spawn/${user.name}${
          server.name ? "/" + server.name : ""
        }`}
      >
        <button className="btn btn-light btn-xs">Spawn Page</button>
      </a>
    );
  };

  const AccessServerButton = ({ server }) => {
    if (!server.ready) {
      return null;
    }
    return (
      <a href={server.url || ""}>
        <button className="btn btn-primary btn-xs">Access Server</button>
      </a>
    );
  };

  const EditUserButton = ({ user }) => {
    return (
      <button
        className="btn btn-light btn-xs"
        onClick={() =>
          navigate("/edit-user", {
            state: {
              username: user.name,
              has_admin: user.admin,
            },
          })
        }
      >
        Edit User
      </button>
    );
  };

  const ServerRowTable = ({ data }) => {
    const sortedData = Object.keys(data)
      .sort()
      .reduce(function (result, key) {
        let value = data[key];
        switch (key) {
          case "last_activity":
          case "created":
          case "started":
            // format timestamps
            value = value ? timeSince(value) : value;
            break;
        }
        if (Array.isArray(value)) {
          value = (
            <Fragment>
              {value.sort().flatMap((v) => (
                <RowListItem text={v} />
              ))}
            </Fragment>
          );
        }
        result[key] = value;
        return result;
      }, {});
    return (
      <ReactObjectTableViewer
        className="table-striped table-bordered"
        style={{
          padding: "3px 6px",
          margin: "auto",
        }}
        keyStyle={{
          padding: "4px",
        }}
        valueStyle={{
          padding: "4px",
        }}
        data={sortedData}
      />
    );
  };

  const serverRow = (user, server) => {
    const { servers, ...userNoServers } = user;
    const serverNameDash = server.name ? `-${server.name}` : "";
    const userServerName = user.name + serverNameDash;
    const open = collapseStates[userServerName] || false;
    return [
      <tr
        key={`${userServerName}-row`}
        data-testid={`user-row-${userServerName}`}
        className="user-row"
      >
        <td data-testid="user-row-name">
          <span>
            <Button
              onClick={() =>
                setCollapseStates({
                  ...collapseStates,
                  [userServerName]: !open,
                })
              }
              aria-controls={`${userServerName}-collapse`}
              aria-expanded={open}
              data-testid={`${userServerName}-collapse-button`}
              variant={open ? "secondary" : "primary"}
              size="sm"
            >
              <span className="caret"></span>
            </Button>{" "}
          </span>
          <span data-testid={`user-name-div-${userServerName}`}>
            {user.name}
          </span>
        </td>
        <td data-testid="user-row-admin">{user.admin ? "admin" : ""}</td>

        <td data-testid="user-row-server">
          <p className="text-secondary">{server.name}</p>
        </td>
        <td data-testid="user-row-last-activity">
          {server.last_activity ? timeSince(server.last_activity) : "Never"}
        </td>
        <td data-testid="user-row-server-activity" className="actions">
          <StartServerButton server={server} user={user} />
          <StopServerButton server={server} user={user} />
          <DeleteServerButton server={server} user={user} />
          <AccessServerButton server={server} />
          <SpawnPageButton server={server} user={user} />
          <EditUserButton user={user} />
        </td>
      </tr>,
      <tr key={`${userServerName}-detail`}>
        <td
          colSpan={6}
          style={{ padding: 0 }}
          data-testid={`${userServerName}-td`}
        >
          <Collapse in={open} data-testid={`${userServerName}-collapse`}>
            <CardGroup
              id={`${userServerName}-card-group`}
              style={{ width: "100%", margin: "0 auto", float: "none" }}
            >
              <Card style={{ width: "100%", padding: 3, margin: "0 auto" }}>
                <Card.Title>User</Card.Title>
                <ServerRowTable data={userNoServers} />
              </Card>
              <Card style={{ width: "100%", padding: 3, margin: "0 auto" }}>
                <Card.Title>Server</Card.Title>
                <ServerRowTable data={server} />
              </Card>
            </CardGroup>
          </Collapse>
        </td>
      </tr>,
    ];
  };

  let servers = user_data.flatMap((user) => {
    let userServers = Object.values({
      "": user.server || {},
      ...(user.servers || {}),
    });
    return userServers.map((server) => [user, server]);
  });

  return (
    <div className="container" data-testid="container">
      {errorAlert != null ? (
        <div className="row">
          <div className="col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
            <div className="alert alert-danger">
              {errorAlert}
              <button
                type="button"
                className="close"
                onClick={() => setErrorAlert(null)}
              >
                <span>&times;</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="server-dashboard-container">
        <Row>
          <Col md={4}>
            <FormControl
              type="text"
              name="user_search"
              placeholder="Search users"
              aria-label="user-search"
              defaultValue={name_filter}
              onChange={handleSearch}
            />
          </Col>
          <Col md={3}>
            {/* div.checkbox required for BS3 CSS */}
            <div className="checkbox">
              <label title="check to only show running servers, otherwise show all">
                <Form.Check
                  inline
                  type="checkbox"
                  name="active_servers"
                  id="active-servers-filter"
                  checked={state_filter == "active"}
                  onChange={(event) => {
                    setStateFilter(event.target.checked ? "active" : null);
                  }}
                />
                {"only active servers"}
              </label>
            </div>
          </Col>

          <Col md="auto" style={{ float: "right", margin: 15 }}>
            <Link to="/groups">{"> Manage Groups"}</Link>
          </Col>
        </Row>
        <table className="table table-bordered table-hover">
          <thead className="admin-table-head">
            <tr>
              <th id="user-header">
                User{" "}
                <SortHandler
                  currentSort={sort}
                  setSort={setSort}
                  sortKey="name"
                  testid="user-sort"
                />
              </th>
              <th id="admin-header">Admin</th>
              <th id="server-header">Server</th>
              <th id="last-activity-header">
                Last Activity{" "}
                <SortHandler
                  currentSort={sort}
                  setSort={setSort}
                  sortKey="last_activity"
                  testid="last-activity-sort"
                />
              </th>
              <th id="actions-header">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="noborder">
              <td>
                <Link to="/add-users">
                  <Button variant="light" className="add-users-button">
                    Add Users
                  </Button>
                </Link>
              </td>
              <td colSpan={4} className="admin-header-buttons">
                {/* Start all servers */}
                <Button
                  variant="primary"
                  className="start-all"
                  data-testid="start-all"
                  title="start all servers on the current page"
                  onClick={() => {
                    Promise.all(startAll(user_data.map((e) => e.name)))
                      .then((res) => {
                        let failedServers = res.filter((e) => !e.ok);
                        if (failedServers.length > 0) {
                          setErrorAlert(
                            `Failed to start ${failedServers.length} ${
                              failedServers.length > 1 ? "servers" : "server"
                            }. ${
                              failedServers.length > 1 ? "Are they " : "Is it "
                            } already running?`,
                          );
                        }
                        return res;
                      })
                      .then((res) => {
                        updateUsersWithParams()
                          .then((data) => {
                            dispatchPageUpdate(data.items, data._pagination);
                          })
                          .catch(() =>
                            setErrorAlert(`Failed to update users list.`),
                          );
                        return res;
                      })
                      .catch(() => setErrorAlert(`Failed to start servers.`));
                  }}
                >
                  Start All
                </Button>
                <span> </span>
                {/* Stop all servers */}
                <Button
                  variant="danger"
                  className="stop-all"
                  data-testid="stop-all"
                  title="stop all servers on the current page"
                  onClick={() => {
                    Promise.all(stopAll(user_data.map((e) => e.name)))
                      .then((res) => {
                        let failedServers = res.filter((e) => !e.ok);
                        if (failedServers.length > 0) {
                          setErrorAlert(
                            `Failed to stop ${failedServers.length} ${
                              failedServers.length > 1 ? "servers" : "server"
                            }. ${
                              failedServers.length > 1 ? "Are they " : "Is it "
                            } already stopped?`,
                          );
                        }
                        return res;
                      })
                      .then((res) => {
                        updateUsersWithParams()
                          .then((data) => {
                            dispatchPageUpdate(data.items, data._pagination);
                          })
                          .catch(() =>
                            setErrorAlert(`Failed to update users list.`),
                          );
                        return res;
                      })
                      .catch(() => setErrorAlert(`Failed to stop servers.`));
                  }}
                >
                  Stop All
                </Button>
                {/* spacing between start/stop and Shutdown */}
                <span style={{ marginLeft: "56px" }}> </span>
                {/* Shutdown Jupyterhub */}
                <Button
                  variant="danger"
                  id="shutdown-button"
                  onClick={shutdownHub}
                >
                  Shutdown Hub
                </Button>
              </td>
            </tr>
            {servers.flatMap(([user, server]) => serverRow(user, server))}
          </tbody>
        </table>
        <PaginationFooter
          offset={offset}
          limit={limit}
          visible={user_data.length}
          total={total}
          next={() => setOffset(offset + limit)}
          prev={() => setOffset(offset - limit)}
          handleLimit={handleLimit}
        />
        <br></br>
      </div>
    </div>
  );
};

ServerDashboard.propTypes = {
  user_data: PropTypes.array,
  updateUsers: PropTypes.func,
  shutdownHub: PropTypes.func,
  startServer: PropTypes.func,
  stopServer: PropTypes.func,
  deleteServer: PropTypes.func,
  startAll: PropTypes.func,
  stopAll: PropTypes.func,
  dispatch: PropTypes.func,
};

const SortHandler = (props) => {
  const { currentSort, setSort, sortKey, testid } = props;

  const currentlySorted = currentSort && currentSort.endsWith(sortKey);
  const descending = currentSort && currentSort.startsWith("-");
  return (
    <div
      className="sort-icon"
      data-testid={testid}
      onClick={() => {
        if (!currentlySorted) {
          setSort(sortKey);
        } else if (descending) {
          setSort(sortKey);
        } else {
          setSort("-" + sortKey);
        }
      }}
    >
      {!currentlySorted ? (
        <FaSort />
      ) : descending ? (
        <FaSortDown />
      ) : (
        <FaSortUp />
      )}
    </div>
  );
};

SortHandler.propTypes = {
  currentSort: PropTypes.string,
  setSort: PropTypes.func,
  sortKey: PropTypes.string,
  testid: PropTypes.string,
};

export default ServerDashboard;
