import React from 'react';
import { ROUTE_PORTFOLIO } from '../../constants/routes';
import {
   GalleryImageNumber,
   GalleryPiece as Wrapper,
   GalleryPieceContent,
   GalleryPieceLink,
   GalleryPieceTitle,
} from './Gallery.styled';
import type { imageSourceTitle } from './Gallery.types';

interface Props {
   imageTitle: string;
   imageNumber?: number;
   imageSourceTitle: imageSourceTitle;
}

const GalleryPiece: React.FC<Props> = ({
   imageTitle,
   imageNumber,
   ...props
}) => (
   <Wrapper {...props}>
      <GalleryPieceContent>
         <GalleryPieceTitle>{imageTitle}</GalleryPieceTitle>
         <GalleryPieceLink href={ROUTE_PORTFOLIO}>
            View All Projects
         </GalleryPieceLink>
      </GalleryPieceContent>
      {imageNumber && (
         <GalleryImageNumber aria-hidden>{imageNumber}</GalleryImageNumber>
      )}
   </Wrapper>
);

export default GalleryPiece;
