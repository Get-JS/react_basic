import { handleActions } from 'redux-actions';
import todoData from '@fake-db/todo';
import produce from 'immer';
import { INSERT, TOGGLE, REMOVE } from './action';

const initialState = {
  todoArr: todoData,
};

const reducer = handleActions(
  {
    [INSERT]: (state, { payload: todo }) =>
      produce(state, (draft) => {
        draft.todoArr.push(todo);
      }),
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const todo = draft.todoArr.find((todo) => todo.id === id);
        todo.checked = !todo.checked;
      }),
    [REMOVE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const index = draft.todoArr.findIndex((todo) => todo.id === id);
        draft.todoArr.splice(index, 1);
      }),
  },
  initialState,
);

export default reducer;
