import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import ShareRoomCard from './components/ShareRoomCard';
import { MainTabStackProps } from '../../../utils/types/navigation';
import styled, { useTheme } from 'styled-components/native';
import Typography from '../../../components/Typography';
import Icon from 'react-native-vector-icons/Fontisto';
import Search from '../../../components/Search';
import Fab from '../../../components/Fab';
import Modal from '../../../components/Modal';
import FastImage from 'react-native-fast-image';
import { IShareRoomCardProps } from './components/ShareRoomCard/component';
import { useTablet } from '../../../context/useIsTablet';
import { PAGE_NAME as CreateRoomPageName } from '../../CreateRoom';

export const PAGE_NAME = 'T_SHARE';
const Pages = ({ navigation }: MainTabStackProps<"T_SHARE">) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectData, setSelectData] = useState<IShareRoomCardProps | undefined>();
  const { isTablet, setTablet } = useTablet();
  const [data, setData] = useState<Array<IShareRoomCardProps>>([
    {
      id: 0,
      title: "참여 인원",
      isLock: true,
      totalCount: 10,
      applyUsers: [
        {
          id: 0,
          userName: "장경태",
          profile: "img"
        },
        {
          id: 1,
          userName: "이승환",
          profile: "img"
        },
        {
          id: 2,
          userName: "구현경",
          profile: "img"
        }
      ]
    }, {
      id: 1,
      title: "피아노방",
      isLock: true,
      totalCount: 7,
      applyUsers: [
        {
          id: 0,
          userName: "장경태",
          profile: "img"
        }
      ]
    }, {
      id: 2,
      title: "참여 인원",
      isLock: false,
      totalCount: 4,
      applyUsers: [
        {
          id: 0,
          userName: "장경태",
          profile: "img"
        }
      ]
    }, {
      id: 3,
      title: "참여 인원",
      isLock: false,
      totalCount: 6,
      applyUsers: [
        {
          id: 0,
          userName: "장경태",
          profile: "img"
        }
      ]
    }
  ])
  const themeApp = useTheme();
  const onCloseModal = () => {

    setSelectData(undefined);
    setShowModal(false)
  }
  useEffect(() => {
    if (!showModal && selectData) {
      setShowModal(true)
    }
  }, [selectData])
  useEffect(() => {
    console.log(isTablet)
  }, [isTablet])
  return (


    <Container>
      <Modal
        showModal={showModal}
        onClose={onCloseModal}
        title={"참여 인원"}
        isLock={selectData?.isLock}
        headerDescription={
          <ApplicationCount >
            <Typography text='Body01R' textColor={themeApp.colors.gray[2]}>참여인원 {selectData?.applyUsers?.length}/{selectData?.totalCount} </Typography>
            {selectData?.isLock && <FastImage source={require("~assets/images/lock.png")} style={{ width: 16, height: 16 }} resizeMode={'contain'} />}
          </ApplicationCount>
        }
      >
        <ModalContent>

        </ModalContent>

      </Modal>
      <Title>
        <Typography text='Title01SB' textColor={themeApp.colors.gray[2]} >악보 공유방</Typography>
      </Title>
      <SearchBox>
        <Search isTablet={isTablet} />
      </SearchBox>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        numColumns={isTablet ? 2 : 1}
        columnWrapperStyle={isTablet && { justifyContent: 'space-between' }}
        data={data}
        renderItem={({ item }) => {
          return <ShareRoomCard onPressed={() => setSelectData(item)} isTablet={isTablet} id={item.id} title={item.title} totalCount={item.totalCount} applyUsers={item.applyUsers} isLock={item.isLock} />
        }}
        keyExtractor={(v) => v.id.toString()}
      />

      <Fab
        buttonColor={themeApp.colors.primary[0]}
        iconTextColor="#FFFFFF"
        iconTextComponent={
          <Icon name='plus-a' />
        }
        onClickAction={() => {
          navigation.navigate(CreateRoomPageName)
        }}
      />
    </Container>
  );
}

export default Pages;

const Container = styled.View`
  flex:1;
  padding: ${({ theme }) => theme.padding.outer};
`
const Title = styled.View`
  padding-bottom: 16px;
`
const SearchBox = styled.View`
  height: 92px;
  padding-bottom: 16px;
`

const ApplicationCount = styled.View`
  margin-top: 2px;
  flex-direction: row;
  align-items: center;
  margin-left: 16px;
`
const ModalContent = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`