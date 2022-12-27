import styled from 'styled-components';

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
