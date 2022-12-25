import styled from 'styled-components';
import { device } from '../../config/theme/device';
import { contentWrapperStyles } from '../styled/ContentWrapperStyles';

interface StyledWrapperProps {
   isPrimaryVariant: boolean;
   imageSourceMobile: string;
   imageSourceDesktop: string;
}

const StyledWrapper = styled.article.attrs<StyledWrapperProps>(
   ({ isPrimaryVariant }) => ({
      as: isPrimaryVariant ? 'article' : 'section',
   })
)<StyledWrapperProps>`
   position: relative;
   display: grid;
   grid-template-columns: 1fr;
   min-height: 573px;
   ${contentWrapperStyles}
   background-image: url(${({ imageSourceMobile }) => imageSourceMobile});
   background-position: center;
   background-size: cover;
   background-repeat: no-repeat;

   @media ${device.tablet} {
      background-image: url(${({ imageSourceDesktop }) => imageSourceDesktop});
   }

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

interface SingleImageSectionProps extends StyledWrapperProps {
   children: React.ReactNode;
}

export const SingleImageSection: React.FC<SingleImageSectionProps> = ({
   children,
   ...props
}) => <StyledWrapper {...props}>{children}</StyledWrapper>;
