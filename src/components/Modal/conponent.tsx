import React, { ReactNode, useRef } from "react";
import { FormProvider, useForm } from "react-hook-form";
import FastImage from 'react-native-fast-image';
import Modal from "react-native-modal";
import styled, { css, useTheme } from "styled-components/native";
import CBStyles from "../../styles/CBStyles";
import RefTextInput from "../RefTextInput";
import Typography from "../Typography";

interface IModalProps {
  showModal: boolean;
  onClose: () => void;
  title: string;
  height?: number;
  width?: number;
  headerDescription?: ReactNode;
  children: ReactNode;
  isLock?: boolean | undefined;
  actionText: string;
  onPressAction: () => void
}

interface IModalSize {
  height?: number;
  width?: number;
}
const Component = ({ showModal, onClose, title, height, width, headerDescription, children, isLock, actionText, onPressAction }: IModalProps) => {
  const themeApp = useTheme();
  const passwordRef = useRef(null);
  const form = useForm({
    mode: 'all'
  });
  return <Modal
    animationIn={"fadeInUp"}
    animationOut={"fadeOutDown"}
    isVisible={showModal}
    onBackdropPress={onClose}
  >
    <FormProvider {...form} >
      <ModalContainer height={height} width={width}>
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
                padding={`${CBStyles.adjustScale(12)}px ${CBStyles.adjustScale(24)}px`}
              />
            </LockBox>
          }
          <ModalActionButton onPress={onPressAction}>
            <Typography text="Button01SB" textColor={themeApp.colors.white}>
              {actionText}
            </Typography>
          </ModalActionButton>
        </ModalAction>
      </ModalContainer>
    </FormProvider>
  </Modal>
}

export default Component



const ModalHeader = styled.View`
  flex-direction: row;
  height: ${`${CBStyles.adjustScale(72)}px`};
  padding: ${`${CBStyles.adjustScale(24)}px`};
`
const ModalContainer = styled.View<IModalSize>`
  position: relative;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${`${CBStyles.adjustScale(12)}px`};
  overflow: hidden;
  ${({ width }) => {
    if (width) return css`
      width: ${width}px;
    `
  }}
  ${({ height }) => {
    if (height) return css`
      height: ${height}px;
    `
  }}
`
const CloseButton = styled.Pressable`
  position: absolute;
  width: ${`${CBStyles.adjustScale(48)}px`};
  height: ${`${CBStyles.adjustScale(48)}px`};
  top: 12px;
  right: 12px;
  align-items: center;
  justify-content: center;
  z-index: 1;
`

const ModalAction = styled.View`
  flex-direction: row;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  bottom:${`${CBStyles.adjustScale(40)}px`};
  left:${`${CBStyles.adjustScale(24)}px`};
  right:${`${CBStyles.adjustScale(24)}px`};

`

const ModalActionButton = styled.Pressable`
  padding-vertical:${`${CBStyles.adjustScale(13)}px`};
  padding-horizontal:${`${CBStyles.adjustScale(38)}px`};
  background-color: ${({ theme }) => theme.colors.primary[0]};
  justify-content: center;
  align-items: center;
  display: flex;
  justify-self: flex-end;
  align-self: flex-end;
  border-radius: ${`${CBStyles.adjustScale(8)}px`};
 
`
const LockBox = styled.View`
  flex:1;
  margin-right: ${`${CBStyles.adjustScale(24)}px`};
`
const ModalContent = styled.View`
  min-height: ${`${CBStyles.adjustScale(140)}px`};
`