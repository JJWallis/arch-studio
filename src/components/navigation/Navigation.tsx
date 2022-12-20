import React from 'react';
import { MOBILE_NAVIGATION } from '../../constants/ids';
import { MobileNavigation, MobileNavigationList } from './Navigation.styled';

interface Props {
   children: React.ReactNode;
}

const Navigation: React.FC<Props> = ({ children }) => {
   return (
      <MobileNavigation>
         <MobileNavigationList id={MOBILE_NAVIGATION}>
            {children}
         </MobileNavigationList>
      </MobileNavigation>
   );
};

export default Navigation;
