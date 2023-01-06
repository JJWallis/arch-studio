import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { device } from '../../config/theme/device';
import { ROUTE_PORTFOLIO } from '../../constants/routes';
import { ArrowAndCopyButton } from '../button/ArrowAndCopyButton';
import { contentWrapperStyles } from '../styled/ContentWrapperStyles';
import StaticImage from '../../../public/assets/portfolio/tablet/image-228b.jpg';
import Link from 'next/link';
import { ExtraLargeTitle } from '../styled/ExtraLargeTitle';

const Wrapper = styled.section`
   ${contentWrapperStyles}
   margin-block: 73px;
   @media ${device.maxTablet} {
      padding-inline: var(--site-padding);
   }
`;

const Header = styled.header`
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

const Title = styled.h2`
   --margin-bottom: 43px;
   margin-bottom: var(--margin-bottom);
   font-size: var(--fs-heading-small-medium);
   font-weight: var(--fw-bold);

   @media ${device.tablet} {
      --margin-bottom: 0;
      position: relative;
      top: 7px;
      font-size: var(--fs-heading-medium);
   }
`;

const SeeAllButton = styled(ArrowAndCopyButton)`
   @media ${device.maxTablet} {
      display: none;
   }
`;

const Gallery = styled.div.attrs({ role: 'grid' })`
   display: grid;
   grid-template-columns: 1fr;

   @media ${device.laptop} {
      grid-template-columns: repeat(3, 1fr);
   }
`;

const GalleryPiece = styled.div.attrs({ role: 'grid-cell' })`
   position: relative;
   display: grid;
   grid-template-columns: 1fr;

   &::before {
      content: '';
      position: relative;
      z-index: 1;
      background-color: rgba(0, 0, 0, 0.15);
      grid-column: 1 / -1;
      grid-row: 1 / -1;
      height: 100%;
      width: 100%;
      pointer-events: none;
   }
`;

const GalleryPieceImage = styled(Image)`
   grid-column: 1 / -1;
   grid-row: 1 / -1;
`;

const GalleryPieceContent = styled.div`
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

const GalleryPieceTitle = styled.h3`
   font-size: var(--fs-heading-small);
   font-weight: 700;
   color: white;
`;

const GalleryPieceLink = styled(Link)`
   color: white;
`;

const GalleryImageNumber = styled(ExtraLargeTitle)`
   position: absolute;
   top: 30px;
   right: 16px;
   --font-size: var(--fs-heading-xl);
   opacity: 50%;
`;

const Featured: React.FC = () => (
   <Wrapper>
      <Header>
         <Title>Featured</Title>
         <SeeAllButton href={ROUTE_PORTFOLIO}>See All</SeeAllButton>
      </Header>
      <Gallery>
         <GalleryPiece>
            <GalleryPieceImage src={StaticImage} alt="" />
            <GalleryPieceContent>
               <GalleryPieceTitle>228B Tower</GalleryPieceTitle>
               <GalleryPieceLink href={ROUTE_PORTFOLIO}>
                  View All Projects
               </GalleryPieceLink>
            </GalleryPieceContent>
            <GalleryImageNumber aria-hidden>1</GalleryImageNumber>
         </GalleryPiece>
         <GalleryPiece>
            <GalleryPieceImage src={StaticImage} alt="" />
            <GalleryPieceContent>
               <GalleryPieceTitle>228B Tower</GalleryPieceTitle>
               <GalleryPieceLink href={ROUTE_PORTFOLIO}>
                  View All Projects
               </GalleryPieceLink>
            </GalleryPieceContent>
         </GalleryPiece>
         <GalleryPiece>
            <GalleryPieceImage src={StaticImage} alt="" />
            <GalleryPieceContent>
               <GalleryPieceTitle>228B Tower</GalleryPieceTitle>
               <GalleryPieceLink href={ROUTE_PORTFOLIO}>
                  View All Projects
               </GalleryPieceLink>
            </GalleryPieceContent>
         </GalleryPiece>
      </Gallery>
   </Wrapper>
);

export default Featured;
