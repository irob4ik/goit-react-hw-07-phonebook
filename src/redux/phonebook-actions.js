import { createAction } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('contacts/add', ({ id, name, number }) => ({
    payload: {
        id,
        name,
        number,
    },
}));

const deleteContact = createAction('contacts/delete');

const changeFilter = createAction('contacts/changeFilter');

const actions = {
    addContact,
    deleteContact,
    changeFilter,
};

export default actions;