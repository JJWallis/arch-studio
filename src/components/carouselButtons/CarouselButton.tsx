import { StyledButton } from '../button/StyledButton';

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
   <StyledButton
      variant="carousel"
      $isActive={activeIndex === targetIndex}
      onClick={() => handleSlideShowButtonClick(targetIndex)}
   >
      {children}
   </StyledButton>
);
