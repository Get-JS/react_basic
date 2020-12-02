import { axios, api } from 'utils/http/client';
import { listData } from '@fake-db/post';
import { selialize } from 'utils/http/queryData';

export const load = (data = {}) => {
  const info = selialize({ type: 'postLoad', queryType: 'dashParams', originDataInfo: data });
  const findData = listData.list.find((post) => post.id === info.postId);
  return new Promise((resolve) => {
    resolve({ data: findData });
  });
};

export const listLoad = (data = {}) => {
  const infoObj = selialize({ type: 'postListLoad', queryType: 'headerQuery', originDataInfo: data });
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
