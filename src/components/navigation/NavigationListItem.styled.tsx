import Link from 'next/link';
import styled from 'styled-components';
import { device } from '../../config/theme/device';

export const NavigationLink = styled(Link)`
   @media ${device.maxTablet} {
      display: block;
      padding-block: 10px;
      font-size: var(--fs-heading-small);
      font-weight: var(--fw-bold);
   }
`;
