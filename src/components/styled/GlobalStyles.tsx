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
body {
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
  --fs-body: ${({ theme }) => theme.fontSizes.body};
  --fs-heading-small: ${({ theme }) => theme.fontSizes.headingSmall};
  --fs-heading-small-medium: ${({ theme }) =>
     theme.fontSizes.headingSmallMedium}; 
  --fs-heading-medium: ${({ theme }) => theme.fontSizes.headingMedium};
  --fs-heading-large: ${({ theme }) => theme.fontSizes.headingLarge};
  --fs-heading-xl: ${({ theme }) => theme.fontSizes.headingExtraLarge};

  /* font weights */
  --fw-light: ${({ theme }) => theme.fontWeights.light};
  --fw-medium: ${({ theme }) => theme.fontWeights.medium};
  --fw-bold: ${({ theme }) => theme.fontWeights.bold};

  /* line heights */
  --lh-body: ${({ theme }) => theme.lineHeights.body};
  --lh-heading-small: ${({ theme }) => theme.lineHeights.headingSmall};
  --lh-heading-medium: ${({ theme }) => theme.lineHeights.headingMedium};
  --lh-heading-large: ${({ theme }) => theme.lineHeights.headingLarge};
  --lh-heading-xl: ${({ theme }) => theme.lineHeights.headingExtraLarge};

  /* colors */
  --clr-very-light-grey: ${({ theme }) => theme.colors.veryLightGrey};
  --clr-light-grey: ${({ theme }) => theme.colors.lightGrey};
  --clr-mild-grey: ${({ theme }) => theme.colors.mildGrey};
  --clr-dark-grey: ${({ theme }) => theme.colors.darkGrey};
  --clr-dark-blue: ${({ theme }) => theme.colors.darkBlue};
  --clr-red: ${({ theme }) => theme.colors.red};

  /* layout */

  --site-max-width: 1110px;
  --site-padding: 25px;

  @media ${device.tablet} {
    --site-padding: 100px;
  }

  @media ${device.laptopL} {
    --site-padding: 165px;
  }
}

body {
  overflow-x: hidden;
  min-width: 320px;
  font: var(--fw-light) var(--fs-body)/var(--lh-body) 'League Spartan', sans-serif;
  color: var(--clr-dark-blue);

  @media ${device.tablet} {
    padding-left: var(--site-padding);
    padding-right: var(--site-padding);
  }
}

/* sticky footer */

#__next {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

footer {
  margin-top: auto;
}

&:focus {
  outline: 2px dotted black;
}
`;

export default GlobalStyles;
