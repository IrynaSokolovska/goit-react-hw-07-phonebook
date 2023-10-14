import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { handleDeleteContact } from 'redux/contactsSlice';

export const ContactListItems = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button
        type="button"
        onClick={() => {
          dispatch(handleDeleteContact(contact.id));
        }}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItems.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};
export default ContactListItems;
