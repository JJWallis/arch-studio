import styled from 'styled-components';
import { SLIDE_SHOW_BUTTON_WIDTH } from '../../constants/styles';
import { SlideshowButtonsContainer } from '../carouselButtons/Slideshow';

interface ButtonProps {
   isActive?: boolean;
}

const Button = styled.button<ButtonProps>`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 20px;
   padding: 20px;
   font-weight: var(--fw-medium);
   background-color: var(--clr-dark-blue);
   color: white;
   transition: background-color 100ms ease-in-out, color 100ms ease-in-out;
   cursor: pointer;

   &:hover {
      color: white;
      background-color: var(--clr-dark-grey);
   }

   &:active {
      color: white;
      background-color: var(--clr-light-grey);
   }

   ${SlideshowButtonsContainer} & {
      width: ${SLIDE_SHOW_BUTTON_WIDTH};
      height: ${SLIDE_SHOW_BUTTON_WIDTH};
      padding: 0;
      color: ${({ isActive }) => (isActive ? 'white' : 'black')};
      background-color: ${({ isActive }) => (isActive ? 'black' : 'white')};

      &:hover {
         color: var(--clr-dark-grey);
         background-color: var(--clr-light-grey);
      }

      &:active {
         background-color: var(--clr-dark-blue);
      }
   }
`;

interface StyledButtonProps {
   children: React.ReactNode;
   isActive?: boolean;
   onClick: () => void;
}

export const StyledButton: React.FC<StyledButtonProps> = ({
   children,
   ...props
}) => <Button {...props}>{children}</Button>;
