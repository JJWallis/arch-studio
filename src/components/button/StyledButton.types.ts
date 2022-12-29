import { MouseEventHandler } from 'react';

export interface StyledButtonProps {
   children: React.ReactNode;
   variant: 'default' | 'carousel';
   as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
   href?: string;
   name?: string;
   value?: string;
   type?: 'button' | 'submit' | 'reset';
   onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
   disabled?: boolean;
   style?: React.CSSProperties;
   $isActive?: boolean;
}

export type StyledCarouselButtonProps = StyledButtonProps;
