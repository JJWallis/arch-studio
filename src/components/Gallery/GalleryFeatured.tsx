import React from 'react';
import styled from 'styled-components';
import { device } from '../../config/theme/device';
import { ROUTE_PORTFOLIO } from '../../constants/routes';
import { ArrowAndCopyButton } from '../button/ArrowAndCopyButton';
import { GalleryContainer } from './Gallery.styled';
import GalleryPiece from './GalleryPiece';

const SeeAllButton = styled(ArrowAndCopyButton)`
   min-width: 100%;
   @media ${device.tablet} {
      display: none;
   }
`;

const GalleryFeatured = () => (
   <GalleryContainer>
      <GalleryPiece
         imageSourceTitle="image-del-sol.jpg"
         imageTitle="Project Del Sol"
         imageNumber={2}
      />
      <GalleryPiece
         imageSourceTitle="image-228b.jpg"
         imageTitle="228B Tower"
         imageNumber={2}
      />
      <GalleryPiece
         imageSourceTitle="image-prototype.jpg"
         imageTitle="Le Prototype"
         imageNumber={2}
      />
      <SeeAllButton href={ROUTE_PORTFOLIO}>See All</SeeAllButton>
   </GalleryContainer>
);

export default GalleryFeatured;
