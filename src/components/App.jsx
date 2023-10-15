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
import { Circles } from 'react-loader-spinner';

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
        {isLoading && !error && (
          <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        )}
        <AddContactForm />
        <Title>Contacts</Title>
        <Filter />
        <ContactList />
      </Container>
    </Layout>
  );
};
