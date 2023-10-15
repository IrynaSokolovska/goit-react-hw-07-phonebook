import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactListItems = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => dispatch(deleteContact(contact.id));

  return (
    <li>
      <p>
        {contact.name}: {contact.phone}
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
