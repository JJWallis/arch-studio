import { useState } from 'react';
import { SingleImageSectionParamour } from '../../components/singleImageSection/SingleImageSectionParamour';
import { SingleImageSectionSeraph } from './SingleImageSectionSeraph';
import { SingleImageSectionFederal } from './SingleImageSectionFederal';
import { SingleImageSectionTrinity } from './SingleImageSectionTrinity';
import { SingleImageSection } from './SingleImageSection';
import Slideshow from '../slideshow/Slideshow';

export const SingleImageSectionHeroHomeRenderer = () => {
   const [activeSlideIndex, setActiveSlideIndex] = useState(0);
   const imageNames = [
      'image-hero-paramour.jpg',
      'image-hero-seraph.jpg',
      'image-hero-federal.jpg',
      'image-hero-trinity.jpg',
   ];
   const currentImageName = imageNames[activeSlideIndex];

   const handleSlideShowButtonClick = (targetIndex: number) =>
      setActiveSlideIndex(targetIndex);

   return (
      <SingleImageSection
         isPrimaryVariant
         imageSourceMobile={`/assets/home/tablet/${currentImageName}`}
         imageSourceDesktop={`/assets/home/desktop/${currentImageName}`}
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
