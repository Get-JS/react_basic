import { axios } from 'utils/http/client';

export const getPost = (id) => axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`);
