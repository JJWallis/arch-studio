import styled from 'styled-components';
import { device } from '../../config/theme/device';

export const Content = styled.div`
   grid-column: 1 / -1;
   grid-row: 1 / -1;
   align-self: center;
   max-width: 600px;
   margin-inline: auto;
   padding-block: 10px;
   @media ${device.maxTablet} {
      padding-inline: var(--site-padding);
   }

   @media ${device.tablet} {
      padding-inline: var(--image-padding);
   }
`;

export const Title = styled.h1`
   margin-bottom: 10px;
   color: white;
   font-size: var(--fs-heading-small-medium);
   line-height: var(--lh-heading-medium);

   @media ${device.tablet} {
      font-size: var(--fs-heading-medium);
   }
`;

export const Description = styled.p`
   width: 90%;
   margin-bottom: 3em;
   color: white;
`;
