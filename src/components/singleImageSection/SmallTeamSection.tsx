import styled from 'styled-components';
import { device } from '../../config/theme/device';
import { ROUTE_ABOUT } from '../../constants/routes';
import { ArrowAndCopyButton } from '../button/ArrowAndCopyButton';
import { SingleImageSection } from './SingleImageSection';
import { Content, Title } from './SingleImageSection.styled';

const SmallTeamTitle = styled(Title)`
   margin-bottom: 23px;
   @media ${device.maxTablet} {
      line-height: var(--lh-heading-small);
   }
`;

export const SmallTeamSection: React.FC = () => {
   const currentImageName = 'image-small-team.jpg';

   return (
      <SingleImageSection
         imageSourceMobile={`/assets/home/tablet/${currentImageName}`}
         imageSourceDesktop={`/assets/home/desktop/${currentImageName}`}
      >
         <Content>
            <SmallTeamTitle as="h2">
               Small team,
               <br />
               big ideas
            </SmallTeamTitle>
            <ArrowAndCopyButton href={ROUTE_ABOUT}>About Us</ArrowAndCopyButton>
         </Content>
      </SingleImageSection>
   );
};
