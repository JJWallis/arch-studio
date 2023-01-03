import type { NextPage } from 'next';
import styled from 'styled-components';
import CopySectionWithBorderHome from '../components/copySectionWithBorder/CopySectionWithBorderHome';
import { SingleImageSectionHeroHomeRenderer } from '../components/singleImageSection/SingleImageSectionHeroHomeRenderer';
import { SmallTeamSection } from '../components/singleImageSection/SmallTeamSection';

const WrapperStyles = styled.div`
   --card-wrapper-max-width: 800px;
   padding-inline: 24px;
`;

const Article = styled(WrapperStyles)`
   outline: solid;
   padding-top: 96px;
   padding-bottom: 64px;
   max-width: calc(var(--card-wrapper-max-width) / 2);
`;

const MainTitle = styled.h1`
   margin-bottom: 48px;
`;

const GreenHighlight = styled.span`
   font-weight: 500;
   color: #009966;
`;

const P = styled.p`
   margin-bottom: 16px;
`;

const Home: NextPage = () => {
   return (
      <>
         <SingleImageSectionHeroHomeRenderer />
         <CopySectionWithBorderHome />
         <SmallTeamSection />
         <Article as="article">
            <MainTitle>Huckleberry</MainTitle>
            <P>
               An avant-garde agency focused on connecting{' '}
               <GreenHighlight>passion</GreenHighlight> with{' '}
               <GreenHighlight>logistics</GreenHighlight>.
            </P>
            <P>A better way to solve the problems of tomorrow.</P>
         </Article>
      </>
   );
};

export default Home;
