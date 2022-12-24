import Link from 'next/link';
import styled from 'styled-components';
import { device } from '../../config/theme/device';

export const NavigationLink = styled(Link)`
   font-weight: var(--fw-medium);
   color: var(--clr-dark-grey);
   transition: color 100ms linear;

   @media ${device.maxTablet} {
      display: block;
      padding-block: 10px;
      color: var(--clr-dark-blue);
      font-size: var(--fs-heading-small);
      font-weight: var(--fw-bold);
   }

   @media ${device.tablet} {
      &:hover {
         color: var(--clr-dark-blue);
      }
   }
`;
