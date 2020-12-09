import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../features/Form/formSlice';

export default configureStore({
  reducer: {
    form: formReducer,
  },
});
