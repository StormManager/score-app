type ColorShades = Record<number, string>;

interface Colors {
  grey: ColorShades;
  neutral: ColorShades;
  blue: ColorShades;
  red: ColorShades;
  yellow: ColorShades;
  green: ColorShades;
  purple: ColorShades;
  etc: {
    kakao: string;
    naver: string;
  };
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

export const grey: ColorShades = {
  0: '#FFFFFF',
  8: '#F5F5F5',
  7: '#E4E3E7',
  6: '#D5D4D9',
  5: '#BDBAC1',
  4: '#88888E',
  3: '#5F5E62',
  2: '#343337',
  1: '#1D1C21',
};

export const neutral: ColorShades = {
  0: '#FFFFFF',
  30: '#f5f6f8',
  50: '#eeeeee',
  200: '#e1e4e7',
  300: '#d4d8dd',
  400: '#a9acae',
  500: '#888888',
  700: '#424242',
  900: '#000000',
};

export const blue: ColorShades = {
  100: '#EFF2FE',
  500: '#3478F6',
};

export const red: ColorShades = {
  100: '#FFEAEA',
  500: '#DD5257',
};

export const yellow: ColorShades = {
  100: '#FFF9E5',
  500: '#FDC800',
};

export const green: ColorShades = {
  100: '#F2FBF6',
  500: '#2AC769',
};

export const purple: ColorShades = {
  100: '#F5F2FF',
  500: '#5A1EFF',
  600: '#000046',
};

export const etc = {
  kakao: '#FFE812',
  naver: '#4FA42B',
};

const colors: Colors = {
  grey,
  blue,
  neutral,
  red,
  yellow,
  green,
  purple,
  etc,
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
