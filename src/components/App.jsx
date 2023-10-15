import { Layout } from './Layout';
import { AddContactForm } from './AddContactForm/AddContactForm';
import { Container } from '@mui/material';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Title } from './GlobalStyled';
import { fetchContacts } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectIsLoading, selectError } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <Container maxWidth="xl">
        <Title>Phonebook</Title>
        <AddContactForm />
        <Title>Contacts</Title>
        <Filter />
        <ContactList />
      </Container>
    </Layout>
  );
};
