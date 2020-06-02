import styled, { keyframes } from 'styled-components';

import footerImg from '../../assets/footer.svg';
import dotsImg from '../../assets/dots.svg';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: url(${footerImg}) center bottom repeat-x, url(${dotsImg}) repeat-x,
    rgb(11, 10, 13);
`;

export const Container = styled.div`
  width: 100%;
  max-width: 520px;
  padding: 32px;
  flex: 1;
  margin: 0 auto;
  display: flex;
  height: 100%;

  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Content = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  flex: 1 1 0%;
  padding: 28px 0px 50px;
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Form = styled.form`
  margin: 0 auto;
  max-width: 360px;
  width: 100%;
  display: flex;
  flex-direction: column;

  animation: ${appearFromRight} 0.5s;

  h1 {
    color: rgb(255, 255, 255);
    font-size: 25px;
    text-align: center;
    margin-bottom: 29px;
  }

  button {
    margin-top: 18px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  font-size: 12px;
  color: rgb(135, 134, 139);
  text-align: center;
  margin: 24px 0px;

  &::before {
    left: 0px;
  }

  &::after {
    right: 0px;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: calc(50% - 25px);
    height: 1px;
    background: rgb(40, 39, 47);
  }
`;

export const Back = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;

  a {
    font-size: 13px;
    color: rgb(135, 134, 139);
    text-align: center;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Copyright = styled.div`
  text-align: center;

  small {
    display: block;
    color: rgb(68, 67, 75);
    font-size: 12px;
    text-align: center;
    padding-bottom: 10px;
  }
`;
