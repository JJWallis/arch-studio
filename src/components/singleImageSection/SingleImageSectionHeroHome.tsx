import { ROUTE_PORTFOLIO } from '../../constants/routes';
import { ArrowAndCopyButton } from '../button/ArrowAndCopyButton';
import { Content, Description, Title } from './SingleImageSection.styled';

interface Props {
   titleContent: string;
   descriptionContent: string;
}

export const SingleImageSectionHeroHome: React.FC<Props> = ({
   titleContent,
   descriptionContent,
}) => (
   <Content>
      <Title>{titleContent}</Title>
      <Description>{descriptionContent}</Description>
      <ArrowAndCopyButton href={ROUTE_PORTFOLIO}>
         See Our Portfolio
      </ArrowAndCopyButton>
   </Content>
);
