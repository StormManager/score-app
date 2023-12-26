import { Dimensions, Platform } from "react-native";

type ColorShades = Record<number, string>;

interface Colors {
    gray: ColorShades;
    white: string;
    black: string;
    error: string;
    primary: ColorShades;
}

interface ITheme {
    font: {
        fontFamily: string;
    };
    colors: Colors;
    padding: {
        outer: string;
    };
    paddingWrapSm: number;
    paddingVertical: number;
    paddingWrap: number;
    paddingVerticalLg: number;
}

export const gray: ColorShades = {
    8: "#F5F6F6",
    7: "#E6E0E9",
    6: "#CAC5CD",
    5: "#938F96",
    4: "#79767D",
    3: "#48464C",
    2: "#322F35",
    1: "#1D1B20"
};

export const primary: ColorShades = {
    0: "#4EC0E9",
    1: "#EAF2FD",
    2: "#D4E7F9"
};
export const white = "#ffffff";

export const black = "#000000";
export const error = "#B3261E";

const colors: Colors = {
    gray,
    black,
    white,
    error,
    primary
};
const { width, height } = Dimensions.get("window");
const aspectRatio = height / width;
const isTablet = Platform.OS === "android" ? aspectRatio < 1.6 : aspectRatio < 1.5;
const Theme: ITheme = {
    font: {
        fontFamily: "Pretendard-Regular"
    },
    colors,
    padding: {
        outer: isTablet ? "40px" : "24px"
    },
    paddingWrapSm: 12,
    paddingVertical: 16,
    paddingWrap: 18,
    paddingVerticalLg: 40
};

export default Theme;
