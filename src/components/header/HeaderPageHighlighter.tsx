import styled from 'styled-components';
import { device } from '../../config/theme/device';

const FlexCt = styled.div`
   display: none;

   @media ${device.tablet} {
      --spacing: calc(var(--site-padding) / 2);
      --sl: calc(272px / 2);
      --new-spacing: calc(var(--spacing) - var(--sl));
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      gap: 30px;
      position: fixed;
      z-index: 99;
      top: 104px;
      width: 272px;
      left: calc(0px + var(--new-spacing));
      color: var(--clr-light-grey);
      letter-spacing: 1ch;
      text-transform: uppercase;
      pointer-events: none;
      transform: rotateZ(90deg);

      &::before {
         content: '';
         display: block;
         height: 1px;
         width: 104px;
         background-color: var(--clr-light-grey);
      }
   }
`;

export const HeaderPageHighlighter: React.FC = () => <FlexCt>home</FlexCt>;
