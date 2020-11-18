import { axios, api } from 'utils/http/client';
import { listData, responseData } from '@fake-db/post';
import { selialize } from 'utils/http/queryData';
import { getDashQueryParams } from 'utils/http/queryParam';
import qs from 'qs';

export const load = (data = {}) => {
  const infoObj = selialize({ type: 'postLoad', queryType: 'dashParams', originDataInfo: data });
  const dataArr = [];
  Object.entries(infoObj).forEach(([_, value]) => {
    dataArr.push(value);
  });
  const info = getDashQueryParams(dataArr);
  // return axios.get(`${api.POST}${info}`);
  return new Promise((resolve, reject) => {
    console.log('load getDashQueryParams', info);
    resolve(responseData);
  });
};
export const listLoad = (data = {}) => {
  const infoObj = selialize({ type: 'postListLoad', queryType: 'headerQuery', originDataInfo: data });
  const info = qs.stringify(infoObj);
  // return axios.get(`${api.POST}/?${info}`);
  return new Promise((resolve, reject) => {
    console.log('listLoad headerQuery', info);
    resolve({ ...listData, list: listData.list.slice(0, 4) });
  });
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
