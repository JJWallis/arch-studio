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
            --margin-top: 72px;
            --margin-bottom: 112px;
         `,
         about: css`
            --margin-top: 76px;
            --margin-bottom: 112px;
         `,
         contact: css`
            --margin-top: 100px;
            --margin-bottom: 71px;
         `,
      }[variant])}
   --padding-top: 69px;
   position: relative;
   padding-top: var(--padding-top);
   padding-inline: var(--padding-x, 0);
   margin-top: var(--margin-top);

   &::before {
      content: '';
      position: absolute;
      top: 0;
      display: block;
      width: 65px;
      height: 1px;
      background-color: var(--clr-light-grey);
   }

   @media ${device.maxTablet} {
      --padding-x: var(--site-padding);
   }

   @media ${device.tablet} {
      --padding-top: 50px;
      --margin-top: 200px;
   }

   @media ${device.laptop} {
      --padding-top: 83px;
      --margin-bottom: 200px;
   }
`;

const WrapperHome = styled(Wrapper)`
   @media ${device.tablet} {
      --padding-top: 0;
      &::before {
         display: none;
      }
   }

   @media ${device.tablet} and ${device.maxLaptop} {
      --margin-bottom: 233px;
   }
`;

const WrapperAbout = styled(Wrapper)`
   @media ${device.tablet} and ${device.maxLaptop} {
      --margin-bottom: 207px;
   }
`;

const WrapperContact = styled(Wrapper)`
   @media ${device.tablet} and ${device.maxLaptop} {
      --margin-bottom: 226px;
   }
`;

interface CopySectionWithBorderProps {
   children: React.ReactNode;
   variant: PageVariant;
}

const CopySectionWithBorder: React.FC<CopySectionWithBorderProps> = ({
   children,
   variant,
   ...props
}) => {
   const Component = {
      home: WrapperHome,
      about: WrapperAbout,
      contact: WrapperContact,
   }[variant];

   return (
      <Component variant={variant} {...props}>
         {children}
      </Component>
   );
};

export default CopySectionWithBorder;
