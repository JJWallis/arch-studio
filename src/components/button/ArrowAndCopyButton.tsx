import { Button } from './Button';

interface Props {
   children: React.ReactNode;
   href: string;
}

export const ArrowAndCopyButton: React.FC<Props> = ({ children, ...props }) => (
   <Button {...props} as="a" style={{ width: 'fit-content' }}>
      {children}
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20">
         <g fill="none" fillRule="evenodd" stroke="#ffffff" strokeWidth="2">
            <path d="M15 1l9 9-9 9M0 10h24" />
         </g>
      </svg>
   </Button>
);
