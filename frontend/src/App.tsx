import { GlobalStyle } from './styles/global';
import { FormEvent, useState } from 'react';
import api from './services/api';

import { Container, Content } from './styles';
import logoImg from './assets/car.svg';

export function App() {
  const [email, setEmail] = useState('');

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const response = await api.post('/sessions', { email: email });

    const { _id } = response.data;

    localStorage.setItem('user', _id);
  }

  return (
    <Container>
      <img src={logoImg} alt="Rent my car"></img>
      <Content>
        <p>
          Alugue seu <strong>carro</strong> e ganhe uma <strong>grana</strong>{' '}
          extra sem sair de casa
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input
            type="email"
            id="email"
            placeholder="Seu melhor e-email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <button type="submit">Entrar</button>
        </form>
      </Content>
      <GlobalStyle />
    </Container>
  );
}
