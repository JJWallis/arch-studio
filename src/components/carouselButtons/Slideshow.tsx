import styled from 'styled-components';
import { device } from '../../config/theme/device';
import { SLIDE_SHOW_BUTTON_WIDTH } from '../../constants/styles';
import { CarouselButton } from './CarouselButton';

export const SlideshowButtonsContainer = styled.div`
   --transform-amount: calc(var(--site-padding) - ${SLIDE_SHOW_BUTTON_WIDTH});
   position: absolute;
   left: calc(0px - ${SLIDE_SHOW_BUTTON_WIDTH});
   bottom: 0;
   display: flex;
   overflow: hidden;
   @media ${device.maxLaptop} {
      display: none;
   }

   @keyframes slidein {
      from {
         transform: translateX(-100%);
      }

      to {
         transform: translateX(0%);
      }
   }

   animation: 0.7s slidein;
`;

interface Props {
   activeIndex: number;
   handleSlideShowButtonClick: (targetIndex: number) => void;
}

const Slideshow: React.FC<Props> = ({
   activeIndex,
   handleSlideShowButtonClick,
}) => {
   const carouselButtonProps = {
      activeIndex: activeIndex,
      handleSlideShowButtonClick: handleSlideShowButtonClick,
   };

   return (
      <SlideshowButtonsContainer>
         <CarouselButton {...carouselButtonProps} targetIndex={0}>
            01
         </CarouselButton>
         <CarouselButton {...carouselButtonProps} targetIndex={1}>
            02
         </CarouselButton>
         <CarouselButton {...carouselButtonProps} targetIndex={2}>
            03
         </CarouselButton>
         <CarouselButton {...carouselButtonProps} targetIndex={3}>
            04
         </CarouselButton>
      </SlideshowButtonsContainer>
   );
};

export default Slideshow;
