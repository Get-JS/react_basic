import { listData } from '@fake-db/todo';
import { selialize } from 'utils/http/queryData';
let TOTAL_COUNT = listData.list.length;

export const listLoad = (data = {}) => {
  const infoObj = selialize({ type: 'todoListLoad', originDataInfo: data });
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
  const info = selialize({ type: 'todoAdd', originDataInfo: data });
  return new Promise((resolve) => {
    info.id = (++TOTAL_COUNT).toString();
    info.checked = false;
    listData.list.push(info);
    resolve({ data: info });
  });
};

export const toggleChecked = (data = {}) => {
  const info = selialize({ type: 'todoToggleChecked', originDataInfo: data });
  return new Promise((resolve) => {
    try {
      listData.list = listData.list.map((todo) => {
        const _ = Object.assign({}, todo);
        if (_.id === info.id) {
          _.checked = !_.checked;
        }
        return _;
      });
      const findData = listData.list.find((todo) => todo.id === info.id);
      resolve({ data: findData });
    } catch (error) {
      console.log('error', error);
    }
  });
};

export const remove = (data = {}) => {
  const info = selialize({ type: 'todoRemove', originDataInfo: data });
  return new Promise((resolve) => {
    const fIdx = listData.list.findIndex((todo) => todo.id === info.id);
    listData.list.splice(fIdx, 1);
    TOTAL_COUNT--;
    resolve({ data: info.id });
  });
};
