import React from 'react';
import { Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image';
import styled, { css, useTheme } from 'styled-components/native';
import Typography from '../../../../../components/Typography';

const { width } = Dimensions.get('screen')
interface IUserProps {
  id: number;
  userName: string;
  profile: string;

}

export interface IShareRoomCardProps {
  id: number;
  isTablet?: boolean;
  title: string;
  totalCount: number;
  applyUsers?: Array<IUserProps>
  isLock: boolean;
  onPressed?: () => void
}
const Component = ({ title, totalCount, applyUsers, isLock, onPressed, isTablet }: IShareRoomCardProps) => {
  const themeApp = useTheme();
  return (
    <Container onPress={onPressed} tablet={isTablet as boolean}>
      <FastImageBox source={require("~assets/images/defaultscore.png")} resizeMode={"cover"} />
      <DescriptionBox>
        <Typography text='Title04SB' textColor={themeApp.colors.gray[2]}>{title}</Typography>
        <ApplicationCount >
          <Typography text='Body02R' textColor={themeApp.colors.gray[2]}>참여인원 {applyUsers?.length}/{totalCount} </Typography>
          {isLock && <FastImage source={require("~assets/images/lock.png")} style={{ width: 16, height: 16 }} resizeMode={'contain'} />}
        </ApplicationCount>
      </DescriptionBox>
    </Container>
  );
}
export default Component;

const Container = styled.Pressable<{ tablet: boolean }>`
  height: 290px;
  margin-bottom: ${({ theme }) => theme.padding.outer};
  ${({ tablet, theme }) => {
    if (tablet) {
      return css`
        width: ${(width - (Number(theme.padding.outer.replace("px", "")) * 2)) / 2 - 16}px
      `
    } else {
      return css`
        width: 100%;
      `
    }
  }}
`
const FastImageBox = styled(FastImage)`
  flex:1;
  width: 100%;
  max-width: 396px;
  height: 100%;
  max-height: 200px;
  border-radius: 8px;
`
const DescriptionBox = styled.View`
  padding-top: 8px;
  
`
const ApplicationCount = styled.View`
  margin-top: 2px;
  flex-direction: row;
  align-items: center;
`