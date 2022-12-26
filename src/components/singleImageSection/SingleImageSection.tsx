import { StyledWrapper, StyledWrapperProps } from './SingleImageSection.styled';

interface SingleImageSectionProps extends StyledWrapperProps {
   children: React.ReactNode;
}

export const SingleImageSection: React.FC<SingleImageSectionProps> = ({
   children,
   ...props
}) => <StyledWrapper {...props}>{children}</StyledWrapper>;
