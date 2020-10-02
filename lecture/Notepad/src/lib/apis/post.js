import axios from 'axios';

export const getPost = (id) =>
  axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`);
