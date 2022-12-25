import { ArrowAndCopyButton } from '../button/ArrowAndCopyButton';
import { SingleImageSection } from './SingleImageSection';
import { Content, Description, Title } from './SingleImageSection.styled';

interface Props {
   titleContent: string;
   descriptionContent: string;
   imageSourceMobile: string;
   imageSourceDesktop: string;
}

export const SingleImageSectionHeroHome: React.FC<Props> = ({
   titleContent,
   descriptionContent,
   ...props
}) => (
   <SingleImageSection isPrimaryVariant {...props}>
      <Content>
         <Title>{titleContent}</Title>
         <Description>{descriptionContent}</Description>
         <ArrowAndCopyButton>See Our Portfolio</ArrowAndCopyButton>
      </Content>
   </SingleImageSection>
);
