import Link from 'next/link';
import styled from 'styled-components';
import { device } from '../../config/theme/device';
import { ExtraLargeTitle } from '../styled/ExtraLargeTitle';
import { imageSourceTitle } from './Gallery.types';

export const GalleryContainer = styled.div.attrs({ role: 'grid' })`
   --template-columns: 1fr;
   display: grid;
   grid-template-columns: var(--template-columns);

   @media ${device.laptop} {
      --template-columns: repeat(3, 1fr);
   }
`;

type GalleryPieceProps = { imageSourceTitle: imageSourceTitle };

export const GalleryPiece = styled.div.attrs({
   role: 'grid-cell',
})<GalleryPieceProps>`
   position: relative;
   display: grid;
   grid-template-columns: 1fr;

   &::before {
      content: '';
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.15);
      pointer-events: none;
   }
`;

export const GalleryPieceContent = styled.div`
   --padding: 0 0 5% 7%;
   position: relative;
   z-index: 2;
   grid-column: 1 / -1;
   grid-row: 1 / -1;
   align-self: flex-end;
   padding: var(--padding);

   @media ${device.tablet} {
      --padding: 0 0 40px 40px;
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
`;
