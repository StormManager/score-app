import React, { useRef, useState } from "react";
import { TextInput } from "react-native";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import FastImage from "react-native-fast-image";
import { Asset } from "react-native-image-picker";
import styled, { useTheme } from "styled-components/native";
import Header from "../../layouts/Header";
import CBStyles from "../../styles/CBStyles";
import { RootStackProps } from "../../utils/types/navigation";
import RefTextInput from "~components/RefTextInput";
import RowView from "~components/RowView";
import Typography from "~components/Typography";
import { usePermission } from "~hooks/usePermission";
import { handleImagePicker } from "~utils/image";

const Pages = ({ navigation, route }: RootStackProps<"P_ADD_SCORE">) => {
  const themeApp = useTheme();
  const form = useForm({
    mode: 'all'
  })
  const { handleSubmit } = form;
  const scoreNameRef = useRef<TextInput>(null);
  const singerRef = useRef<TextInput>(null);
  const chordsRef = useRef<TextInput>(null);

  const { requestPermission, setPermissionRequiredParams } = usePermission();
  const [reviewImage, setReviewImage] = useState<Asset>();
  const isValidation = true;
  const handleCreateRoom = (data: FieldValues) => {

    // Toast.info("manage", { text: "초대가 완료 되었어요" })
    navigation.goBack();

  }
  const handleOnPressLocalImage = async () => {
    setTimeout(async () => {

      const resultImage = await handleImagePicker(requestPermission, setPermissionRequiredParams);
      if (resultImage) {
        setReviewImage(resultImage);
      }
    }, 100);
  };
  return (
    <Container>
      <Header back={true} label="악보 등록" border={true} actions={
        <HeaderAction onPress={handleSubmit(handleCreateRoom)}>
          <Typography text="Button01R" textColor={isValidation ? themeApp.colors.gray[2] : themeApp.colors.gray[7]}>
            등록
          </Typography>
        </HeaderAction>
      } />
      <Contents>
        <FormProvider {...form}>
          <RefTextInput
            name="scoreName"
            ref={scoreNameRef}
            autoCapitalize="none"
            placeholder="악보 제목"
            suffix={
              {
                isNeedDelete: true,
              }
            }
            padding={`${CBStyles.adjustScale(12)}px ${CBStyles.adjustScale(24)}px`}

          />
          <RowView style={{
            gap: CBStyles.adjustScale(16)
          }}>
            <TextInputContainer>
              <RefTextInput
                name="singer"
                ref={singerRef}
                autoCapitalize="none"
                placeholder="가수"
                suffix={
                  {
                    isNeedDelete: true,
                  }
                }
                padding={`${CBStyles.adjustScale(12)}px ${CBStyles.adjustScale(24)}px`}
              />
            </TextInputContainer>
            <TextInputContainer>
              <RefTextInput
                name="chords"
                ref={chordsRef}
                autoCapitalize="none"
                placeholder="코드"

                onDropDownPress={() => { }}
                dropdownList={["A", "B", "C", "D", "E", "F", "G"]}
                padding={`${CBStyles.adjustScale(12)}px ${CBStyles.adjustScale(24)}px`}
              />
            </TextInputContainer>
          </RowView>
          <ScoreArea onPress={handleOnPressLocalImage}>
            {reviewImage?.uri &&
              <FastImage
                source={{
                  uri: reviewImage?.uri,
                  priority: 'high'
                }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  borderRadius: CBStyles.adjustScale(8),
                  overflow: 'hidden',
                  zIndex: 1
                }}
                resizeMode="cover" />}
            <FastImage
              source={require("~assets/icons/score_add.png")}
              tintColor={themeApp.colors.gray[4]}
              style={{
                width: CBStyles.adjustScale(16),
                height: CBStyles.adjustScale(16)
              }} />
            <Typography text={"Body02SB"} textColor={themeApp.colors.gray[4]}>
              악보 선택
            </Typography>
          </ScoreArea>
        </FormProvider>
      </Contents>
    </Container>
  )
}

export default Pages;


const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`

const Contents = styled.View`
  flex: 1;
  padding-top: ${CBStyles.adjustScale(32)}px;;
  padding-horizontal: ${CBStyles.adjustScale(40)}px;
  gap: ${CBStyles.adjustScale(16)}px;;
`
const TextInputContainer = styled.View`
  flex:1;
`

const ScoreArea = styled.Pressable`
  width: ${CBStyles.adjustScale(369)}px;
  height: ${CBStyles.adjustScale(192)}px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.gray[7]};
  background-color: ${({ theme }) => theme.colors.gray[8]};
  border-radius: ${CBStyles.adjustScale(8)}px;
  gap: ${CBStyles.adjustScale(4)}px;
  flex-direction: row;
  cursor: pointer;
`
const HeaderAction = styled.Pressable`
  width: 56px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
`