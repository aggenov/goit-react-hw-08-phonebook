import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Title } from './NotFoundPage.styled';

export default function NotFoundPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/contacts', { replace: true });
    }, 3000);
  }, [navigate]);

  return (
    <Container>
      <Title>Page not found</Title>
    </Container>
  );
}
