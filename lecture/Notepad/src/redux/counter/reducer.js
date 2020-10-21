import { handleActions } from 'redux-actions';
import { INCREASE, DECREASE } from 'redux/counter/action';

const initialState = {
  number: 0,
};

export default handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState,
);
