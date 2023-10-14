import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://652b01cf4791d884f1fd95a3.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await axios.get(`/contacts`);
  return response.data;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async newContact => {
    const response = await axios.post(`/contacts`, newContact);
    return response.data;
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    const response = await axios.delete(`/contacts/${contactId}`);
    return response.data;
  }
);
