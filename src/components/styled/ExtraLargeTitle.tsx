import styled from 'styled-components';
import { device } from '../../config/theme/device';

export const ExtraLargeTitle = styled.span.attrs({
   'aria-hidden': true,
})`
   --font-size: clamp(140px, 20vw, var(--fs-heading-xl));
   width: 100%;
   color: var(--clr-very-light-grey);
   font-size: var(--font-size);
   line-height: var(--lh-heading-xl);
   font-weight: var(--fw-bold);

   @media ${device.maxTablet} {
      display: none;
   }
`;
