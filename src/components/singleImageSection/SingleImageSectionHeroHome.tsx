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
      <ArrowAndCopyButton>See Our Portfolio</ArrowAndCopyButton>
   </Content>
);
