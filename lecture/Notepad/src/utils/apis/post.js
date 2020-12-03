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
  return new Promise((resolve) => {
    resolve(info);
  });
};

export const modify = (data = {}) => {
  const info = selialize({ type: 'postModify', originDataInfo: data });
  return new Promise((resolve) => {
    try {
      listData.list = listData.list.map((post) => {
        const _ = Object.assign({}, post);
        if (_.id === info.id) return data;
        else return _;
      });
      const findData = listData.list.find((post) => post.id === info.id);
      resolve({ data: findData });
    } catch (error) {
      console.log('error', error);
    }
  });
};

export const remove = (data = {}) => {
  const info = selialize({ type: 'postRemove', originDataInfo: data });
  return axios.delete(api.POST, info);
};
