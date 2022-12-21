import styled from 'styled-components';
import { device } from '../../config/theme/device';
import { SLIDE_SHOW_BUTTON_WIDTH } from '../../constants/styles';
import { ArrowAndCopyButton } from '../button/ArrowAndCopyButton';
import { SlideshowButton } from '../button/SlideshowButton';

import { contentWrapperStyles } from '../styled/ContentWrapperStyles';

const Article = styled.article`
   position: relative;
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

const SlideshowButtonsContainer = styled.div`
   --transform-amount: calc(var(--site-padding) - ${SLIDE_SHOW_BUTTON_WIDTH});
   position: absolute;
   left: calc(0px - ${SLIDE_SHOW_BUTTON_WIDTH});
   bottom: 0;
   display: flex;
   @media ${device.maxLaptop} {
      display: none;
   }
   /* transform: translateX(calc(var(--transform-amount) * -1)); */
   /* transition: transform 100ms linear;/ */
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
      <SlideshowButtonsContainer>
         <SlideshowButton isActive>1</SlideshowButton>
         <SlideshowButton>2</SlideshowButton>
         <SlideshowButton>3</SlideshowButton>
         <SlideshowButton>4</SlideshowButton>
      </SlideshowButtonsContainer>
   </Article>
);

export default Slideshow;
