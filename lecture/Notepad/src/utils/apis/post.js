import { axios, api } from 'utils/http/client';
import { selialize } from 'utils/http/queryData';

export const load = (data = {}) => {
  const info = selialize({ type: 'postLoad', originDataInfo: data });
  return axios.get(api.POST, info);
};
export const listLoad = (data = {}) => {
  const info = selialize({ type: 'postLoad', originDataInfo: data });
  return axios.get(api.POST, info);
};
export const write = (data = {}) => {
  const info = selialize({ type: 'postWrite', originDataInfo: data });
  return axios.post(api.POST, info);
};
export const update = (data = {}) => {
  const info = selialize({ type: 'postUpate', originDataInfo: data });
  return axios.patch(api.POST, info);
};
export const remove = (data = {}) => {
  const info = selialize({ type: 'postRemove', originDataInfo: data });
  return axios.delete(api.POST, info);
};
