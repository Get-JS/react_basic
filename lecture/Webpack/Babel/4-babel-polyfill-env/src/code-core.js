import 'core-js/features/promise';
import 'core-js/features/object/values';
import 'core-js/features/array/includes';

const p = Promise.resolve(10);
const obj = {
  a: 10,
  b: 20,
  c: 30,
};
const arr = Object.values(obj);
const exist = arr.includes(20);
