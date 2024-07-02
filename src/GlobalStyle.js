// GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    font-family: Arial, sans-serif;
    background-color: #070608;
  }

  #root {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }

  .App {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  [data-scroll-container] {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
