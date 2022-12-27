import styled from 'styled-components';

// todo -> create new comp at bottom to render either carousel button or default based on variant prop
// type variant prop as keyof
// pass certain props as link or button | disabled behavior too
// throw error if carousel btn passed as === a
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
