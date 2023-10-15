import React, { useMemo } from 'react';
import { ContactListItems } from './ContactListItems';
import PropTypes from 'prop-types';
import { List } from './ContactList.styled';

import { useSelector } from 'react-redux';
// import { selectFilteredContacts } from 'redux/selectors';
import { selectContacts, selectFilter } from 'redux/selectors';

// export const ContactList = () => {
//   const contacts = useSelector(selectFilteredContacts);

//   return (
//     <List>
//       {contacts.map(contact => (
//         <ContactListItems key={contact.id} contact={contact} />
//       ))}
//     </List>
//   );
// };

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string,
//       number: PropTypes.string,
//     })
//   ),
//   onDeleteContact: PropTypes.func,
// };
// export default ContactList;
// -------------------------------
export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const visibleContacts = useMemo(() => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter?.toLowerCase());
    });
  }, [contacts, filter]);
  return (
    <List>
      {visibleContacts.map(contact => (
        <ContactListItems key={contact.id} contact={contact} />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};
export default ContactList;
