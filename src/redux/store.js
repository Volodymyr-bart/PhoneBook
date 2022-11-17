import { configureStore } from '@reduxjs/toolkit';

// import { contactsReducer } from './contactsSlice';
// import { filterReducer } from './filterSlice';
const init1 = {};
const init2 = {};

export const store = configureStore({
  reducer: {
    contacts: init1,
    filter: init2,
  },
});
