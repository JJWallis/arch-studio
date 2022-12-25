import Link from 'next/link';
import styled from 'styled-components';
import { device } from '../../config/theme/device';

export const NavigationLink = styled(Link)`
   position: relative;
   font-weight: var(--fw-medium);
   color: var(--clr-dark-grey);
   transition: color 100ms linear;

   &[aria-current='true'] {
      &::before {
         content: '';
         display: block;
         width: 24px;
         height: 1px;
         position: absolute;
         bottom: -64%;
         left: 50%;
         transform: translateX(-50%);
         background-color: var(--clr-dark-blue);
      }
   }

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
