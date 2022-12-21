import styled from 'styled-components';
import { device } from '../../config/theme/device';
import { TABLET_NAVIGATION_GAP } from '../../constants/styles';
import { contentWrapperStyles } from '../styled/ContentWrapperStyles';

interface HeaderPrimaryProps {
   isMobileNavVisible: boolean;
}

export const HeaderPrimary = styled.header<HeaderPrimaryProps>`
   --mobile-nav-transform: ${({ isMobileNavVisible }) =>
      isMobileNavVisible ? '0' : '100%'};
   --padding-y: 50px;
   position: relative;
   padding-block: var(--padding-y);

   @media ${device.maxTablet} {
      --padding-y: 30px;
      padding-inline: var(--site-padding);
   }
`;

export const HeaderPrimaryContent = styled.div`
   --justify-content: space-between;
   display: flex;
   justify-content: var(--justify-content);
   align-items: center;
   ${contentWrapperStyles}

   @media ${device.tablet} {
      --justify-content: flex-start;
      gap: ${TABLET_NAVIGATION_GAP};
   }
`;
