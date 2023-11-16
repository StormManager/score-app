type ColorShades = Record<number, string>;

interface Colors {
  gray: ColorShades;
  white: string;
  black: string;
  error: string;
  primary: ColorShades;
}

interface Theme {
  font: {
    fontFamily: string;
  };
  colors: Colors;
  padding: {
    content: number;
  };
  paddingWrapSm: number;
  paddingVertical: number;
  paddingWrap: number;
  paddingVerticalLg: number;
}

export const gray: ColorShades = {
  8: '#F5F6F6',
  7: '#E6E0E9',
  6: '#CAC5CD',
  5: '#938F96',
  4: '#79767D',
  3: '#48464C',
  2: '#322F35',
  1: '#1D1B20',
};

export const primary: ColorShades = {
  0: '#4EC0E9',
  1: '#C7DBF4',
};
export const white = '#ffffff';

export const black = '#000000';
export const error = '#B3261E';

const colors: Colors = {
  gray,
  black,
  white,
  error,
  primary,
};

const Theme: Theme = {
  font: {
    fontFamily: 'Pretendard-Regular',
  },
  colors,
  padding: {
    content: 18,
  },
  paddingWrapSm: 12,
  paddingVertical: 16,
  paddingWrap: 18,
  paddingVerticalLg: 40,
};

export default Theme;
