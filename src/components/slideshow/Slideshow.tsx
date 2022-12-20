import styled from 'styled-components';
import { device } from '../../config/theme/device';
import { contentWrapperStyles } from '../styled/ContentWrapperStyles';

const Article = styled.article`
   outline: 1px solid blue;
   ${contentWrapperStyles}
   @media ${device.tablet} {
      padding-inline: var(--site-padding);
   }
`;

const GridCt = styled.div`
   display: grid;
`;

const Slideshow: React.FC = () => (
   <Article>
      <GridCt>
         <div>
            <h1>Project Paramour</h1>
            <p>
               Project made for an art museum near Southwest London. Project
               Paramour is a statement of bold, modern architecture.
            </p>
            <button>See Our Portfolio</button>
         </div>
      </GridCt>
   </Article>
);

export default Slideshow;
