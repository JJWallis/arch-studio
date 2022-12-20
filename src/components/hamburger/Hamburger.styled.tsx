import styled from 'styled-components';
import { device } from '../../config/theme/device';

export const HamburgerButton = styled.button`
   cursor: pointer;

   @media ${device.tablet} {
      display: none;
   }
`;
