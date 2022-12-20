import Image from 'next/image';
import styled from 'styled-components';
import { device } from '../../config/theme/device';
import { contentWrapperStyles } from '../styled/ContentWrapperStyles';

const Article = styled.article`
   outline: 1px solid blue;
   position: relative;
   display: grid;
   min-height: 400px;
   grid-template-columns: 1fr;
   ${contentWrapperStyles}
   @media ${device.maxTablet} {
      padding-inline: var(--site-padding);
   }
`;

const Title = styled.h1`
   font-size: var(--fs-heading-small-medium);
   line-height: var(--lh-heading-medium);
`;

const BackgroundImage = styled(Image)`
   isolation: isolate;
   z-index: -1;
`;

const Slideshow: React.FC = () => (
   <Article>
      <BackgroundImage
         src={'/assets/home/desktop/image-hero-paramour.jpg'}
         alt=""
         fill
      />
      <div>
         <Title>Project Paramour</Title>
         <p>
            Project made for an art museum near Southwest London. Project
            Paramour is a statement of bold, modern architecture.
         </p>
         <button>See Our Portfolio</button>
      </div>
   </Article>
);

export default Slideshow;
