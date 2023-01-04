import type { NextPage } from 'next';
import CopySectionWithBorderHome from '../components/copySectionWithBorder/CopySectionWithBorderHome';
import Featured from '../components/Featured';
import { SingleImageSectionHeroHomeRenderer } from '../components/singleImageSection/SingleImageSectionHeroHomeRenderer';
import { SmallTeamSection } from '../components/singleImageSection/SmallTeamSection';

const Home: NextPage = () => {
   return (
      <>
         <SingleImageSectionHeroHomeRenderer />
         <CopySectionWithBorderHome />
         <SmallTeamSection />
         <Featured />
      </>
   );
};

export default Home;
