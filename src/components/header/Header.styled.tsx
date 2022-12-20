import styled from 'styled-components';
import { device } from '../../config/theme/device';
import { TABLET_NAVIGATION_GAP } from '../../constants/styles';

interface HeaderPrimaryProps {
   isMobileNavVisible: boolean;
}

export const HeaderPrimary = styled.header<HeaderPrimaryProps>`
   --justify-content: space-between;
   border: 2px solid black;
   position: relative;
   display: flex;
   justify-content: var(--justify-content);
   align-items: center;
   padding: 30px var(--site-padding);
   width: 100%;
   max-width: var(--site-max-width);
   margin: 0 auto;
   --mobile-nav-transform: ${({ isMobileNavVisible }) =>
      isMobileNavVisible ? '0' : '100%'};

   @media ${device.tablet} {
      --justify-content: flex-start;
      gap: ${TABLET_NAVIGATION_GAP};
   }
`;
