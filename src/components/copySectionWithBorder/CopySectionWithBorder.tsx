import React from 'react';
import styled, { css } from 'styled-components';
import { device } from '../../config/theme/device';

type PageVariant = 'home' | 'about' | 'contact';

interface WrapperProps {
   variant: PageVariant;
}

const Wrapper = styled.section<WrapperProps>`
   ${({ variant }) =>
      ({
         home: css`
            --marin-top: 72px;
            --margin-bottom: 112px; // todo -> all different for tablet only (styled())
         `,
         about: css`
            --marin-top: 76px;
            --margin-bottom: 112px;
         `,
         contact: css`
            --marin-top: 100px;
            --margin-bottom: 71px;
         `,
      }[variant])}
   --padding-top: 69px;

   position: relative;
   padding-top: var(--padding-top);
   padding-inline: var(--padding-x, 0);
   margin-top: var(--marin-top);

   @media ${device.maxTablet} {
      --padding-x: var(--site-padding);
   }

   @media ${device.tablet} {
      --padding-top: 50px; // todo -> zero for Home on tablet + desktop (styled())
      --marin-top: 200px;
   }

   @media ${device.laptop} {
      --padding-top: 83px;
      --margin-bottom: 200px;
   }

   &::before {
      content: '';
      position: absolute;
      top: 0;
      display: block;
      height: 1px;
      width: 65px;
      background: var(--clr-light-grey);
   }
`;

interface CopySectionWithBorderProps {
   children: React.ReactNode;
   variant: PageVariant;
}

const CopySectionWithBorder: React.FC<CopySectionWithBorderProps> = ({
   children,
   ...props
}) => {
   return <Wrapper {...props}>{children}</Wrapper>;
};

export default CopySectionWithBorder;
