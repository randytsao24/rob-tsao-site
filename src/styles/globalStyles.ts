import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Merriweather', serif;
  }

  p {
    font-family: 'Lato', sans-serif;
  }
`;

export default GlobalStyle;