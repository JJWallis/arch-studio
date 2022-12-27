import { StyledCarouselButton } from './CarouselButton.styled';

interface Props {
   children: React.ReactNode;
   activeIndex: number;
   targetIndex: number;
   handleSlideShowButtonClick: (targetIndex: number) => void;
}

export const CarouselButton: React.FC<Props> = ({
   children,
   activeIndex,
   targetIndex,
   handleSlideShowButtonClick,
}) => (
   <StyledCarouselButton
      $isActive={activeIndex === targetIndex}
      onClick={() => handleSlideShowButtonClick(targetIndex)}
   >
      {children}
   </StyledCarouselButton>
);
