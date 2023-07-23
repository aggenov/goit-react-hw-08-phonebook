import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { Helmet } from 'react-helmet';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { fetchContacts } from 'redux/operations';
import { Filter } from 'components/Filter/filter';
// import { Container, Box } from '@mui/material

import { Box } from './ContactsPage.styled';
import { Text } from './ContactsPage.styled';

import { useAuth, useContact } from 'hooks';
import { RotatingLines } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, error } = useContact();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn]);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Box>
        <Text>Phonebook</Text>
        <ContactForm />
      </Box>

      <Box>
        {error && <p>{error}</p>}
        {isLoading ? (
          <RotatingLines
            strokeColor="rgb(11, 127, 171)"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        ) : (
          <>
            <Text>Contacts</Text>
            <Filter />
            <ContactList />
          </>
        )}
      </Box>
    </>
  );
}
