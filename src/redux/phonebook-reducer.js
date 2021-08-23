import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit';
import { fetchContacts } from './phonebook-operations';
import actions from './phonebook-actions';

// const INITIAL_STATE = [
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
// ];

const items = createReducer([], {
    [actions.addContact]: (state, { payload }) => [...state, payload],
    [actions.deleteContact]: (state, { payload }) =>
        state.filter(({ number }) => number !== payload),
    [fetchContacts.fulfilled]: (_, action) => action.payload,
})

const filter = createReducer('', {
    [actions.changeFilter]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
    [fetchContacts.pending]: () => true,
    [fetchContacts.fulfilled]: () => true,
    [fetchContacts.rejected]: () => true,
})

const error = createReducer(null, {
    [fetchContacts.rejected]: (_, action) => action.payload,
    [fetchContacts.pending]: () => null,
})

export default combineReducers({
    items,
    filter,
    isLoading,
    error,
})