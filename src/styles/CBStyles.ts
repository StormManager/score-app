import { Dimensions, PixelRatio, Platform } from "react-native";

type CBStylesType = {
    windowWidth: number;
    windowHeight: number;
    navigationHeaderHeight: number;
    bottomButtonHeight: number;
    bottomTabBarHeight: number;
    adjustScale: (dp: number) => number;
    adjustScaleHeight: (dp: number) => number;
    setNewDimension: (newWidth: number, newHeight: number) => void;
    basePadding: number;
    baseBorderRadius: number;
    baseBoxShadow?:
        | {
              shadowRadius: number;
              shadowOffset: {
                  width: number;
                  height: number;
              };
              shadowOpacity: number;
              shadowColor: string;
          }
        | {
              elevation: number;
          };
};

const { width, height } = Dimensions.get("window");
const aspectRatio = height / width;
const isTablet = Platform.OS === "android" ? aspectRatio < 1.6 : aspectRatio < 1.5;
let windowWidth = width;
let windowHeight = height;
const divideWidth = isTablet ? 834 : 375;
const divideHeight = isTablet ? 1194 : 812;
let widthScale = windowWidth / divideWidth > 1.2 ? 1.2 : windowWidth / divideWidth;
let heightScale = windowHeight / divideHeight;

const adjustScale: CBStylesType["adjustScale"] = dp => PixelRatio.roundToNearestPixel(dp * widthScale);
const adjustScaleHeight: CBStylesType["adjustScaleHeight"] = dp => PixelRatio.roundToNearestPixel(dp * heightScale);

const setNewDimension = (newWidth: number, newHeight: number) => {
    windowWidth = newWidth;
    windowHeight = newHeight;
    widthScale = newWidth / 375 > 1.2 ? 1.2 : newWidth / 375;
    heightScale = newHeight / 812;
};

const CBStyles: CBStylesType = {
    windowHeight,
    windowWidth,
    navigationHeaderHeight: adjustScale(64),
    bottomButtonHeight: adjustScale(64),
    bottomTabBarHeight: adjustScale(56),
    adjustScale,
    adjustScaleHeight,
    setNewDimension,
    basePadding: adjustScale(24),
    baseBorderRadius: adjustScale(24),
    ...Platform.select({
        ios: {
            baseBoxShadow: {
                shadowRadius: adjustScale(2),
                shadowOffset: {
                    width: 0,
                    height: adjustScale(2)
                },
                shadowOpacity: 1,
                shadowColor: "rgba(0, 0, 0, 0.15)"
            }
        },
        android: { baseBoxShadow: { elevation: adjustScale(2) } }
    })
};
export default CBStyles;
