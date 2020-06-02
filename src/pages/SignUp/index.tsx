import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FaLock, FaEnvelope } from 'react-icons/fa';
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

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
            <Input
              onChange={(e) => setName(e.target.value)}
              name="name"
              type="text"
              placeholder="Digite seu nome"
              icon={FaEnvelope}
            />
            <Input
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              type="password"
              placeholder="Senha"
              icon={FaLock}
            />
            <Input
              onChange={(e) => setConfirmPassword(e.target.value)}
              name="confirmPassword"
              type="password"
              placeholder="Confirme sua senha secreta"
              icon={FaLock}
            />

            <Button type="submit">Cadastrar</Button>

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

export default SignUp;
