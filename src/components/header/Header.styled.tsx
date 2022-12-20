import styled from 'styled-components';
import { device } from '../../config/theme/device';
import { TABLET_NAVIGATION_GAP } from '../../constants/styles';

interface HeaderPrimaryProps {
   isMobileNavVisible: boolean;
}

export const HeaderPrimary = styled.header<HeaderPrimaryProps>`
   --mobile-nav-transform: ${({ isMobileNavVisible }) =>
      isMobileNavVisible ? '0' : '110%'};

   outline: 2px solid black;
   position: relative;
   padding-block: 30px;

   @media ${device.maxTablet} {
      padding-inline: var(--site-padding);
   }
`;

export const HeaderPrimaryContent = styled.div`
   --justify-content: space-between;
   display: flex;
   justify-content: var(--justify-content);
   align-items: center;
   max-width: var(--site-max-width);
   margin: 0 auto;

   @media ${device.tablet} {
      --justify-content: flex-start;
      gap: ${TABLET_NAVIGATION_GAP};
   }
`;
