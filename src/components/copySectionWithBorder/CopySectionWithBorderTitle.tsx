import styled from 'styled-components';
import { device } from '../../config/theme/device';

export const CopySectionWithBorderTitle = styled.h2`
   font-size: var(--fs-heading-small-medium);
   line-height: var(--lh-heading-small);
   color: var(--clr-dark-blue);

   @media ${device.tablet} {
      font-size: var(--fs-heading-medium);
      line-height: var(--lh-heading-medium);
   }
`;
