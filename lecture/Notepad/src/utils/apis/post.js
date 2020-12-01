import { axios, api } from 'utils/http/client';
import { listData, responseData } from '@fake-db/post';
import { selialize } from 'utils/http/queryData';
import { getDashQueryParams } from 'utils/http/queryParam';
// import qs from 'qs';

export const load = (data = {}) => {
  const infoObj = selialize({ type: 'postLoad', queryType: 'dashParams', originDataInfo: data });
  const dataArr = [];
  Object.entries(infoObj).forEach(([_, value]) => {
    dataArr.push(value);
  });
  const info = getDashQueryParams(dataArr);
  // return axios.get(`${api.POST}${info}`);
  return new Promise((resolve) => {
    resolve(responseData);
  });
};

export const listLoad = (data = {}) => {
  const infoObj = selialize({ type: 'postListLoad', queryType: 'headerQuery', originDataInfo: data });
  // const info = qs.stringify(infoObj);
  // return axios.get(`${api.POST}/?${info}`);
  return new Promise((resolve) => {
    const { offset, pageSize } = infoObj;
    const totalCount = listData.list.length;
    const preCount = offset + pageSize;
    const count = preCount > totalCount ? totalCount : preCount;
    resolve({ data: { ...listData, list: listData.list.slice(offset, count) } });
  });
};

export const add = (data = {}) => {
  const info = selialize({ type: 'postAdd', originDataInfo: data });
  // return axios.post(api.POST, info);
  return new Promise((resolve, reject) => {
    resolve(info);
  });
};
export const update = (data = {}) => {
  const info = selialize({ type: 'postUpate', originDataInfo: data });
  return axios.patch(api.POST, info);
};
export const remove = (data = {}) => {
  const info = selialize({ type: 'postRemove', originDataInfo: data });
  return axios.delete(api.POST, info);
};
