import axios from 'axios';

const url = 'http://localhost:5000/lead';

// export const fetchPosts = () => axios.get(url);

export const fetchClients = () => axios.get(url);

export const createClient = (newClient) => axios.post(url, newClient);
