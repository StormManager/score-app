import React from "react";
import FastImage from "react-native-fast-image";
import LinearGradient from "react-native-linear-gradient";
import styled, { useTheme } from "styled-components/native";
import Typography from "../../components/Typography";
import CBStyles from "../../styles/CBStyles";

const Component = () => {
  const themeApp = useTheme();
  return <Container>
    <ImageContainer>
      <FastImage source={{
        uri: "https://img.freepik.com/free-photo/music-notes-on-scores_144627-16359.jpg",
        priority: "high",
        cache: "cacheOnly",

      }}

        resizeMode="cover"
        style={{
          flex: 1
        }} />
      <LinearGradient
        colors={["#1D1B2099", "#1D1B2000"]}
        start={{
          x: 1,
          y: 1,
        }}
        end={{
          x: 1,
          y: 0
        }}
        style={{
          width: CBStyles.adjustScale(241),
          height: CBStyles.adjustScale(100),
          borderRadius: CBStyles.adjustScale(8),
          position: 'absolute',
          zIndex: 1,
          bottom: 0
        }} />
      <TitleContainer>
        <Typography text="Title04SB" textColor={themeApp.colors.white}>
          노래제목
        </Typography>
      </TitleContainer>
    </ImageContainer>
    <RowView>
      <Typography text="Body02R" textColor={themeApp.colors.gray[2]}>
        가수
      </Typography>
      <Typography text="Body02R" textColor={themeApp.colors.gray[2]}>
        A key
      </Typography>
    </RowView>
  </Container>
}
export default Component;

const Container = styled.View`
  width: ${CBStyles.adjustScale(241)}px;
  height: ${CBStyles.adjustScale(180)}px;
`
const RowView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${CBStyles.adjustScale(8)}px;
`
const ImageContainer = styled.View`
  width: ${CBStyles.adjustScale(241)}px;
  height: ${CBStyles.adjustScale(150)}px;
  border-radius: ${CBStyles.adjustScale(8)}px;
  overflow: hidden;
  position: relative;
`
const TitleContainer = styled.View`
  position: absolute;
  bottom: ${CBStyles.adjustScale(16)}px;
  right: ${CBStyles.adjustScale(16)}px;
  left: ${CBStyles.adjustScale(16)}px;
  z-index: 2;
`