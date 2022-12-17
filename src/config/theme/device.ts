import { breakPoints } from './breakpoints';

const minWidth = (val: number) => `(min-width: ${val}px)`;
const maxWidth = (val: number) => `(max-width: ${val - 1}px)`;

export const device = {
   mobileS: minWidth(breakPoints.mobileS),
   mobileM: minWidth(breakPoints.mobileM),
   mobileL: minWidth(breakPoints.mobileL),
   tabletS: minWidth(breakPoints.tabletS),
   tablet: minWidth(breakPoints.tablet),
   laptop: minWidth(breakPoints.laptop),
   laptopL: minWidth(breakPoints.laptopL),
   desktop: minWidth(breakPoints.desktop),
   desktopS: minWidth(breakPoints.desktopS),
   desktopM: minWidth(breakPoints.desktopM),
   desktopL: minWidth(breakPoints.desktopL),
   maxMobileS: maxWidth(breakPoints.mobileS),
   maxMobileM: maxWidth(breakPoints.mobileM),
   maxMobileL: maxWidth(breakPoints.mobileL),
   maxTabletS: maxWidth(breakPoints.tabletS),
   maxTablet: maxWidth(breakPoints.tablet),
   maxLaptop: maxWidth(breakPoints.laptop),
   maxDesktop: maxWidth(breakPoints.desktop),
   maxDesktopM: maxWidth(breakPoints.desktopM),
};
