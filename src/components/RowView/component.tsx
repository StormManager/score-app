import React from "react";
import { View, ViewProps, ViewStyle } from "react-native";

type RowViewProps = {
  justifyContent?: ViewStyle["justifyContent"];
  alignItems?: ViewStyle["alignItems"];
  style?: ViewStyle;
} & ViewProps;

const RowView: React.FC<RowViewProps> = ({ justifyContent, alignItems, style, children, ...props }) => {
  return (
    <View
      style={[{
        flexDirection: "row",
        justifyContent: justifyContent ?? "space-between",
        alignItems: alignItems ?? "center",

      }, style]}
      {...props}
    >
      {children}
    </View>
  );
};

export default RowView;