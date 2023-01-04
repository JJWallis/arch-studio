import React from 'react';
import styled from 'styled-components';
import { device } from '../../config/theme/device';
import { ROUTE_PORTFOLIO } from '../../constants/routes';
import { ArrowAndCopyButton } from '../button/ArrowAndCopyButton';
import { contentWrapperStyles } from '../styled/ContentWrapperStyles';

const Wrapper = styled.section`
   outline: solid;
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

const Featured: React.FC = () => (
   <Wrapper>
      <Header>
         <Title>Featured</Title>
         <SeeAllButton href={ROUTE_PORTFOLIO}>See All</SeeAllButton>
      </Header>
   </Wrapper>
);

export default Featured;
