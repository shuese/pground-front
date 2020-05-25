import { css } from 'styled-components';
import manropeLight from './assets/fonts/manrope/Manrope-Light.woff2';
import manropeRegular from './assets/fonts/manrope/Manrope-Regular.woff2';
import manropeMedium from './assets/fonts/manrope/Manrope-Medium.woff2';
import manropeBold from './assets/fonts/manrope/Manrope-Bold.woff2';

export const fonts = css`
  @font-face {
    font-family: 'Manrope';
    src: local('Manrope Light'), local('Manrope-Light'), url(${manropeLight}) format('woff2');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Manrope';
    src: local('Manrope Regular'), local('Manrope-Regular'), url(${manropeRegular}) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Manrope';
    src: local('Manrope Medium'), local('Manrope-Medium'), url(${manropeMedium}) format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Manrope';
    src: local('Manrope Bold'), local('Manrope-Bold'), url(${manropeBold}) format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
`