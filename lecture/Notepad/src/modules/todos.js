import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import todoData from '../@fake-db/todo';

const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';


let id = (todoData.length + 1);
export const insert = createAction(INSERT, text => ({
  id: id++,
  text,
  checked: false
}));

export const toggle = createAction(TOGGLE, id => id);

export const remove = createAction(REMOVE, id => id);

const initialState = {
  todos: todoData
}

const todos = handleActions(
  {
    [INSERT]: (state, { payload: todo }) =>
      produce(state, draft => {
        draft.todos.push(todo)
      }),
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, draft => {
        const todo = draft.todos.find(todo => todo.id === id);
        todo.checked = !todo.checked;
      }),
    [REMOVE]: (state, { payload: id }) =>
      produce(state, draft => {
        const index = draft.todos.findIndex(todo => todo.id === id);
        draft.todos.splice(index, 1);
      }),
  },
  initialState
);

export default todos;