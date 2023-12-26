import React, { useEffect, useRef, useState } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import FastImage from "react-native-fast-image";
import styled, { css, useTheme } from "styled-components/native";
import RefTextInput from "../../components/RefTextInput";
import Typography from "../../components/Typography";
import Header from "../../layouts/Header";
import CBStyles from "../../styles/CBStyles";
import { RootStackProps } from "../../utils/types/navigation";
export const PAGE_NAME = "P_CREATE_ROOM"

interface IBoxProps {
  ml?: number;
  mr?: number;
}

const Pages = ({ navigation }: RootStackProps<"P_CREATE_ROOM">) => {
  const themeApp = useTheme();
  const form = useForm();
  const { handleSubmit, watch, setValue } = form;
  const [isEditable, setEditable] = useState<boolean>(false);
  const isValidation = true;
  const roomNameRef = useRef(null);
  const roomPasswordRef = useRef(null);
  const totalUserRef = useRef(null);
  const handleCreateRoom = (data: FieldValues) => {
    navigation.replace("P_SHARE_ROOM", {
      screen: "D_SHARE_ROOM",
      params: {
        password: data.password,
        roomName: data.roomName,
        totalUser: data.totalUser
      }
    })

  }
  const totalUserData = watch("totalUser");
  useEffect(() => {
    if (Number(totalUserData) > 30) {
      setValue("totalUser", "30")
    }
  }, [totalUserData])
  return (
    <Container>
      <FormProvider {...form}>
        <Header back={true} label="방만들기" border={true} actions={
          <HeaderAction onPress={handleSubmit(handleCreateRoom)}>
            <Typography text="Button01R" textColor={isValidation ? themeApp.colors.gray[2] : themeApp.colors.gray[7]}>
              생성
            </Typography>
          </HeaderAction>
        } />
        <Content>
          <Box>
            <RefTextInput
              ref={roomNameRef}
              name="roomName"
              autoCapitalize="none"
              placeholder="방 이름"
              style={{
                marginBottom: 16
              }}
              suffix={
                {
                  isNeedDelete: true,
                }
              }
              padding={`${CBStyles.adjustScale(12)}px ${CBStyles.adjustScale(24)}px`}
              rules={{
                required: '필수 입력 항목 입니다.',
              }} />
          </Box>
          <Box>
            <RowBox mr={8}>
              <RefTextInput
                name="totalUser"
                ref={totalUserRef}
                autoCapitalize="none"
                placeholder="인원 수"
                type="numeric"
                padding={`${CBStyles.adjustScale(12)}px ${CBStyles.adjustScale(24)}px`}

              />
            </RowBox>
            <RowBox ml={8}>
              <LockIconBox onPress={() => setEditable(!isEditable)}>
                <FastImage source={!isEditable ? require("~assets/images/roomunlock.png") : require("~assets/images/roomlock.png")} style={{ width: 48, height: 48 }} />
              </LockIconBox>
              <FlexBox>
                <RefTextInput
                  name="password"
                  ref={roomPasswordRef}
                  isPassword={true}
                  isEditable={isEditable}
                  autoCapitalize="none"
                  placeholder="비밀번호"
                  padding={`${CBStyles.adjustScale(12)}px ${CBStyles.adjustScale(24)}px`}

                />
              </FlexBox>
            </RowBox>
          </Box>
        </Content>
      </FormProvider>
    </Container>
  )
}

export default Pages;

const Container = styled.View`
  flex:1;
  background-color: ${({ theme }) => theme.colors.white};
`
const HeaderAction = styled.Pressable`
  width: 56px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
`
const Content = styled.View`
  padding-left: ${({ theme }) => theme.padding.outer};
  padding-right: ${({ theme }) => theme.padding.outer};
  padding-top: 32px;
`
const Box = styled.View`
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
`
const RowBox = styled.View<IBoxProps>`
  display: flex;
  flex-direction: row;
  flex:1;
  ${({ ml }) => {
    if (ml)
      return css`
        margin-left: ${ml}px;
      `
  }}
   ${({ mr }) => {
    if (mr)
      return css`
        margin-right: ${mr}px;
      `
  }}
`

const LockIconBox = styled.Pressable`
  width: 48px;
  display: flex;
  margin-right: 8px;
`
const FlexBox = styled.View`
  display: flex;
  flex:1;
`