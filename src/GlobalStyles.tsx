import { createGlobalStyle } from 'styled-components';
import sanitize from 'sanitize.css';
import { fonts } from './fonts';

export default createGlobalStyle`
  ${sanitize};
  ${fonts};
  body, button, a {
    font-family: Manrope, system-ui,
    /* macOS 10.11-10.12 */ -apple-system,
    /* Windows 6+ */ "Segoe UI",
    /* Android 4+ */ "Roboto",
    /* Ubuntu 10.10+ */ "Ubuntu",
    /* Gnome 3+ */ "Cantarell",
    /* KDE Plasma 5+ */ "Noto Sans",
    /* fallback */ sans-serif,
    /* macOS emoji */ "Apple Color Emoji",
    /* Windows emoji */ "Segoe UI Emoji",
    /* Windows emoji */ "Segoe UI Symbol",
    /* Linux emoji */ "Noto Color Emoji";;
  }
`;