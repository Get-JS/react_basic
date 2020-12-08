import { listData } from '@fake-db/post';
import { selialize } from 'utils/http/queryData';
let TOTAL_COUNT = listData.list.length;

export const load = (data = {}) => {
  const info = selialize({ type: 'postLoad', queryType: 'headerQuery', originDataInfo: data });
  const findData = listData.list.find((post) => post.id === info.postId);
  return new Promise((resolve) => {
    resolve({ data: findData });
  });
};

export const listLoad = (data = {}) => {
  const infoObj = selialize({ type: 'postListLoad', queryType: 'headerQuery', originDataInfo: data });
  return new Promise((resolve) => {
    let { offset, pageSize } = infoObj;
    const preCount = offset + pageSize;
    let count = preCount > TOTAL_COUNT ? TOTAL_COUNT : preCount;
    if (!count) {
      count = TOTAL_COUNT;
      offset = 0;
    }
    resolve({ data: { ...listData, list: listData.list.slice(offset, count) } });
  });
};

export const add = (data = {}) => {
  const info = selialize({ type: 'postAdd', originDataInfo: data });
  return new Promise((resolve) => {
    info.id = (++TOTAL_COUNT).toString();
    listData.list.push(info);
    resolve({ data: info });
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
  return new Promise((resolve) => {
    const fIdx = listData.list.findIndex((post) => post.id === info.id);
    listData.list.splice(fIdx, 1);
    TOTAL_COUNT--;
    resolve({ data: info.id });
  });
};
