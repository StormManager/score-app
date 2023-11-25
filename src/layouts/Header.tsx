import React, { memo } from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { css } from "styled-components";
import Typography from "../components/Typography";
import { Image } from "react-native";

type Props = {
  label?: string;
  back?: boolean;
  actions?: React.ReactNode;
  border?: boolean;
};

const Header: React.FC<Props> = ({ label, back = true, actions, border = true }) => {
  const navigation = useNavigation<any>();

  return (
    <Container border={border}>
      <Box align="flex-start">
        {back && (
          <BackButton onPress={navigation.goBack}>
            <Image style={{ width: 24, height: 24 }} source={require("~assets/icons/arrow-left.png")} alt="뒤로" resizeMode="contain" />
          </BackButton>
        )}
      </Box>
      <Typography text="Title04SB">
        {label}
      </Typography>
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
        border-bottom-color: ${({ theme }) => theme.colors.gray[8]};
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