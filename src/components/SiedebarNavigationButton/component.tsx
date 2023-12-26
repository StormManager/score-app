import React from "react";
import { Pressable } from "react-native";
import FastImage, { Source } from "react-native-fast-image";
import styled from "styled-components/native";
import CBStyles from "../../styles/CBStyles";
import RowView from "~components/RowView";
import Typography from "~components/Typography";

interface ISiedebarNavigationButtonProps {
  title: string;
  icon: string;
  onPress: () => void;
}

const Component = ({ title, icon, onPress }: ISiedebarNavigationButtonProps) => {
  return <Pressable onPress={onPress}>
    <Container alignItems={"center"}>
      <RowView justifyContent="flex-start" alignItems={"center"} style={{
        gap: CBStyles.adjustScale(8)
      }}>
        <FastImage source={icon as number | Source | undefined} style={{
          width: CBStyles.adjustScale(16),
          height: CBStyles.adjustScale(16)
        }} />
        <Typography>
          {title}
        </Typography>
      </RowView>
      <FastImage source={require("~assets/icons/arrow-right.png")} style={{
        width: CBStyles.adjustScale(14),
        height: CBStyles.adjustScale(14)
      }} />
    </Container>
  </Pressable>
}

export default Component;


const Container = styled(RowView)`
  padding-horizontal: ${CBStyles.adjustScale(24)}px;
  padding-vertical:${CBStyles.adjustScale(13)}px;
  border-bottom-width: ${CBStyles.adjustScale(1)}px;
  border-bottom-color: ${({ theme }) => theme.colors.gray[8]};
  border-top-width: ${CBStyles.adjustScale(1)}px;
  border-top-color: ${({ theme }) => theme.colors.gray[8]};
`