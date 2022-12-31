import styled from 'styled-components';
import { device } from '../../config/theme/device';

export const ExtraLargeTitle = styled.span.attrs({
   'aria-hidden': true,
})`
   @media ${device.maxTablet} {
      display: none;
   }
   --font-size: ${120 / 16}rem;
   color: var(--clr-very-light-grey);
   font-size: var(--font-size);
   line-height: var(--lh-heading-xl);
   font-weight: var(--fw-bold);

   @media ${device.laptop} {
      --font-size: 220px;
   }

   @media ${device.laptopL} {
      --font-size: var(--fs-heading-xl);
   }
`;
