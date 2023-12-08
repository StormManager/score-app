import React, { useState } from 'react';


import { createDrawerNavigator } from '@react-navigation/drawer';
import FastImage from 'react-native-fast-image';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Asset, launchImageLibrary } from 'react-native-image-picker';
import styled from 'styled-components/native';
import SidebarContents from './components/SidebarContents';
import Header from '../../layouts/Header';
import CBStyles from '../../styles/CBStyles';
import AccordionButton from '~components/AccordionButton';
import Modal from '~components/Modal';
import ScoreCard from '~components/ScoreCard';
import Search from '~components/Search';
import { usePermission } from '~hooks/usePermission';
import { DrawerParam, DrawerStackProps, RootStackProps } from '~utils/types/navigation';
export const PAGE_NAME = 'P_SHARE_ROOM';

const Drawer = createDrawerNavigator<DrawerParam>();


const Pages = ({ route, navigation }: DrawerStackProps<'D_SHARE_ROOM'>) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { requestPermission, setPermissionRequiredParams } = usePermission();
  const [reviewImage, setReviewImage] = useState<Asset[]>([]);
  const onCloseModal = () => {
    setShowModal(false)
  }
  const IMAGE_SELECT_LIMIT_COUNT = 1;
  const { roomName, totalUser } = route.params;
  const handleOnPressLocalImage = async () => {
    setTimeout(async () => {
      const permission = await requestPermission("ALBUM");
      if (permission.status === "blocked") {
        setPermissionRequiredParams({
          visible: true,
          serviceName: "",
          permissionName: permission.name
        });
        return;
      }

      const result = await launchImageLibrary({
        mediaType: "photo",
        selectionLimit: IMAGE_SELECT_LIMIT_COUNT
      })

      if (result.didCancel || result.errorCode) return;

      const resultImage =
        result?.assets &&
        result.assets.map(image => {
          return {
            name: image.fileName,
            uri: image.uri,
            type: image.type
          };
        });
      if (resultImage?.length && resultImage?.length > 0) {
        setReviewImage([...reviewImage, ...(resultImage as Asset[])].slice(-3));
      }
    }, 500);
  };
  const handleOnPressAddScore = () => {

  }
  const handleOnPressHandleContainer = () => {
    setShowModal(!showModal);
  }


  return (
    <>
      <Container>
        <Header back={true} border={true} label={roomName} subLabel={`4/${totalUser ?? ""}명`} actions={
          <HeaderAction onPress={() => navigation.openDrawer()}>
            <FastImage source={require("~assets/images/menu.png")} resizeMode='contain' style={{ width: 24, height: 24 }} />
          </HeaderAction>
        } />
        <GestureHandlerRootView>
          <ScoreScrollView showsVerticalScrollIndicator={false} bounces />
        </GestureHandlerRootView>
        <AccordionButton onPressAddScore={handleOnPressAddScore} onPressHandleContainer={handleOnPressHandleContainer} onPressLocalImage={handleOnPressLocalImage} />
      </Container>
      <Modal
        showModal={showModal}
        onClose={onCloseModal}
        title={"악보창고"}
        height={CBStyles.adjustScale(600)}
        width={CBStyles.adjustScale(562)}
        actionText={'전송'}
        onPressAction={() => { }}

      >
        <ModalContent>
          <ModalScrollView showsVerticalScrollIndicator={false}>
            <Search isTablet={false} placeholder='악보 제목' />
            <ScoreContainer>
              <ScoreCard />
              <ScoreCard />
              <ScoreCard />
              <ScoreCard />
              <ScoreCard />
              <ScoreCard />
            </ScoreContainer>
          </ModalScrollView>
        </ModalContent>

      </Modal>
    </>
  );
};


const Draw = ({ route }: RootStackProps<'P_SHARE_ROOM'>) => {
  return (
    <GestureConatainer>
      <Drawer.Navigator screenOptions={{ drawerType: "front", drawerPosition: 'right', headerShown: false }} drawerContent={() => <SidebarContents />} >
        <Drawer.Screen name="D_SHARE_ROOM" component={Pages} initialParams={route.params.params} />
      </Drawer.Navigator>
    </GestureConatainer >
  );
};

export default Draw;

const Container = styled.View`
  flex: 1;
  background-color: white;
`;
const HeaderAction = styled.Pressable`
  width: 56px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
`
const GestureConatainer = styled(GestureHandlerRootView)`
  flex:1;
`
const ModalContent = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding: ${`${CBStyles.adjustScale(32)}px`};
  padding-top: ${`${CBStyles.adjustScale(16)}px`};
  
`
const ScoreScrollView = styled.ScrollView`

`
const ModalScrollView = styled.ScrollView`
 height: ${CBStyles.adjustScale(512)}px;
 
`
const ScoreContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: ${CBStyles.adjustScale(16)}px;
  gap: ${CBStyles.adjustScale(16)}px;
  row-gap: ${CBStyles.adjustScale(16)}px;
  padding-bottom: ${CBStyles.adjustScale(88)}px;
`