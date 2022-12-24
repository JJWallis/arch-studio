import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { device } from '../../config/theme/device';
import { Z_INDEX_PAGE_HIGHLIGHTER } from '../../constants/zIndex';

interface Props {
   elementWidth: number;
}

const FlexCt = styled.div<Props>`
   display: none;

   @media ${device.tablet} {
      /* --spacing: calc(var(--site-padding) / 2);
      --sl: calc(272px / 2);
      --new-spacing: calc(var(--spacing) - var(--sl)); */
      --exact-top-offset-x: calc(var(--header-padding-y) * -1);
      --element-width: ${({ elementWidth }) => `${elementWidth}px`};
      --half-element-width: calc(var(--element-width) / 2);
      --line-width: 104px;
      --ratio: calc(var(--line-width) * 0.1154);
      outline: 1px solid black;
      display: flex;
      align-items: center;
      gap: 30px;
      position: absolute;
      z-index: ${Z_INDEX_PAGE_HIGHLIGHTER};
      top: calc(
         var(--exact-top-offset-x) + var(--half-element-width) - var(--ratio)
      );
      left: 50%;
      color: var(--clr-light-grey);
      letter-spacing: 1ch;
      text-transform: uppercase;
      pointer-events: none;
      transform-origin: left;
      transform: rotateZ(90deg) translateX(-50%);

      &::before {
         content: '';
         display: block;
         height: 1px;
         width: var(--line-width);
         background-color: var(--clr-light-grey);
      }
   }
`;

export const HeaderPageHighlighter: React.FC = () => {
   const [elementWidth, setElementWidth] = useState(0);
   const elementRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (elementRef.current) setElementWidth(elementRef.current?.offsetWidth);
   }, []); // todo -> changes when page state changes

   return (
      <FlexCt ref={elementRef} aria-hidden elementWidth={elementWidth}>
         home
      </FlexCt>
   );
};
