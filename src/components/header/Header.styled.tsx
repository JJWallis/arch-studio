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
   ${contentWrapperStyles}

   @media ${device.tablet} {
      --justify-content: flex-start;
      gap: ${TABLET_NAVIGATION_GAP};
   }
`;
