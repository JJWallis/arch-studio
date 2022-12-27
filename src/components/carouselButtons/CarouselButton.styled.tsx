import styled, { css } from 'styled-components';
import { SLIDE_SHOW_BUTTON_WIDTH } from '../../constants/styles';
import { Button } from '../button/Button';

interface Props {
   $isActive: boolean;
}

export const StyledCarouselButton = styled(Button)<Props>`
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
