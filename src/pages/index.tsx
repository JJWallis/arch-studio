import type { NextPage } from 'next';
import styled from 'styled-components';
import CopySectionWithBorderHome from '../components/copySectionWithBorder/CopySectionWithBorderHome';
import { SingleImageSectionHeroHomeRenderer } from '../components/singleImageSection/SingleImageSectionHeroHomeRenderer';
import { SmallTeamSection } from '../components/singleImageSection/SmallTeamSection';

const Wrapper = styled.div`
   --card-wrapper-max-width: 800px;
   --wrapper-padding: 24px;
`;

const WrapperStyles = styled.div`
   max-width: var(--card-wrapper-max-width);
   padding-inline: var(--wrapper-padding);
   margin-inline: auto;
`;

const Article = styled(WrapperStyles)`
   padding-top: 96px;
   padding-bottom: 64px;
`;

const ArticleContent = styled.div`
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

const WealthContent = styled(WrapperStyles)`
   padding-top: 8px;
   padding-bottom: 24px;
   border-bottom: 8px solid #999999;
   background-color: white;
`;

const WealthTitleBg = styled.div`
   max-width: fit-content;
   padding: 12px 24px 12px 32px;
   border-bottom: 8px solid #cc9900;
   margin-bottom: 16px;
   margin-left: calc(var(--wrapper-padding) * -1 - 8px);
   background-color: #ffbf00;
`;

const Home: NextPage = () => {
   return (
      <>
         <SingleImageSectionHeroHomeRenderer />
         <CopySectionWithBorderHome />
         <SmallTeamSection />
         <Wrapper>
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
                     <h2>Wealth comes from operations</h2>
                  </WealthTitleBg>
                  <P>
                     No modern business can thrive without developing a
                     specialization in operations. Huckleberry has helped dozens
                     of companies, from Fortune 50 monoliths to fast-growing Bay
                     Area startups, achieve their goals and meet their KPIs by
                     leveraging our extensive network of logistics experts.
                  </P>
                  <P>
                     Huckleberry was established in 2003 to help ambitious
                     businesses discover their true potential. If that
                     resonates, let&apos;s chat!
                  </P>
               </WealthContent>
            </WealthWrapper>
         </Wrapper>
      </>
   );
};

export default Home;
