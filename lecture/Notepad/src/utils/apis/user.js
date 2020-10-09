import { axios } from 'utils/http/client';

export const getUsers = (id) => axios.get(`http://jsonplaceholder.typicode.com/users`);
export const getUser = (id) => axios.get(`http://jsonplaceholder.typicode.com/users/${id}`);
