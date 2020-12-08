import { createSelector, createSlice } from '@reduxjs/toolkit';

const name = 'MODAL';

const initialState = {
  modal: [],
};

const reducers = {
  openModal: (state, { payload: key }) => {
    state.modal.push(key);
  },
  closeModal: (state, { payload: key }) => {
    const idx = state.modal.indexOf(key);
    state.modal.splice(idx, 1);
  },
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

const selectOpenModal = (state, key) => (state[MODAL].modal.find((modalName) => modalName === key) ? true : false);

export const modalSelector = {
  all: (state) => selectAllState(state[MODAL]),
  isOpen: selectOpenModal,
};
export const MODAL = slice.name;
export const modalReducer = slice.reducer;
export const modalAction = slice.actions;
