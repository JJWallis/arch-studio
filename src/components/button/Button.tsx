import styled, { css } from 'styled-components';
import { SLIDE_SHOW_BUTTON_WIDTH } from '../../constants/styles';
import { GenericFunction } from '../../types/globalTypes';

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

type StyledCarouselButtonProps = StyledButtonProps;

const StyledCarouselButton = styled(Button)<StyledCarouselButtonProps>`
   ${({ $isActive }) =>
      $isActive &&
      css`
         --fg-clr: white;
         --bg-clr: black;
      `};

   width: ${SLIDE_SHOW_BUTTON_WIDTH};
   height: ${SLIDE_SHOW_BUTTON_WIDTH};
   padding: 0;
   color: var(--fg-clr, black);
   background-color: var(--bg-clr, white);

   &:hover {
      color: var(--clr-dark-grey);
      background-color: var(--clr-light-grey);
   }

   &:active {
      background-color: var(--clr-dark-blue);
   }
`;

interface StyledButtonProps {
   children: React.ReactNode;
   variant: 'default' | 'carousel';
   as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
   href?: string;
   name?: string;
   value?: string;
   type?: 'button' | 'submit' | 'reset' | undefined;
   onClick?: GenericFunction;
   disabled?: boolean;
   style?: React.CSSProperties;
   $isActive?: boolean;
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
              as,
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
