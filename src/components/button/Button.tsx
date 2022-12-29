import styled from 'styled-components';
import { GenericFunction } from '../../types/globalTypes';
import { StyledCarouselButton } from '../carouselButtons/CarouselButton.styled';

// StyledDefaultButton
// StyledButton (filename change)

export const Button = styled.button`
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
`;

interface StyledButtonProps {
   children: React.ReactNode;
   variant: 'carousel' | 'default';
   as?: string;
   href?: string;
   name?: string;
   value?: string;
   type?: 'button' | 'submit' | 'reset' | undefined;
   onClick?: GenericFunction;
   disabled?: boolean;
}

export const StyledButton: React.FC<StyledButtonProps> = ({
   children,
   variant,
   href,
   name,
   value,
   type,
   onClick,
   disabled,
   as,
   ...props
}) => {
   const targetProps =
      as === 'a'
         ? {
              href,
           }
         : {
              name,
              value,
              type: type || 'button',
              onClick,
              disabled,
           };

   const Component = variant === 'carousel' ? StyledCarouselButton : Button;
   return <Component {...{ ...props, ...targetProps }}>{children}</Component>;
};
