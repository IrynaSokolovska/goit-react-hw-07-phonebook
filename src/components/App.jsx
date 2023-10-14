import { Layout } from './Layout';
import { AddContactForm } from './AddContactForm/AddContactForm';
import { Container } from '@mui/material';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Title } from './GlobalStyled';

export const App = () => {
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
