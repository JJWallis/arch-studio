import { StyledButton } from '../button/Button';

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
      $isActive={activeIndex === targetIndex}
      onClick={() => handleSlideShowButtonClick(targetIndex)}
   >
      {children}
   </StyledButton>
);
