import styled from 'styled-components';
import { MOBILE_PADDING } from '../../constants/styles';

interface HeaderPrimaryProps {
   isMobileNavVisible: boolean;
}

export const HeaderPrimary = styled.header<HeaderPrimaryProps>`
   outline: 1px solid black;
   position: relative;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 30px ${MOBILE_PADDING};
   --mobile-nav-transform: ${({ isMobileNavVisible }) =>
      isMobileNavVisible ? '0' : '100%'};
`;
