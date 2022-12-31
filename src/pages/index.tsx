import type { NextPage } from 'next';
import CopySectionWithBorderHome from '../components/copySectionWithBorder/CopySectionWithBorderHome';
import { SingleImageSectionHeroHomeRenderer } from '../components/singleImageSection/SingleImageSectionHeroHomeRenderer';

const Home: NextPage = () => {
   return (
      <>
         <SingleImageSectionHeroHomeRenderer />
         <CopySectionWithBorderHome />
      </>
   );
};

export default Home;
