import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    textValue: 'rr',
    numberValue: 0
  },
  reducers: {
    textChange: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.textValue = action.payload;
    },
    numberChange: (state, action) => {
      state.numberValue = action.payload;
    },
    resetForm: state => {
      state.textValue = '';
      state.numberValue = 0;
    }
  },
});

export const { textChange, numberChange, resetForm } = formSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const submitForm = form => async dispatch => {
  // AJAX call here
  await setTimeout(() => {
    dispatch(resetForm());
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectTextValue = state => state.form.textValue;
export const selectNumberValue = state => state.form.numberValue;
export const selectForm = state => state.form;

export default formSlice.reducer;
