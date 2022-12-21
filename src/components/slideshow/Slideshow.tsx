import styled from 'styled-components';
import { device } from '../../config/theme/device';
import { ArrowAndCopyButton } from '../button/ArrowAndCopyButton';

import { contentWrapperStyles } from '../styled/ContentWrapperStyles';

const Article = styled.article`
   outline: 1px solid blue;
   display: grid;
   grid-template-columns: 1fr;
   min-height: 573px;
   ${contentWrapperStyles}
   background-image: url('/assets/home/tablet/image-hero-paramour.jpg');
   background-position: center;
   background-size: cover;
   background-repeat: no-repeat;

   @media ${device.tablet} {
      background-image: url('/assets/home/desktop/image-hero-paramour.jpg');
   }

   &::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.3);
      grid-column: 1 / -1;
      grid-row: 1 / -1;
   }
`;

const Title = styled.h1`
   margin-bottom: 10px;
   color: white;
   font-size: var(--fs-heading-small-medium);
   line-height: var(--lh-heading-medium);

   @media ${device.tablet} {
      font-size: var(--fs-heading-medium);
   }
`;

const Content = styled.div`
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

const Description = styled.p`
   width: 90%;
   margin-bottom: 3em;
   color: white;
`;

const Slideshow: React.FC = () => (
   <Article>
      <Content>
         <Title>Project Paramour</Title>
         <Description>
            Project made for an art museum near Southwest London. Project
            Paramour is a statement of bold, modern architecture.
         </Description>
         <ArrowAndCopyButton>See Our Portfolio</ArrowAndCopyButton>
      </Content>
   </Article>
);

export default Slideshow;
