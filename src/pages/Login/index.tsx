import React, { useRef } from 'react';
import { Text } from 'react-native';
import styled, { css, useTheme } from 'styled-components/native';
import RefTextInput from '../../components/RefTextInput';
import { FieldValue, FieldValues, FormProvider, useForm } from 'react-hook-form';
import Typography from '../../components/Typography';
import ButtonRoundSns from '../../components/ButtonRoundSns';
import { useNavigation } from '@react-navigation/native';
import { PAGE_NAME as Share } from '../MainTab/Share';
import { SCREEN_NAME as Main } from '../../screens/Main';
import { LoginStackProps } from '../../utils/types/navigation';
interface IMarginBoxProps {
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  mg?: string;
}
export const PAGE_NAME = 'P_LOGIN';
const Pages = ({ route, navigation }: LoginStackProps<"P_LOGIN">) => {
  const form = useForm({ mode: 'all' });
  const {
    handleSubmit,
    formState: { isDirty, isValid },
  } = form;
  const themeApp = useTheme();
  const passwordRef = useRef(null);
  const idRef = useRef(null);
  const onSubmit = (props: FieldValues) => {
    console.log(props);
    navigation.replace(Main, { screen: Share })
  }
  return (
    <Container>
      <FormProvider {...form}>
        <LoginBox>
          <RefTextInput
            ref={idRef}
            name="id"
            autoCapitalize="none"
            label="아이디"
            placeholder="아이디"
            style={{
              marginBottom: 16
            }}
            suffix={
              {
                isNeedDelete: true,
              }

            }
            defaultValue="test"
            padding="12px 24px"
            rules={{
              required: '필수 입력 항목 입니다.',

            }} />
          <RefTextInput
            name="password"
            label="비밀번호"
            ref={passwordRef}
            isPassword={true}
            autoCapitalize="none"
            placeholder="비밀번호"
            padding="12px 24px"
            rules={{
              required: '필수 입력 항목 입니다.',

              minLength: {
                value: 8,
                message: '8글자 이상 입력해주세요.',
              },
            }}
          />
          <LoginButton
            disabled={!isDirty || !isValid}
            onPress={handleSubmit(onSubmit)}
          >
            <Typography text={"Button01R"} textColor={!isDirty || !isValid ? themeApp.colors.gray[6] : themeApp.colors.white} >
              로그인
            </Typography>
          </LoginButton>
          <EtcBox>
            <Typography text='Button02R' textColor={themeApp.colors.gray[4]}>
              회원가입
            </Typography>
            <VerticalLine />
            <Typography text='Button02R' textColor={themeApp.colors.gray[4]}>
              계정찾기
            </Typography>
          </EtcBox>
          <EtcBox mt='48px' mb='24px'>
            <HorizontalLine />
            <MarginBox>
              <Typography text='Body02R' textColor={themeApp.colors.gray[7]}>
                SNS 로그인
              </Typography>
            </MarginBox>
            <HorizontalLine />
          </EtcBox>
          <EtcBox>
            <ButtonRoundSns typeSns='kakao' mr='0px 8px 0px 0px' size='44' />
            <ButtonRoundSns typeSns='apple' mr='0px 0px 0px 8px' size='44' />
          </EtcBox>
        </LoginBox>
      </FormProvider>
    </Container>
  );
}

export default Pages;


const Container = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`

const LoginBox = styled.View`
  max-width: 369px;
  padding-left: 24px;
  padding-right: 24px;
`
const LoginButton = styled.Pressable`
  justify-content: center;
  align-items: center;
  padding: 13px;  
  background-color: ${({ theme, disabled }) => disabled ? theme.colors.gray[8] : theme.colors.primary[0]};
  margin-top: 24px;
  margin-bottom: 24px;
  border-radius: 8px;
`
const EtcBox = styled.View<IMarginBoxProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${({ mg }) => {
    if (mg) {
      return css`
        margin: ${mg};
      `
    }
  }}
  ${({ mt }) => {
    if (mt) {
      return css`
        margin-top: ${mt};
      `
    }
  }}
  ${({ mb }) => {
    if (mb) {
      return css`
        margin-bottom: ${mb};
      `
    }
  }}
  ${({ ml }) => {
    if (ml) {
      return css`
        margin-left: ${ml};
      `
    }
  }}
  ${({ mr }) => {
    if (mr) {
      return css`
        margin-right: ${mr};
      `
    }
  }}
`
const VerticalLine = styled.View`
  height: 22px;
  width: 1px;
  background-color: ${({ theme }) => theme.colors.gray[6]};
  margin-left: 48px;
  margin-right: 48px;
`
const HorizontalLine = styled.View`
  height: 1px;
  flex:1;
  background-color: ${({ theme }) => theme.colors.gray[7]};
`
const MarginBox = styled.View`
  margin-left: 16px;
  margin-right: 16px;
`