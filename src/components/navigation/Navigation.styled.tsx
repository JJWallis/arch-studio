import styled from 'styled-components';
import { device } from '../../config/theme/device';
import { TABLET_NAVIGATION_GAP } from '../../constants/styles';
import { Z_INDEX_MOBILE_NAV } from '../../constants/zIndex';

export const NavigationPrimary = styled.nav`
   @media ${device.maxTablet} {
      position: absolute;
      top: 100%;
      right: 0;
      width: calc(100% - var(--site-padding));
      max-width: 400px;
      padding: 30px;
      z-index: ${Z_INDEX_MOBILE_NAV};
      background-color: var(--clr-mild-grey);
      transform: translateX(var(--mobile-nav-transform));
      transition: transform 300ms ease-in-out;
   }
`;

export const MobileNavigationList = styled.ul`
   margin: 0;
   padding: 0;
   @media ${device.tablet} {
      display: flex;
      align-items: center;
      gap: ${TABLET_NAVIGATION_GAP};
   }
`;
