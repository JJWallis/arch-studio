import styled, { css } from 'styled-components';
import { SLIDE_SHOW_BUTTON_WIDTH } from '../../constants/styles';
import { StyledButton } from './Button';

interface SlideshowButtonProps {
   children: React.ReactNode;
   isActive?: boolean;
   onClick: (index: number) => void;
}

interface StyledSlideshowButtonProps {
   isActive?: boolean;
}

const StyledSlideshowButton = styled(StyledButton)<StyledSlideshowButtonProps>`
   width: ${SLIDE_SHOW_BUTTON_WIDTH};
   height: 80px;
   padding: 0;
   background-color: white;
   color: var(--clr-dark-grey);

   ${({ isActive }) =>
      isActive &&
      css`
         background-color: black;
         color: white;
      `}
`;

export const SlideshowButton: React.FC<SlideshowButtonProps> = ({
   children,
   ...props
}) => (
   <StyledSlideshowButton {...props} isSlideShowVariant>
      {children}
   </StyledSlideshowButton>
);
