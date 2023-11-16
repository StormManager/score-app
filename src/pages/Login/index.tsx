import React, { useRef } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import RefTextInput from '../../components/RefTextInput';
import { FormProvider, useForm } from 'react-hook-form';

export interface IPageProps {
  route: any
}

export const PAGE_NAME = 'P_LOGIN';
const Pages = ({ route }: IPageProps) => {
  const form = useForm();

  const passwordRef = useRef(null);
  const idRef = useRef(null);
  const params = route.params;
  console.log(params)
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
            padding="4px 0px"
            rules={{
              required: '필수 입력 항목 입니다.',

              minLength: {
                value: 8,
                message: '8글자 이상 입력해주세요.',
              },
            }} />
          <RefTextInput
            name="password"
            label="비밀번호"
            ref={passwordRef}
            isPassword={true}
            autoCapitalize="none"
            placeholder="비밀번호"
            padding="4px 0px"
            rules={{
              required: '필수 입력 항목 입니다.',

              minLength: {
                value: 8,
                message: '8글자 이상 입력해주세요.',
              },
            }}
          />
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
`

const LoginBox = styled.View`
  padding-left: 24px;
  padding-right: 24px;
`
