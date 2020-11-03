import { createSelector, createSlice } from '@reduxjs/toolkit';

const name = 'POST';

const initialState = {
  post: null,
  form: {},
  error: null,
};

const reducers = {
  changeFormState: (state, { payload }) => {
    state.form = { ...state.form, ...payload };
  },
  write: () => {},
  writeSuccess: (state) => {
    state.form = null;
    state.error = null;
  },
  writeFailure: (state, { payload: error }) => {
    state.error = error;
  },
};

const slice = createSlice({
  name,
  initialState,
  reducers,
});
const selectAllState = createSelector(
  (state) => state.post,
  (state) => state.form,
  (state) => state.error,
  (post, form, error) => {
    return { post, form, error };
  },
);
const selectFormState = createSelector(
  (state) => state.form,
  (form) => {
    return { ...form };
  },
);
export const postSelector = {
  all: (state) => selectAllState(state[POST]),
  form: (state) => selectFormState(state[POST]),
};
export const POST = slice.name;
export const postReducer = slice.reducer;
export const postAction = slice.actions;
