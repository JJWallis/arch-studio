import styled from 'styled-components';
import { device } from '../../config/theme/device';
import { StyledButton } from '../styled/Button';
import { contentWrapperStyles } from '../styled/ContentWrapperStyles';

const Article = styled.article`
   outline: 1px solid blue;
   display: grid;
   grid-template-columns: 1fr;
   min-height: 500px;
   ${contentWrapperStyles}
   background-image: url('/assets/home/desktop/image-hero-paramour.jpg');
   background-position: center;
   background-size: cover;
   background-repeat: no-repeat;

   &::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.3);
      grid-column: 1 / -1;
      grid-row: 1 / -1;
   }
`;

const Title = styled.h1`
   margin-bottom: 0.3em;
   color: var(--clr-very-light-grey);
   font-size: var(--fs-heading-small-medium);
   line-height: var(--lh-heading-medium);
`;

const Content = styled.div`
   grid-column: 1 / -1;
   grid-row: 1 / -1;
   align-self: center;
   max-width: 600px;
   margin-inline: auto;
   padding-block: 10px;
   @media ${device.maxTablet} {
      padding-inline: var(--site-padding);
   }
`;

const SubTitle = styled.p`
   margin-bottom: 3em;
   color: var(--clr-very-light-grey);
`;

const Slideshow: React.FC = () => (
   <Article>
      <Content>
         <Title>Project Paramour</Title>
         <SubTitle>
            Project made for an art museum near Southwest London. Project
            Paramour is a statement of bold, modern architecture.
         </SubTitle>
         <StyledButton>See Our Portfolio</StyledButton>
      </Content>
   </Article>
);

export default Slideshow;
