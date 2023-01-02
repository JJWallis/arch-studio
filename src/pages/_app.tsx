import type { AppProps } from 'next/app';
import Link from 'next/link';
import styled, { ThemeProvider } from 'styled-components';
import { ArrowAndCopyButton } from '../components/button/ArrowAndCopyButton';
import Header from '../components/header';
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
   --margin-top: 72px;
   outline: solid;
   padding-top: 60px;
   margin-top: var(--margin-top);

   @media ${device.tablet} and ${device.maxLaptop} {
      --margin-top: 200px;
      margin-left: calc(var(--site-padding) * -1);
      margin-right: calc(var(--site-padding) * -1);
   }
`;

const Nav = styled.nav`
   padding-bottom: 48px;
   background-color: var(--clr-very-light-grey);
`;

const NavList = styled.ul`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 0;
   margin: 0%;
`;

// todo -> icon component + change size
const NavListItem = styled.li`
   color: var(--clr-mild-grey);
   font-weight: 500;
`;

const NavLinkLogo = styled(LogoLink)`
   --width: 120px;
   display: grid;
   place-items: center;
   width: var(--width);
   height: var(--width);
   background-color: black;

   path {
      fill: white;
   }
`;

const NavLink = styled(Link)`
   display: inline-block;
   padding-bottom: 32px;
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
                     <ArrowAndCopyButton href={ROUTE_PORTFOLIO}>
                        See Our Portfolio
                     </ArrowAndCopyButton>
                  </NavListItem>
               </NavList>
            </Nav>
         </Footer>
      </ThemeProvider>
   );
}

export default MyApp;
