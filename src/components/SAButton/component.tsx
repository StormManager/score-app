import React from "react";
import { TouchableOpacity, ViewStyle } from "react-native";
import styled, { useTheme } from "styled-components/native";
import CBStyles from "../../styles/CBStyles";
import RowView from "../RowView";
import Typography from "~components/Typography";

type CBButtonProps = {
  size?: "full-width" | "padding-width";
  text: string;
  color?: string;
  disabled?: boolean;
  disabledColor?: string; // Use string instead of ColorValue
  containerStyle?: ViewStyle;
  buttonStyle?: ViewStyle;
  onPress: () => void;
};

const Component: React.FC<CBButtonProps> = ({
  size = "full-width",
  text,
  disabled,
  disabledColor,
  color,
  containerStyle,
  buttonStyle,
  onPress
}) => {
  const themeApp = useTheme();

  return (
    <StyledRowView backgroundColor={themeApp.colors.white} style={containerStyle}>
      <StyledTouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={buttonStyle}
        buttonColor={disabled ? disabledColor ?? themeApp.colors.primary[1] : color ?? themeApp.colors.gray[8]}
        paddingVertical={size === "full-width" ? 18 : 14}
        borderRadius={size === "padding-width" ? CBStyles.adjustScale(4) : 0}
      >
        <StyledCBText textColor={themeApp.colors.white}>{text}</StyledCBText>
      </StyledTouchableOpacity>
    </StyledRowView>
  );
};

const StyledRowView = styled(RowView) <{ backgroundColor: string }>`
  background-color: ${(props) => props.backgroundColor};
`;

const StyledTouchableOpacity = styled(TouchableOpacity) <{
  buttonColor: string;
  paddingVertical: number;
  borderRadius: number;
}>`
  align-items: center;
  background-color: ${(props) => props.buttonColor};
  padding-vertical: ${(props) => props.paddingVertical}px;
  border-radius: ${(props) => props.borderRadius}px;
`;

const StyledCBText = styled(Typography)`
  font-weight: 700;
`;

export default Component;
