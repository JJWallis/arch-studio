import { useRouter } from 'next/router';
import React, { useState } from 'react';
import {
   ROUTE_ABOUT,
   ROUTE_CONTACT,
   ROUTE_PORTFOLIO,
} from '../../constants/routes';
import Hamburger from '../hamburger';
import Navigation from '../navigation';
import { NavigationListItem } from '../navigation/NavigationListItem';
import { LogoLink } from '../styled/LogoLink';
import { HeaderPrimary, HeaderPrimaryContent } from './Header.styled';
import { HeaderPageHighlighter } from './HeaderPageHighlighter';

const Header: React.FC = () => {
   const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
   const toggleMobileNav = () => setIsMobileNavVisible(!isMobileNavVisible);
   const { pathname } = useRouter();
   const currentPageTitle =
      {
         '/': 'home',
         [ROUTE_PORTFOLIO]: 'portfolio',
         [ROUTE_ABOUT]: 'about us',
         [ROUTE_CONTACT]: 'contact',
      }[pathname] || '';

   return (
      <HeaderPrimary isMobileNavVisible={isMobileNavVisible}>
         <HeaderPrimaryContent>
            <HeaderPageHighlighter currentPageTitle={currentPageTitle} />
            <LogoLink />
            <Hamburger
               isMobileNavVisible={isMobileNavVisible}
               toggleMobileNav={toggleMobileNav}
            />
            <Navigation>
               <NavigationListItem
                  href={ROUTE_PORTFOLIO}
                  aria-current={pathname === ROUTE_PORTFOLIO}
               >
                  Portfolio
               </NavigationListItem>
               <NavigationListItem
                  href={ROUTE_ABOUT}
                  aria-current={pathname === ROUTE_ABOUT}
               >
                  About Us
               </NavigationListItem>
               <NavigationListItem
                  href={ROUTE_CONTACT}
                  aria-current={pathname === ROUTE_CONTACT}
               >
                  Contact
               </NavigationListItem>
            </Navigation>
         </HeaderPrimaryContent>
      </HeaderPrimary>
   );
};

export default Header;
