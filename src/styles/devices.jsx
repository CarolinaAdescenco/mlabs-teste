const size = {
  mobile: '600px',
  tablet: '900px',
  desktop: '1200px',
  desktopMD: '1600px',
  desktopXL: '1800px',
};

export const device = {
  s: `(min-width: ${size.mobile})`,
  md: `(min-width: ${size.tablet})`,
  lg: `(min-width: ${size.desktop})`,
  mLg: `(min-width: ${size.desktop})`,
  xLg: `(min-width: ${size.desktopXL})`,
};
