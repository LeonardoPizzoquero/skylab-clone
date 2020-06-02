import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  background: rgb(113, 89, 193);
  border-radius: 5px;
  transition: background 0.2s ease 0s;
  border: none;

  &:hover {
    background: rgb(124, 98, 212);
  }

  &:disabled {
    color: rgba(255, 255, 255, 0.35);
    background: rgb(65, 53, 107);
    cursor: not-allowed;
  }
`;
