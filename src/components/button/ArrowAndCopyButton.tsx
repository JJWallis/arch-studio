import { StyledButton } from './Button';

interface Props {
   children: React.ReactNode;
}

export const ArrowAndCopyButton: React.FC<Props> = ({ children, ...props }) => (
   <StyledButton {...props}>
      {children}
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20">
         <g fill="none" fillRule="evenodd" stroke="#ffffff" strokeWidth="2">
            <path d="M15 1l9 9-9 9M0 10h24" />
         </g>
      </svg>
   </StyledButton>
);
