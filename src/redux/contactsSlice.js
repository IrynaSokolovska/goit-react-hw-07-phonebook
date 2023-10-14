import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialContacts = {
  list: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        console.log(action.payload);
        state.list.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    handleDeleteContact: {
      reducer(state, action) {
        state.list = state.list.filter(
          contact => contact.id !== action.payload
        );
      },
    },
  },
});
console.log(contactsSlice);

export const { addContact, handleDeleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
// export const contactsReducer = contactsSlice.reducer;
