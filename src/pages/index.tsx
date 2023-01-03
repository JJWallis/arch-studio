import type { NextPage } from 'next';
import styled from 'styled-components';
import CopySectionWithBorderHome from '../components/copySectionWithBorder/CopySectionWithBorderHome';
import { SingleImageSectionHeroHomeRenderer } from '../components/singleImageSection/SingleImageSectionHeroHomeRenderer';
import { SmallTeamSection } from '../components/singleImageSection/SmallTeamSection';

const WrapperStyles = styled.div`
   --card-wrapper-max-width: 800px;
   --wrapper-padding: 24px;
   max-width: var(--card-wrapper-max-width);
   margin-inline: auto;
   padding-inline: var(--wrapper-padding);
`;

const Article = styled(WrapperStyles)`
   /* outline: solid; */
   padding-top: 96px;
   padding-bottom: 64px;
`;

const ArticleContent = styled.div`
   /* outline: solid blue; */
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

const WealthWrapper = styled.div`
   padding-block: 64px;
   border-top: 8px solid #999999;
   background-color: #666666;
`;

const WealthContent = styled.div`
   max-width: 800px;
   padding-top: 8px;
   padding-bottom: 24px;
   padding-inline: 24px;
   margin-inline: auto;
   border-bottom: 8px solid #999999;
   background-color: white;
`;

const WealthTitleBg = styled.div`
   padding: 12px 24px 12px 32px;
   border-bottom: 8px solid #cc9900;
   margin-bottom: 16px;
   margin-left: calc(24px * -1 - 8px);
   max-width: fit-content; // calc(var(--card-wrapper-max-width) / 2);
   background-color: #ffbf00;
`;

const WealthTitle = styled.h2``;

const Home: NextPage = () => {
   return (
      <>
         <SingleImageSectionHeroHomeRenderer />
         <CopySectionWithBorderHome />
         <SmallTeamSection />
         <Article as="article">
            <ArticleContent>
               <MainTitle>Huckleberry</MainTitle>
               <P>
                  An avant-garde agency focused on connecting{' '}
                  <GreenHighlight>passion</GreenHighlight> with{' '}
                  <GreenHighlight>logistics</GreenHighlight>.
               </P>
               <P>A better way to solve the problems of tomorrow.</P>
            </ArticleContent>
         </Article>
         <WealthWrapper>
            <WealthContent>
               <WealthTitleBg>
                  <WealthTitle>Wealth comes from operations</WealthTitle>
               </WealthTitleBg>
               <P>
                  No modern business can thrive without developing a
                  specialization in operations. Huckleberry has helped dozens of
                  companies, from Fortune 50 monoliths to fast-growing Bay Area
                  startups, achieve their goals and meet their KPIs by
                  leveraging our extensive network of logistics experts.
               </P>
               <P>
                  Huckleberry was established in 2003 to help ambitious
                  businesses discover their true potential. If that resonates,
                  let's chat!
               </P>
            </WealthContent>
         </WealthWrapper>
      </>
   );
};

export default Home;
