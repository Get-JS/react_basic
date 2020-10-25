import { createAction } from 'redux-actions';
import todoData from '@fake-db/todo';
let id = todoData.length + 1;

export const INSERT = 'todos/INSERT';
export const TOGGLE = 'todos/TOGGLE';
export const REMOVE = 'todos/REMOVE';

export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  checked: false,
}));
export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);
