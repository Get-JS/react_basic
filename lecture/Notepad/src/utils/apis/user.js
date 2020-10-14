import { axios, api } from 'utils/http/client';
import { selialize } from 'utils/http/queryData';
import { STORAGE, TOKEN_NAME } from 'setting';

export const check = (data = {}) => {
  let { token } = data;
  token = token || STORAGE.getItem(TOKEN_NAME);
  const info = selialize({ type: 'checkToken', originDataInfo: { token } });
  return axios.post(api.CHECK_TOKEN, info);
};

export const login = (data = {}) => {
  const info = selialize({ type: 'nLogin', originDataInfo: data });
  return axios.post(api.N_MEMBER_LOGIN, info);
};

export const register = (data = {}) => {
  const info = selialize({ type: 'nRegister', originDataInfo: data });
  return axios.post(api.N_MEMBER_REGISTER, info);
};

export const getUser = (data = {}) => {
  const { userId } = data;
  const info = selialize({ type: 'userRead', originDataInfo: data });
  return axios.post(`${api.MEMBER}${userId}`, info);
};
