import Link from 'next/link';
import styled from 'styled-components';
import { device } from '../../config/theme/device';
import { ExtraLargeTitle } from '../styled/ExtraLargeTitle';
import { imageSourceTitle } from './Gallery.types';

export const GalleryContainer = styled.div.attrs({ role: 'grid' })`
   --template-columns: 1fr;
   display: grid;
   grid-template-columns: var(--template-columns);
   gap: 24px;

   @media ${device.laptop} {
      --template-columns: repeat(3, 1fr);
   }
`;

type GalleryPieceProps = { imageSourceTitle: imageSourceTitle };

export const GalleryPiece = styled.div.attrs({
   role: 'grid-cell',
})<GalleryPieceProps>`
   --bg-image-src: url(${({ imageSourceTitle }) =>
      `/assets/portfolio/mobile/${imageSourceTitle}`});
   --min-height: 260px;
   position: relative;
   display: grid;
   grid-template-columns: 1fr;
   min-height: var(--min-height);
   background-image: var(--bg-image-src);
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;

   &::before {
      content: '';
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.2);
      pointer-events: none;
   }

   @media ${device.tablet} {
      --bg-image-src: url(${({ imageSourceTitle }) =>
         `/assets/portfolio/tablet/${imageSourceTitle}`});
   }

   @media ${device.laptop} {
      --min-height: 560px;
      --bg-image-src: url(${({ imageSourceTitle }) =>
         `/assets/portfolio/desktop/${imageSourceTitle}`});
   }
`;

export const GalleryPieceContent = styled.div`
   --spacing: ${24 / 16}rem;
   --padding: 0 0 var(--spacing) var(--spacing);
   position: relative;
   z-index: 2;
   grid-column: 1 / -1;
   grid-row: 1 / -1;
   align-self: flex-end;
   padding: var(--padding);

   @media ${device.tablet} {
      --spacing: ${40 / 16}rem;
   }
`;

export const GalleryPieceTitle = styled.h3`
   font-size: var(--fs-heading-small);
   font-weight: 700;
   color: white;
`;

export const GalleryPieceLink = styled(Link)`
   color: white;
`;

export const GalleryImageNumber = styled(ExtraLargeTitle)`
   position: absolute;
   top: 30px;
   right: 16px;
   --font-size: var(--fs-heading-xl);
   opacity: 50%;
   pointer-events: none;

   @media ${device.laptop} {
      right: -14px;
   }
`;
