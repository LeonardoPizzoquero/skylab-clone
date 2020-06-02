import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaLock, FaEnvelope, FaGithub } from 'react-icons/fa';
import {
  Background,
  Container,
  Form,
  Register,
  Wrapper,
  Content,
  Copyright,
} from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(() => {
    return !(!!email && !!password);
  });

  const year = useMemo(() => {
    const date = new Date();
    return date.getFullYear();
  }, []);

  useEffect(() => {
    if (email !== '' && password !== '') {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);

  return (
    <Background>
      <Container>
        <Content>
          <img src={logoImg} alt="Skylab" />
          <Form>
            <Input
              focused
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              type="email"
              placeholder="E-mail"
              icon={FaEnvelope}
            />
            <Input
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              type="password"
              placeholder="Senha"
              icon={FaLock}
            />
            <Link to="/forgot">Esqueci minha senha</Link>
            <Button disabled={disabled} type="submit">
              Entrar
            </Button>

            <Register>
              <p>Nao tem uma conta?</p>
              <Link to="/signup">Registre-se</Link>
            </Register>

            <Wrapper>ou</Wrapper>

            <Button>
              <FaGithub size={20} style={{ marginRight: 10 }} /> Github
            </Button>
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

export default SignIn;
