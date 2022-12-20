import React from 'react';
import { MOBILE_NAVIGATION } from '../../constants/ids';
import { NavigationPrimary, MobileNavigationList } from './Navigation.styled';

interface Props {
   children: React.ReactNode;
}

const Navigation: React.FC<Props> = ({ children }) => (
   <NavigationPrimary>
      <MobileNavigationList id={MOBILE_NAVIGATION}>
         {children}
      </MobileNavigationList>
   </NavigationPrimary>
);

export default Navigation;
