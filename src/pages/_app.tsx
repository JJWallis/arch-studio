import type { AppProps } from 'next/app';
import Link from 'next/link';
import styled, { ThemeProvider } from 'styled-components';
import { ArrowAndCopyButton } from '../components/button/ArrowAndCopyButton';
import Header from '../components/header';
import { contentWrapperStyles } from '../components/styled/ContentWrapperStyles';
import GlobalStyles from '../components/styled/GlobalStyles';
import { LogoLink } from '../components/styled/LogoLink';
import { Theme } from '../config/theme';
import { device } from '../config/theme/device';
import {
   ROUTE_ABOUT,
   ROUTE_CONTACT,
   ROUTE_PORTFOLIO,
} from '../constants/routes';

const Footer = styled.footer`
   --nav-logo-width: 120px;
   --margin-top: 72px;
   --link-spacing: 32px;
   position: relative;
   margin-top: var(--margin-top);

   @media ${device.maxTablet} {
      padding-top: 60px;
   }

   @media ${device.tablet} and ${device.maxLaptop} {
      --margin-top: 200px;
      margin-left: calc(var(--site-padding) * -1);
      margin-right: calc(var(--site-padding) * -1);
   }

   @media ${device.tablet} {
      --link-spacing: 66px;
   }

   @media ${device.laptop} {
      --link-spacing: 50px;
      --nav-logo-width: 200px;
      width: 100%;
      ${contentWrapperStyles}
   }
`;

const Nav = styled.nav`
   background-color: var(--clr-very-light-grey);

   @media ${device.maxTablet} {
      padding-bottom: 48px;
   }

   @media ${device.tablet} {
      --width: calc(100% - 150px);
      width: var(--width);
   }

   @media ${device.laptop} {
      --width: calc(100% - 130px);
   }
`;

const NavList = styled.ul`
   display: flex;
   align-items: center;
   padding: 0;
   margin: 0;
   @media ${device.maxTablet} {
      justify-content: center;
      flex-direction: column;
   }

   @media ${device.tablet} {
      gap: var(--link-spacing);
   }
`;

// todo -> icon component + change size
const NavListItem = styled.li`
   color: var(--clr-mild-grey);
   font-weight: 500;

   @media ${device.maxTablet} {
      &:first-child {
         margin-top: calc(var(--nav-logo-width) / 2 * -1);
         margin-bottom: var(--link-spacing);
      }
   }
`;

const NavLinkLogo = styled(LogoLink)`
   display: grid;
   place-items: center;
   width: var(--nav-logo-width);
   height: var(--nav-logo-width);
   background-color: black;

   path {
      fill: white;
   }
`;

const NavLink = styled(Link)`
   display: inline-block;
   @media ${device.maxTablet} {
      padding-bottom: var(--link-spacing);
   }
`;

const StyledPortfolioButton = styled(ArrowAndCopyButton)`
   @media ${device.tablet} {
      position: absolute;
      top: 50;
      transform: translateY(-50%);
      right: 0;
   }
`;

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <ThemeProvider theme={Theme}>
         <GlobalStyles />
         <Header />
         <main id="main">
            <Component {...pageProps} />
         </main>
         <Footer>
            <Nav>
               <NavList>
                  <NavListItem>
                     <NavLinkLogo />
                  </NavListItem>
                  <NavListItem>
                     <NavLink href={ROUTE_PORTFOLIO}>Portfolio</NavLink>
                  </NavListItem>
                  <NavListItem>
                     <NavLink href={ROUTE_ABOUT}>About Us</NavLink>
                  </NavListItem>
                  <NavListItem>
                     <NavLink href={ROUTE_CONTACT}>Contact</NavLink>
                  </NavListItem>
                  <NavListItem>
                     <StyledPortfolioButton href={ROUTE_PORTFOLIO}>
                        See Our Portfolio
                     </StyledPortfolioButton>
                  </NavListItem>
               </NavList>
            </Nav>
         </Footer>
      </ThemeProvider>
   );
}

export default MyApp;
