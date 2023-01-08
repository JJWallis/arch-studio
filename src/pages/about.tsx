import Image from 'next/image';
import styled from 'styled-components';
import heroImage from '../../public/assets/about/tablet/image-hero.jpg';
import { contentWrapperStyles } from '../components/styled/ContentWrapperStyles';
import { device } from '../config/theme/device';

const Wrapper = styled.article`
   outline: solid;
   display: grid;
   grid-template-columns: 1fr;
   ${contentWrapperStyles}

   @media ${device.tablet} {
      min-height: 720px;
      grid-template-columns: 58px 1fr;
      grid-template-rows: repeat(2, 1fr);
   }

   @media ${device.laptop} {
      grid-template-columns: minmax(535px, 1fr) 1fr;
      grid-template-rows: 217px 1fr;
   }
`;

const ImageWrapper = styled.div`
   @media ${device.tablet} and ${device.maxLaptop} {
      grid-column: 1 / -1;
      grid-row: 1 / -1;
   }

   @media ${device.laptop} {
      grid-row: 1 / -1;
   }
`;

const Content = styled.div`
   @media ${device.maxTablet} {
      position: relative;
      top: -45px;
      width: calc(100% - 32px);
   }
   display: grid;
   padding-top: 65px;
   padding-inline: var(--site-padding);
   background-color: white;

   @media ${device.tablet} and ${device.maxLaptop} {
      align-content: flex-end;
      top: 0;
      grid-column: 2 / -1;
      grid-row: 2 / -1;
   }
`;

const Title = styled.h1`
   margin-bottom: 21px;
   font-size: var(--fs-heading-small-medium);
   line-height: var(--lh-heading-medium);
`;

const About = () => (
   <Wrapper>
      <ImageWrapper>
         <Image src={heroImage} alt="" />
      </ImageWrapper>
      <Content>
         <Title>Your team of professionals</Title>
         <p>
            Our small team of world-class professionals will work with you every
            step of the way. Strong relationships are at the core of everything
            we do. This extends to the relationship our projects have with their
            surroundings.
         </p>
      </Content>
   </Wrapper>
);

export default About;
