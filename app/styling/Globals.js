'use client';
import { createGlobalStyle } from 'styled-components';

export const sizes = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1200px',
  extraWide: '2000px',
};

const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
  box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  
  html {
    
    --darkCyan: #0e8784;
    --darkGreyBlue: #333d4b;
    --darkGrey: #2C343E;
    --paleOrange: #fdd6ba;
    --lightCream: #fefcf7;
    --grey: #83888f; 

    --lightGrey: #F4F1EB;
    --white: #ffffff;
    --buttonHover: #66D2CF;
    --buttonDisabled: #E2DEDB;
    
    font-family: var(--font-barlow);
  }

  body {
    display: flex;
    flex-direction: column;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
    font-size: 0.9375rem;
    font-weight: 400;
    overflow-x: hidden;
    font-size: 1rem;
    background-color: var(--lightCream);
    
    margin: 0 auto;
    padding: 2rem 1.5rem;
    max-width: 32.8125rem;

    @media (min-width: ${sizes.tablet}) {
      max-width: 64rem;
      padding: 2.5rem 2.5rem 4.5rem;
    }
    
    @media (min-width: ${sizes.desktop}) {
      max-width: 92.5rem;
      padding: 2.75rem 3.125rem 5.5rem;
    }
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  input {
    appearance: none;
  }

  button { 
    border: 0;
    background: none;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }


  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-fraunces);
    color: var(--darkGreyBlue);
  }

  p,
  a {
      font-size: 0.9375rem;
      line-height: 1.5625rem;
      color: var(--darkGreyBlue);
      text-decoration: none;

      @media (min-width: ${sizes.desktop}) {
        font-size: 1rem;
        line-height: 1.625rem;
      }
      
  }




  ul, ol {
    list-style: none;
  }

  #root, #__next {
  isolation: isolate;
}

main {
  display: flex;
  flex-direction: column;
}

dialog {
  max-width: unset;
  max-height: unset;
}

`;

export default GlobalStyle;
