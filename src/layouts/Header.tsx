import React, { memo } from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { css } from "styled-components";
import styled, { useTheme } from "styled-components/native";
import Typography from "../components/Typography";

type Props = {
  label?: string;
  subLabel?: string;
  back?: boolean;
  actions?: React.ReactNode;
  border?: boolean;
};

const Header: React.FC<Props> = ({ label, subLabel, back = true, actions, border = true }) => {
  const navigation = useNavigation<any>();
  const themeApp = useTheme();
  return (
    <Container border={border}>
      <Box align="flex-start">
        {back && (
          <BackButton onPress={() => {
            if (navigation.canGoBack()) {
              navigation.goBack()
            }
          }}>
            <Image style={{ width: 24, height: 24 }} source={require("~assets/icons/arrow-left.png")} alt="뒤로" resizeMode="contain" />
          </BackButton>
        )}
      </Box>
      <TitleBox>
        <Typography text="Title04SB" textColor={themeApp.colors.gray[2]}>
          {label}
        </Typography>
        {subLabel && <Typography text="Button03R" textColor={themeApp.colors.gray[4]} >{subLabel}</Typography>}
      </TitleBox>
      <ActionBox align="flex-end">
        {actions}
      </ActionBox>
    </Container>
  );
};

export default memo(Header);

const Container = styled.View <{ border: boolean }> `
  height: 56px;
  display: flex;
  align-items: center;
  flex-direction: row;
  ${({ border, theme }) => {
    if (border) {
      return css`
        border-bottom-width: 1px;
        border-bottom-color: ${theme.colors.gray[8]}
      `
    }
  }}
`
const Box = styled.View<{ align?: string }>`
  
  ${({ align }) => {
    if (align) {
      return css`
        align-items: align;
      `
    }
  }}
  
`
const TitleBox = styled.View`
  display: flex;
  flex-direction: column;
`
const ActionBox = styled.View<{ align?: string }>`
  flex:1;
`
const BackButton = styled.Pressable`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`