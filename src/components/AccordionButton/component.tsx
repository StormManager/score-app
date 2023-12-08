import Typography from '../../components/Typography';
import CBStyles from '../../styles/CBStyles';
import React, { useRef, useState } from 'react';
import { Animated, Easing } from 'react-native';
import FastImage from 'react-native-fast-image';
import styled, { useTheme } from 'styled-components/native';

interface IAccordionButtonProps {
  onPressHandleContainer: () => void;
  onPressAddScore: () => void;
  onPressLocalImage: () => void;
}

const Component = ({ onPressHandleContainer, onPressAddScore, onPressLocalImage }: IAccordionButtonProps) => {
  const animationValue = useRef(new Animated.Value(0)).current;
  const themeApp = useTheme();
  const [isExtend, setIsExtend] = useState<boolean>(false)
  const animateButton = () => {
    Animated.timing(animationValue, {
      toValue: !isExtend ? 1 : 0,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
    setIsExtend(!isExtend)
  };

  const renderAnimatedItems = () => {
    const items = [{
      text: "악보 추가",
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
        animateButton()
      }}>
          <FastImage source={item.icon} style={{
            width: CBStyles.adjustScale(20),
            height: CBStyles.adjustScale(20)
          }} />
          <Typography text={"Button01SB"} textColor={themeApp.colors.primary[0]}>{item.text}</Typography>
        </ParentButton>
      </Animated.View>
    ));
  };

  return (
    <Container>
      {renderAnimatedItems()}

      <PressableButton style={CBStyles.baseBoxShadow} onPress={animateButton}>
        <FastImage source={require("../../assets/icons/send.png")} style={{
          width: CBStyles.adjustScale(20),
          height: CBStyles.adjustScale(20)
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