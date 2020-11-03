import { createSelector, createSlice } from '@reduxjs/toolkit';

const name = 'ALERT';

const initialState = {
  type: '',
  title: '',
  icon: '',
  text: '',
  pendingConfirmationAction: null,
  confirmButtonText: '확인',
  denyButtonText: '취소',
};

const reducers = {
  setAlertState: (state, { payload }) => {
    return { ...state, ...payload };
  },
  closeAlert: (state) => {
    return (state = initialState);
  },
  confirmPendingAction: () => {},
};

const slice = createSlice({
  name,
  initialState,
  reducers,
});

const selectAllState = createSelector(
  (state) => state,
  (state) => {
    return state;
  },
);

export const alertSelector = {
  all: (state) => selectAllState(state[ALERT]),
};
export const ALERT = slice.name;
export const alertReducer = slice.reducer;
export const alertAction = slice.actions;
