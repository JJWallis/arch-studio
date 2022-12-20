import { NavigationLink } from './NavigationListItem.styled';

interface Props {
   children: React.ReactNode;
   href: string;
}

export const NavigationListItem: React.FC<Props> = ({ children, ...props }) => (
   <li>
      <NavigationLink {...props}>{children}</NavigationLink>
   </li>
);
