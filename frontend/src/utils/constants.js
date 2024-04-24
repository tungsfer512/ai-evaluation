export {default as logo } from '../../src/assets/images/logo_ptit.png';
export const base_URL = process.env.REACT_APP_API_END_POINT;
export const hub_URL = process.env.REACT_APP_HUB_END_POINT;
export const token = JSON.parse(localStorage.getItem('token'));