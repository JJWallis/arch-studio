import styled from 'styled-components';
import { MOBILE_PADDING } from '../../constants/styles';

export const HeaderPrimary = styled.header`
   outline: 1px solid black;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 30px ${MOBILE_PADDING};
`;
