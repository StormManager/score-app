import React, { ReactNode, useRef, useState } from "react";
import FastImage from 'react-native-fast-image';
import Typography from "../Typography";
import styled, { useTheme } from "styled-components/native";
import Modal from "react-native-modal";
import RefTextInput from "../RefTextInput";
import { FormProvider, useForm } from "react-hook-form";

interface IModalProps {
  showModal: boolean;
  onClose: () => void;
  title: string;
  headerDescription?: ReactNode;
  children: ReactNode;
  isLock: boolean | undefined;
}


const Component = ({ showModal, onClose, title, headerDescription, children, isLock }: IModalProps) => {
  const themeApp = useTheme();
  const passwordRef = useRef(null);
  const form = useForm({
    mode: 'all'
  });
  return <Modal
    animationIn={"fadeInUp"}
    animationOut={"fadeOutDown"}
    isVisible={showModal}
  >
    <ModalContainer>
      <FormProvider {...form}>
        <CloseButton onPress={onClose}>
          <FastImage source={require("~assets/images/close.png")} style={{ width: 24, height: 24 }} resizeMode="contain" />
        </CloseButton>
        <ModalHeader >
          <Typography text='Title03SB' textColor={themeApp.colors.gray[2]}>{title}</Typography>
          {headerDescription}
        </ModalHeader>
        <ModalContent>
          {children}
        </ModalContent>
        <ModalAction>
          {isLock &&
            <LockBox>
              <RefTextInput
                name="password"
                label="비밀번호"
                ref={passwordRef}
                isPassword={true}
                autoCapitalize="none"
                placeholder="비밀번호"
                padding="12px 24px"
              />
            </LockBox>
          }
          <ModalActionButton>
            <Typography text="Button01SB" textColor={themeApp.colors.white}>
              참여하기
            </Typography>
          </ModalActionButton>
        </ModalAction>
      </FormProvider>
    </ModalContainer>
  </Modal>
}

export default Component



const ModalHeader = styled.View`
  flex-direction: row;
`
const ModalContainer = styled.View`
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 24px;
  border-radius: 12px;
`
const CloseButton = styled.Pressable`
  position: absolute;
  width: 48px;
  height: 48px;
  top: 12px;
  right: 12px;
  align-items: center;
  justify-content: center;
  z-index: 1;
`

const ModalAction = styled.View`
  margin-bottom: 16px;
  flex-direction: row;
  display: flex;
  justify-content: flex-end;

`

const ModalActionButton = styled.Pressable`
  padding: 13px 31px;
  background-color: ${({ theme }) => theme.colors.primary[0]};
  justify-content: center;
  align-items: center;
  display: flex;
  justify-self: flex-end;
  align-self: flex-end;
  border-radius: 8px;
`
const LockBox = styled.View`
  flex:1;
  margin-right: 24px;
`
const ModalContent = styled.View`
  min-height: 140px;
`