import { GlobalStyle } from './styles/global';
import { Container, Content } from './styles';
import logoImg from './assets/car.svg';

import Routes from './routes';

export function App() {
  return (
    <Container>
      <img src={logoImg} alt="Rent my car"></img>
      <Content>
        <Routes />
      </Content>
      <GlobalStyle />
    </Container>
  );
}
