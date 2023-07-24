import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Title } from './NotFoundPage.styled';
import { Helmet } from 'react-helmet';
import { useAuth } from 'hooks';

export default function NotFoundPage() {
  const navigate = useNavigate();
  const isLoggedIn = useAuth();

  useEffect(() => {
    setTimeout(() => {
      if (isLoggedIn) {
        navigate('/contacts', { replace: true });
      } else {
        navigate('/login', { replace: true });
      }
    }, 2000);
    // eslint-disable-next-line
  }, [isLoggedIn]);

  return (
    <Container>
      <Helmet>
        <title>not Page</title>
      </Helmet>
      <Title>Page not found</Title>
    </Container>
  );
}
