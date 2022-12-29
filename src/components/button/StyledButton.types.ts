import { GenericFunction } from '../../types/globalTypes';

export interface StyledButtonProps {
   children: React.ReactNode;
   variant: 'default' | 'carousel';
   as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
   href?: string;
   name?: string;
   value?: string;
   type?: 'button' | 'submit' | 'reset' | undefined;
   onClick?: GenericFunction;
   disabled?: boolean;
   style?: React.CSSProperties;
   $isActive?: boolean;
}

export type StyledCarouselButtonProps = StyledButtonProps;
