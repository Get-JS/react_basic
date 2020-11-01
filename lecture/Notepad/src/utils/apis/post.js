import { axios, api } from 'utils/http/client';
import { selialize } from 'utils/http/queryData';

export const writePost = (data = {}) => {
  const info = selialize({ type: 'postWrite', originDataInfo: data });
  return axios.post(api.POST_WRITE, info);
};
