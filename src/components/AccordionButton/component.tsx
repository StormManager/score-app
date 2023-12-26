import React from 'react';
import { Animated } from 'react-native';
import FastImage from 'react-native-fast-image';
import styled, { useTheme } from 'styled-components/native';
import Typography from '../../components/Typography';
import CBStyles from '../../styles/CBStyles';

const ICON_WIDTH = CBStyles.adjustScale(20)

interface IAccordionButtonProps {
  onPressHandleContainer: () => void;
  onPressAddScore: () => void;
  onPressLocalImage: () => void;
  animateButton: ({ isClose }: { isClose?: boolean }) => void;
  animationValue: Animated.Value;
}

const Component = ({ onPressHandleContainer, onPressAddScore, animationValue, animateButton, onPressLocalImage }: IAccordionButtonProps) => {
  const themeApp = useTheme();
  const renderAnimatedItems = () => {
    const items = [{
      text: "악보 등록",
      icon: require("../../assets/icons/score_add.png"),
      onPress: onPressAddScore,
    }, {
      text: "내 이미지",
      icon: require("../../assets/icons/image.png"),
      onPress: onPressLocalImage,
    }, {
      text: "악보 창고",
      icon: require("../../assets/icons/score.png"),
      onPress: onPressHandleContainer,
    }];

    return items.map((item, index) => (
      <Animated.View
        key={item.text}
        style={[
          {
            transform: [
              {
                translateY: animationValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, index === 0 ? -64 * (index + 1) : -56 * (index + 1) - 8],
                }),
              },
            ],
          },
        ]}
      ><ParentButton onPress={() => {
        item.onPress()
        animateButton({
          isClose: false
        })
      }}>
          <FastImage source={item.icon} style={{
            width: ICON_WIDTH,
            aspectRatio: 1
          }} />
          <Typography text={"Button01SB"} textColor={themeApp.colors.primary[0]}>{item.text}</Typography>
        </ParentButton>
      </Animated.View>
    ));
  };

  return (
    <Container>
      {renderAnimatedItems()}

      <PressableButton style={CBStyles.baseBoxShadow} onPress={() => animateButton({ isClose: false })}>
        <FastImage source={require("../../assets/icons/send.png")} style={{
          width: ICON_WIDTH,
          aspectRatio: 1
        }} />
        <Typography text={"Button01SB"} textColor={themeApp.colors.white}>악보 보내기</Typography>
      </PressableButton>
    </Container>
  );
};


export default Component;

const ParentButton = styled.Pressable`
  display: flex;
  flex-direction: row;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.primary[1]};
  width:  ${`${CBStyles.adjustScale(176)}px`};
  height:  ${`${CBStyles.adjustScale(48)}px`};
  justify-content: center;
  align-items: center;
  padding-vertical: ${`${CBStyles.adjustScale(13)}px`};
  border-radius: ${`${CBStyles.adjustScale(8)}px`};
  gap:${`${CBStyles.adjustScale(4)}px`};
`
const Container = styled.View`
  position: absolute;
  right:  ${`${CBStyles.adjustScale(40)}px`};
  bottom:  ${`${CBStyles.adjustScale(40)}px`};
`
const PressableButton = styled.Pressable`
  display: flex;
  flex-direction: row;
  width: ${`${CBStyles.adjustScale(176)}px`};
  height:  ${`${CBStyles.adjustScale(48)}px`};
  background-color: ${({ theme }) => theme.colors.primary[0]};
  justify-content: center;
  align-items: center;
  border-radius: ${`${CBStyles.adjustScale(8)}px`};
  gap:${`${CBStyles.adjustScale(4)}px`};
  
`