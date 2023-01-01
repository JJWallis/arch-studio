import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { device } from '../../config/theme/device';
import { Z_INDEX_PAGE_HIGHLIGHTER } from '../../constants/zIndex';

interface FlexCtProps {
   elementWidth: number;
}

const FlexCt = styled.div<FlexCtProps>`
   display: none;

   @media ${device.tablet} {
      /* Y VALUES */
      --exact-top-offset-x: calc(var(--header-padding-y) * -1);
      --element-width: ${({ elementWidth }) => `${elementWidth}px`};
      --half-element-width: calc(var(--element-width) / 2);
      --line-width: 104px;
      --ratio: calc(var(--line-width) * 0.1154);

      display: flex;
      align-items: center;
      gap: 45px;
      position: absolute;
      z-index: ${Z_INDEX_PAGE_HIGHLIGHTER};
      top: calc(
         var(--exact-top-offset-x) + var(--half-element-width) - var(--ratio)
      );
      left: 0;
      color: var(--clr-light-grey);
      letter-spacing: 18px;
      text-transform: uppercase;
      pointer-events: none;
      transform-origin: left;
      transform: rotateZ(90deg) translateX(-50%)
         translateY(calc(var(--site-padding) / 2));

      @keyframes slideinvertical {
         from {
            transform: rotateZ(90deg) translateX(-100%)
               translateY(calc(var(--site-padding) / 2));
         }

         to {
            transform: rotateZ(90deg) translateX(-50%)
               translateY(calc(var(--site-padding) / 2));
         }
      }

      animation: 1s slideinvertical;

      &::before {
         content: '';
         display: block;
         height: 1px;
         width: var(--line-width);
         background-color: var(--clr-light-grey);
      }
   }

   @media ${device.desktopM} {
      transform: rotateZ(90deg) translateX(-50%)
         translateY(calc(var(--site-padding)));

      @keyframes slideinvertical {
         from {
            transform: rotateZ(90deg) translateX(-100%)
               translateY(calc(var(--site-padding)));
         }

         to {
            transform: rotateZ(90deg) translateX(-50%)
               translateY(calc(var(--site-padding)));
         }
      }
   }
`;

interface Props {
   currentPageTitle: string;
}

export const HeaderPageHighlighter: React.FC<Props> = ({
   currentPageTitle,
}) => {
   const [elementWidth, setElementWidth] = useState(0);
   const elementRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (elementRef.current) setElementWidth(elementRef.current?.offsetWidth);
   }, [currentPageTitle]);

   return (
      <FlexCt ref={elementRef} elementWidth={elementWidth} aria-hidden>
         {currentPageTitle}
      </FlexCt>
   );
};
