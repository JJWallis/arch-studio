import { CarouselButton } from './CarouselButton';
import { CarouselButtonsContainer } from './CarouselButtons.styled';

interface Props {
   activeIndex: number;
   handleSlideShowButtonClick: (targetIndex: number) => void;
}

const CarouselButtons: React.FC<Props> = ({
   activeIndex,
   handleSlideShowButtonClick,
}) => {
   const carouselButtonProps = {
      activeIndex,
      handleSlideShowButtonClick,
   };

   return (
      <CarouselButtonsContainer>
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
      </CarouselButtonsContainer>
   );
};

export default CarouselButtons;
