import { useState } from 'react';
import { SingleImageSectionParamour } from '../../components/singleImageSection/SingleImageSectionParamour';
import { SingleImageSectionSeraph } from './SingleImageSectionSeraph';
import { SingleImageSectionFederal } from './SingleImageSectionFederal';
import { SingleImageSectionTrinity } from './SingleImageSectionTrinity';
import { SingleImageSection } from './SingleImageSection';
import Slideshow from '../carouselButtons/Slideshow';

export const SingleImageSectionHeroHomeRenderer = () => {
   const [activeSlideIndex, setActiveSlideIndex] = useState(0);
   const imageNames = [
      'paramour.jpg',
      'seraph.jpg',
      'federal.jpg',
      'trinity.jpg',
   ];
   const currentImageName = imageNames[activeSlideIndex];

   const handleSlideShowButtonClick = (targetIndex: number) =>
      setActiveSlideIndex(targetIndex);

   return (
      <SingleImageSection
         isPrimaryVariant
         imageSourceMobile={`/assets/home/tablet/image-hero-${currentImageName}`}
         imageSourceDesktop={`/assets/home/desktop/image-hero-${currentImageName}`}
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
