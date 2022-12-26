import { useState } from 'react';
import { SingleImageSectionParamour } from '../../components/singleImageSection/SingleImageSectionParamour';
import { SingleImageSectionSeraph } from './SingleImageSectionSeraph';
import { SingleImageSectionFederal } from './SingleImageSectionFederal';
import { SingleImageSectionTrinity } from './SingleImageSectionTrinity';
import { SingleImageSection } from './SingleImageSection';
import Slideshow from '../slideshow/Slideshow';

export const SingleImageSectionHeroHomeRenderer = () => {
   const [activeSlideIndex, setActiveSlideIndex] = useState(0);

   const handleSlideShowButtonClick = (targetIndex: number) =>
      setActiveSlideIndex(targetIndex);

   return (
      <SingleImageSection
         isPrimaryVariant
         imageSourceMobile="/assets/home/tablet/image-hero-paramour.jpg"
         imageSourceDesktop="/assets/home/desktop/image-hero-paramour.jpg"
         //  image-hero-seraph.jpg
         //  image-hero-federal.jpg
         //  image-hero-trinity.jpg
      >
         {((currentIndex) => {
            switch (currentIndex) {
               case 0:
                  return <SingleImageSectionParamour />;
               case 1:
                  return <SingleImageSectionSeraph />;
               case 2:
                  return <SingleImageSectionFederal />;
               case 3:
                  return <SingleImageSectionTrinity />;
               default:
                  return null;
            }
         })(activeSlideIndex)}
         <Slideshow
            activeIndex={activeSlideIndex}
            handleSlideShowButtonClick={handleSlideShowButtonClick}
         />
      </SingleImageSection>
   );
};
