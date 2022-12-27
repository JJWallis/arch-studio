import styled from 'styled-components';
import { device } from '../../config/theme/device';
import { SLIDE_SHOW_BUTTON_WIDTH } from '../../constants/styles';

export const CarouselButtonsContainer = styled.div`
   --transform-amount: calc(var(--site-padding) - ${SLIDE_SHOW_BUTTON_WIDTH});
   position: absolute;
   left: calc(0px - ${SLIDE_SHOW_BUTTON_WIDTH});
   bottom: 0;
   display: flex;
   overflow: hidden;
   @media ${device.maxLaptop} {
      display: none;
   }

   @keyframes slidein {
      from {
         transform: translateX(-100%);
      }

      to {
         transform: translateX(0%);
      }
   }

   animation: 0.7s slidein;
`;
