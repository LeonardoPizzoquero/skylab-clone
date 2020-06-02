import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  position: relative;

  & + div {
    margin-top: 10px;
  }

  svg {
    position: absolute;
    color: rgb(51, 48, 64);
    font-size: 15px;
    left: 17px;
    top: 18px;
    transition: color 0.2s ease 0s;
  }

  input {
    width: 100%;
    height: 50px;
    color: rgb(255, 255, 255);
    font-size: 15px;
    background: rgb(25, 24, 31);
    border: 2px solid rgb(40, 39, 44);
    border-radius: 5px;
    padding: 15px 21px;
    padding-left: 42px;
    transition: border 0.2s ease 0s;
  }

  ${(props) =>
    props.isFocused &&
    css`
      input {
        border-color: rgb(113, 89, 193);
      }

      svg {
        color: rgb(113, 89, 193);
      }
    `}
`;
