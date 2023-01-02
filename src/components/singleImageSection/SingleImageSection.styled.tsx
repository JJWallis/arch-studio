import styled from 'styled-components';
import { device } from '../../config/theme/device';
import { contentWrapperStyles } from '../styled/ContentWrapperStyles';

export interface StyledWrapperProps {
   isPrimaryVariant?: boolean;
   imageSourceMobile: string;
   imageSourceDesktop: string;
}

export const StyledWrapper = styled.article.attrs<StyledWrapperProps>(
   ({ isPrimaryVariant }) => ({
      as: isPrimaryVariant ? 'article' : 'section',
   })
)<StyledWrapperProps>`
   position: relative;
   display: grid;
   grid-template-columns: 1fr;
   min-height: 573px;
   ${contentWrapperStyles}
   background-image: url(${({ imageSourceMobile }) => imageSourceMobile});
   background-position: center;
   background-size: cover;
   background-repeat: no-repeat;

   @media ${device.tablet} {
      background-image: url(${({ imageSourceDesktop }) => imageSourceDesktop});
   }

   &::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
      grid-column: 1 / -1;
      grid-row: 1 / -1;
   }
`;

export const Content = styled.div`
   grid-column: 1 / -1;
   grid-row: 1 / -1;
   align-self: center;
   width: 100%;
   max-width: 600px;
   padding-block: 10px;
   margin-inline: auto;
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
   font-size: clamp(
      var(--fs-heading-small-medium),
      12vw,
      var(--fs-heading-medium)
   );
   line-height: var(--lh-heading-medium);
`;

export const Description = styled.p`
   width: 90%;
   margin-bottom: 41px;
   color: white;
`;
