import { configureStore } from '@reduxjs/toolkit';
import contactReducer from 'redux/contacts-slice'
import filterReducer from 'redux/filter-slice';


export const store = configureStore({
    reducer: {
        contacts: contactReducer,
        filter: filterReducer,
    },
});
