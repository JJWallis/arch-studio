import React from 'react';
import { MOBILE_NAVIGATION } from '../../constants/ids';
import { HamburgerButton } from './Hamburger.styled';

interface Props {
   isMobileNavVisible: boolean;
   toggleMobileNav: () => void;
}

const Hamburger: React.FC<Props> = ({
   isMobileNavVisible,
   toggleMobileNav,
}) => {
   return (
      <HamburgerButton
         aria-label="mobile navigation"
         aria-expanded={isMobileNavVisible}
         onClick={toggleMobileNav}
         aria-controls={MOBILE_NAVIGATION}
      >
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
            <g fill="#1B1D23" fill-rule="evenodd">
               <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
            </g>
         </svg>
      </HamburgerButton>
   );
};

export default Hamburger;
