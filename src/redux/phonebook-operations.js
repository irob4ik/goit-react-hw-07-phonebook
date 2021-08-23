import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from '../service/contacts-api';

export const fetchContacts = createAsyncThunk(
    'users/fetchContacts',
    async () => {
        const contacts = await contactsAPI.fetchContacts();
        return contacts;
});