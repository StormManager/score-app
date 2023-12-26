import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Fontisto';
import styled, { useTheme } from 'styled-components/native';
import ShareRoomCard from './components/ShareRoomCard';
import { IShareRoomCardProps } from './components/ShareRoomCard/component';
import Fab from '../../../components/Fab';
import Modal from '../../../components/Modal';
import Search from '../../../components/Search';
import Typography from '../../../components/Typography';
import { useTablet } from '../../../context/useIsTablet';
import CBStyles from '../../../styles/CBStyles';
import { MainTabStackProps } from '../../../utils/types/navigation';
import { PAGE_NAME as CreateRoomPageName } from '../../CreateRoom';

export const PAGE_NAME = 'T_SHARE';
const Pages = ({ navigation }: MainTabStackProps<"T_SHARE">) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectData, setSelectData] = useState<IShareRoomCardProps | undefined>();
  const { isTablet } = useTablet();
  const [data] = useState<Array<IShareRoomCardProps>>([
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

  return (


    <Container>
      <Modal
        showModal={showModal}
        onClose={onCloseModal}
        title={"참여 인원"}
        width={CBStyles.adjustScale(562)}
        height={CBStyles.adjustScale(505)}
        actionText={'참여하기'}
        onPressAction={() => { }}
        isLock={selectData?.isLock}
        headerDescription={
          <ApplicationCount >
            <Typography text='Body01R' textColor={themeApp.colors.gray[2]}>참여인원 {selectData?.applyUsers?.length}/{selectData?.totalCount} </Typography>
            {selectData?.isLock && <FastImage source={require("~assets/images/lock.png")} style={{ width: 16, height: 16 }} resizeMode={'contain'} />}
          </ApplicationCount>
        }
      >
        <ModalContent />

      </Modal>
      <Title>
        <Typography text='Title01SB' textColor={themeApp.colors.gray[2]} >악보 공유방</Typography>
      </Title>
      <SearchBox>
        <Search isTablet={isTablet} placeholder='방 검색' />
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
  background-color: ${({ theme }) => theme.colors.white};
`
const Title = styled.View`
  padding-bottom: ${`${CBStyles.adjustScale(16)}px`};
`
const SearchBox = styled.View`
  height: ${`${CBStyles.adjustScale(92)}px`};
  padding-bottom: ${`${CBStyles.adjustScale(16)}px`};
`

const ApplicationCount = styled.View`
  margin-top: ${`${CBStyles.adjustScale(2)}px`};
  flex-direction: row;
  align-items: center;
  margin-left: ${`${CBStyles.adjustScale(16)}px`};
`
const ModalContent = styled.View`
  padding: ${`${CBStyles.adjustScale(24)}px`};
  padding-top: ${`${CBStyles.adjustScale(6)}px`};
  flex-direction: row;
  flex-wrap: wrap;
`