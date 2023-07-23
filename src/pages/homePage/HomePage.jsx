import { Container, Title, Text } from './HomePage.styled';
import { useAuth } from 'hooks';

export default function HomePage() {
  const { isLoggedIn , user} = useAuth();

  return (
    <Container>
      <Title>Welcome to Home page</Title>
      {!isLoggedIn
      ?(<Text>
          You should login or register, if you haven't done it yet!
        </Text>)
      :(<Text>
          { user.name }, you are logged in, use the App with pleasure!
        </Text>)}
      
    </Container>
  );
}
