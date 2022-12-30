import type { NextPage } from 'next';
import CopySectionWithBorder from '../components/copySectionWithBorder';
import { SingleImageSectionHeroHomeRenderer } from '../components/singleImageSection/SingleImageSectionHeroHomeRenderer';

const Home: NextPage = () => {
   return (
      <>
         <SingleImageSectionHeroHomeRenderer />
         <CopySectionWithBorder variant="home">
            <h1>Hey there</h1>
         </CopySectionWithBorder>
      </>
   );
};

export default Home;
