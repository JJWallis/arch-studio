import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { device } from '../../config/theme/device';
import CopySectionWithBorder from './CopySectionWithBorder';
import WelcomeImage from '../../../public/assets/home/desktop/image-welcome.jpg';

const Wrapper = styled(CopySectionWithBorder)`
   outline: 1px solid black;
   @media ${device.laptop} {
      display: grid;
      grid-template-columns: 1fr auto;
   }
`;

// todo -> make separate component (used on all pages)
const Title = styled.h2`
   margin-bottom: 22px;
   font-size: var(--fs-heading-small-medium);
   line-height: var(--lh-heading-small);
   color: var(--clr-dark-blue);
`;

const Paragraph = styled.p`
   color: var(--clr-mild-grey);
   &:not(:last-child) {
      margin-bottom: 15px;
   }
`;

const LaptopImage = styled(Image)`
   @media ${device.maxLaptop} {
      display: none;
   }
`;

const CopySectionWithBorderHome = () => {
   return (
      <Wrapper variant="home">
         <div>
            <Title>Welcome to Arch Studio</Title>
            <Paragraph>
               We have a unique network and skillset to help bring your projects
               to life. Our small team of highly skilled individuals combined
               with our large network put us in a strong position to deliver
               exceptional results.
            </Paragraph>
            <Paragraph>
               Over the past 10 years, we have worked on all kinds of projects.
               From stations to high-rise buildings, we create spaces that
               inspire and delight.
            </Paragraph>
            <Paragraph>
               We work closely with our clients so that we understand the
               intricacies of each project. This allows us to work in harmony
               the surrounding area to create truly stunning projects that will
               stand the test of time.
            </Paragraph>
         </div>
         <div>
            <LaptopImage src={WelcomeImage} alt="" />
         </div>
      </Wrapper>
   );
};

export default CopySectionWithBorderHome;
