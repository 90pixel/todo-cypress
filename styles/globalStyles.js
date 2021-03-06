import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
	}
	a {
		text-decoration: none;
		cursor: pointer;
	}
	button {
    border: none;
    background: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
