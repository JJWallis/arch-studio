import { createGlobalStyle } from 'styled-components';
import { device } from '../../config/theme/device';

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html, 
body,
#__next {
  height: 100%;
}

body {
  /* improves text rendering on MacOS browsers. */
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeSpeed;
}

ul,
ol {
  list-style: none;
}

html:focus-within {
  scroll-behavior: smooth;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

a {
  text-decoration: none;
  color: inherit;
}

img,
picture,
video, 
canvas, 
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

button {
  border: none;
  padding: 0;
  background-color: transparent;
}

fieldset {
  padding: 0;
  margin: 0;
  border: none;
}

p, 
h1, 
h2, 
h3, 
h4, 
h5, 
h6 {
  /* allow hard wraps & avoid overflow */
  overflow-wrap: break-word;
}

/* By creating a stacking context on our application's container, we ensure that everything within our application will participate in an "app-specific" context, rather than the global top-level context. This makes it possible for us to guarantee that elements created using portals (eg. modals, tooltips) will always show up on top of our application. */
#root, #__next {
  isolation: isolate;
}

@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* PROJECT SPECIFIC STYLES */

:root {
  /* font sizes */
  --fs-body: ${({ theme }) => theme.fontSizes.body}
  --fs-heading-small: ${({ theme }) => theme.fontSizes.headingSmall}
  --fs-heading-medium: ${({ theme }) => theme.fontSizes.headingMedium}
  --fs-heading-large: ${({ theme }) => theme.fontSizes.headingLarge}
  --fs-heading-xl: ${({ theme }) => theme.fontSizes.headingExtraLarge}

  /* font weights */
  --fw-light: ${({ theme }) => theme.fontWeights.light}
  --fw-medium: ${({ theme }) => theme.fontWeights.medium}
  --fw-bold: ${({ theme }) => theme.fontWeights.bold}

  /* line heights */
  --lh-body: ${({ theme }) => theme.lineHeights.body}
  --lh-heading-small: ${({ theme }) => theme.lineHeights.headingSmall}
  --lh-heading-medium: ${({ theme }) => theme.lineHeights.headingMedium}
  --lh-heading-large: ${({ theme }) => theme.lineHeights.headingLarge}
  --lh-heading-xl: ${({ theme }) => theme.lineHeights.headingExtraLarge}

  /* colors */
  --clr-white: ${({ theme }) => theme.colors.white}
  --clr-light-grey: ${({ theme }) => theme.colors.lightGrey}
  --clr-mild-grey: ${({ theme }) => theme.colors.mildGrey}
  --clr-dark-grey: ${({ theme }) => theme.colors.darkGrey}
  --clr-black: ${({ theme }) => theme.colors.black}
}

body {
  min-width: 320px;
  min-height: 100vh;
  font: ${({ theme }) => theme.fontWeights.light} ${({ theme }) =>
   theme.fontSizes.body}/1.6 'League Spartan', sans-serif;
   color: ${({ theme }) => theme.colors.black};
}

&:focus {
  outline: 2px dotted black;
}
`;

export default GlobalStyles;
