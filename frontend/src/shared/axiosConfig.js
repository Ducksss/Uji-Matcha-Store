import axios from 'axios';

const instance = axios.create();

axios.defaults.headers.common = { 'Authorization': `bearer ${localStorage.getItem('token')}` }

export default instance;