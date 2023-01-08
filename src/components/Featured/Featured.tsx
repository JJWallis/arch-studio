import React from 'react';
import styled from 'styled-components';
import { device } from '../../config/theme/device';
import { ROUTE_PORTFOLIO } from '../../constants/routes';
import { ArrowAndCopyButton } from '../button/ArrowAndCopyButton';
import { contentWrapperStyles } from '../styled/ContentWrapperStyles';
import GalleryFeatured from '../gallery/GalleryFeatured';

const Wrapper = styled.section`
   ${contentWrapperStyles}
   margin-block: 73px;
   @media ${device.maxTablet} {
      padding-inline: var(--site-padding);
   }
`;

const Header = styled.header`
   --margin-bottom: 43px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: var(--margin-bottom);

   @media ${device.tablet} {
      --margin-bottom: 85px;
   }
`;

const Title = styled.h2`
   font-size: var(--fs-heading-small-medium);
   font-weight: var(--fw-bold);

   @media ${device.tablet} {
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

const Featured: React.FC = () => (
   <Wrapper>
      <Header>
         <Title>Featured</Title>
         <SeeAllButton href={ROUTE_PORTFOLIO}>See All</SeeAllButton>
      </Header>
      <GalleryFeatured />
   </Wrapper>
);

export default Featured;
