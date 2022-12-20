import styled from 'styled-components';
import { device } from '../../config/theme/device';
import { MOBILE_PADDING } from '../../constants/styles';

export const MobileNavigation = styled.nav`
   @media ${device.maxTablet} {
      position: absolute;
      top: 100%;
      right: 0;
      width: calc(100% - ${MOBILE_PADDING});
      max-width: 350px;
      padding: 30px;
      z-index: 100;
      background-color: var(--clr-mild-grey);
   }
`;

export const MobileNavigationList = styled.ul`
   margin: 0;
   padding: 0;
`;
