import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  body, button, input, textarea {
    font-family: 'Roboto', sans-serif;
  }

  body {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    background: rgb(11, 10, 13);
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
