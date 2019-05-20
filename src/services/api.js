import axios from 'axios';

const api = axios.create({urlBase: 'https://rocketseat-node.herokuapp.com/api'});

export default api;