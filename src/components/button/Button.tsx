import styled, { css } from 'styled-components';

interface ButtonProps {
   isSlideShowVariant?: boolean;
}

const Button = styled.button<ButtonProps>`
   ${({ isSlideShowVariant }) =>
      isSlideShowVariant &&
      css`
         --hover-fg-color: var(--clr-dark-grey);
         --hover-bg-color: var(--clr-light-grey);
         --active-bg-color: var(--clr-dark-blue);
      `}

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
      color: var(--hover-fg-color, white);
      background-color: var(--hover-bg-color, var(--clr-dark-grey));
   }

   &:active {
      color: white;
      background-color: var(--active-bg-color, var(--clr-light-grey));
   }
`;

interface StyledButtonProps {
   children: React.ReactNode;
   isSlideShowVariant?: boolean;
}

export const StyledButton: React.FC<StyledButtonProps> = ({
   children,
   ...props
}) => <Button {...props}>{children}</Button>;
