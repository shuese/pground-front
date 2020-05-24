import { createGlobalStyle } from 'styled-components';
import sanitize from 'sanitize.css';

export default createGlobalStyle`
  ${sanitize}
`;