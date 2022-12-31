import React from 'react';
import styled from 'styled-components';
import { device } from '../../config/theme/device';
import { ExtraLargeTitle } from '../styled/ExtraLargeTitle';
import CopySectionWithBorder from './CopySectionWithBorder';
import { CopySectionWithBorderTitle } from './CopySectionWithBorderTitle';

const Wrapper = styled(CopySectionWithBorder)`
   position: relative;
   @media ${device.laptop} {
      --gap: 80px;
      display: grid;
      grid-template-columns: minmax(400px, 1fr) minmax(200px, 350px); // 350px === welcome image native width
      gap: var(--gap);
   }

   @media ${device.laptopL} {
      --gap: 125px;
   }
`;

const WelcomeTitle = styled(ExtraLargeTitle)`
   position: absolute;
   left: 0;
   bottom: 100%;
`;

const ContentWrapper = styled.div`
   display: grid;
   justify-items: right;
`;

const Content = styled.div`
   @media ${device.laptop} {
      max-width: 446px;
   }
`;

const Title = styled(CopySectionWithBorderTitle)`
   margin-bottom: 22px;

   @media ${device.tablet} {
      margin-bottom: 43px;
      max-width: 400px;
   }
`;

const Paragraph = styled.p`
   color: var(--clr-mild-grey);

   &:not(:last-child) {
      margin-bottom: 15px;
   }
`;

const WelcomeImage = styled.div`
   background-image: url('/assets/home/desktop/image-welcome.jpg');
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;

   @media ${device.maxLaptop} {
      display: none;
   }
`;

const CopySectionWithBorderHome = () => {
   return (
      <Wrapper variant="home">
         <WelcomeTitle>Welcome</WelcomeTitle>
         <ContentWrapper>
            <Content>
               <Title>Welcome to Arch Studio</Title>
               <Paragraph>
                  We have a unique network and skillset to help bring your
                  projects to life. Our small team of highly skilled individuals
                  combined with our large network put us in a strong position to
                  deliver exceptional results.
               </Paragraph>
               <Paragraph>
                  Over the past 10 years, we have worked on all kinds of
                  projects. From stations to high-rise buildings, we create
                  spaces that inspire and delight.
               </Paragraph>
               <Paragraph>
                  We work closely with our clients so that we understand the
                  intricacies of each project. This allows us to work in harmony
                  the surrounding area to create truly stunning projects that
                  will stand the test of time.
               </Paragraph>
            </Content>
         </ContentWrapper>
         <WelcomeImage />
      </Wrapper>
   );
};

export default CopySectionWithBorderHome;
