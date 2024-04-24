# start by pulling the python image
FROM python:3.8

# copy the requirements file into the image
COPY ./pip-requirements.txt /app/requirements.txt

RUN mkdir -p /data/result_file

# switch working directory
RUN apt update
RUN apt upgrade -y
RUN apt install -y curl sshpass nano sudo

# switch working directory
WORKDIR /app

# install the dependencies and packages in the requirements file
RUN pip install -r requirements.txt

# copy every content from the local file to the image
COPY ./src/ /app

# configure the container to run in an executed manner
ENTRYPOINT [ "python" ]
EXPOSE 5000
CMD ["web_service.py" ]