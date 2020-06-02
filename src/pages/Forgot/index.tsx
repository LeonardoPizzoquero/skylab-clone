import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';
import {
  Background,
  Container,
  Form,
  Back,
  Content,
  Copyright,
} from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

const Forgot: React.FC = () => {
  const [email, setEmail] = useState('');

  const year = useMemo(() => {
    const date = new Date();
    return date.getFullYear();
  }, []);

  return (
    <Background>
      <Container>
        <Content>
          <Form>
            <h1>Realizar cadastro</h1>
            <Input
              focused
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              type="email"
              placeholder="Digite seu E-mail"
              icon={FaEnvelope}
            />

            <Button type="submit">Recuperar</Button>

            <Back>
              <Link to="/">Voltar</Link>
            </Back>
          </Form>
        </Content>
        <Copyright>
          <small>Skylab versão 1.1.02</small>
          <small>Rocketseat {year} © Todos os direitos reservados</small>
        </Copyright>
      </Container>
    </Background>
  );
};

export default Forgot;
