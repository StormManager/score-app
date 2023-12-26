import React, { useRef, useState } from 'react';


import { Animated, Easing, TouchableNativeFeedback, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FastImage from 'react-native-fast-image';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Asset } from 'react-native-image-picker';
import styled from 'styled-components/native';
import SidebarContents from './components/SidebarContents';
import Header from '../../layouts/Header';
import CBStyles from '../../styles/CBStyles';
import InviteMember from "../InviteMember"
import ScoreHistory from "../ScoreHistory"
import AccordionButton from '~components/AccordionButton';
import Modal from '~components/Modal';
import ScoreCard from '~components/ScoreCard';
import Search from '~components/Search';
import { usePermission } from '~hooks/usePermission';
import { handleImagePicker } from '~utils/image';
import { DrawerParam, DrawerStackProps, RootStackProps } from '~utils/types/navigation';
export const PAGE_NAME = 'P_SHARE_ROOM';

const Drawer = createDrawerNavigator<DrawerParam>();


const Pages = ({ route, navigation }: DrawerStackProps<'D_SHARE_ROOM'>) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { requestPermission, setPermissionRequiredParams } = usePermission();
  const [reviewImage, setReviewImage] = useState<Asset>();
  const animationValue = useRef(new Animated.Value(0)).current;
  const [isExtend, setIsExtend] = useState<boolean>(false)
  const animateButton = ({ isClose }: { isClose?: boolean }) => {
    if (isClose) {
      Animated.timing(animationValue, {
        toValue: 0,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();
      setIsExtend(false)
    } else {
      Animated.timing(animationValue, {
        toValue: !isExtend ? 1 : 0,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();
      setIsExtend(!isExtend)
    }

  };

  const onCloseModal = () => {
    setShowModal(false)
  }
  const { roomName, totalUser } = route.params;
  const handleOnPressLocalImage = async () => {
    setTimeout(async () => {

      const resultImage = await handleImagePicker(requestPermission, setPermissionRequiredParams);
      if (resultImage) {
        setReviewImage(resultImage);
      }
    }, 100);
  };
  const handleOnPressAddScore = () => {
    navigation.navigate("P_ADD_SCORE")
  }
  const handleOnPressHandleContainer = () => {
    setShowModal(!showModal);
  }


  return (
    <>
      <Container style={{ flex: 1, backgroundColor: 'red', height: 300 }} onPress={() => animateButton({
        isClose: true
      })}>
        <View style={{ flex: 1 }} >
          <Header back={true} border={true} label={roomName} subLabel={`4/${totalUser ?? ""}명`} actions={
            <HeaderAction onPress={() => navigation.openDrawer()}>
              <FastImage source={require("../../assets/images/menu.png")} resizeMode='contain' style={{ width: 24, height: 24 }} />
            </HeaderAction>
          } />
          <GestureHandlerRootView>
            <ScoreScrollView showsVerticalScrollIndicator={false} bounces />
          </GestureHandlerRootView>
          <AccordionButton onPressAddScore={handleOnPressAddScore} animateButton={animateButton} animationValue={animationValue} onPressHandleContainer={handleOnPressHandleContainer} onPressLocalImage={handleOnPressLocalImage} />
        </View>
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
      <Drawer.Navigator screenOptions={{ drawerType: "front", drawerPosition: 'right', headerShown: false }} drawerContent={(props) => <SidebarContents {...props} />} >
        <Drawer.Screen name="D_SHARE_ROOM" component={Pages} initialParams={route.params.params} />
        <Drawer.Screen name="D_INVITE_MEMBER" component={InviteMember} initialParams={route.params.params} />
        <Drawer.Screen name="D_SCORE_HISTORY" component={ScoreHistory} initialParams={route.params.params} />
      </Drawer.Navigator>
    </GestureConatainer >
  );
};

export default Draw;

const Container = styled(TouchableNativeFeedback)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
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