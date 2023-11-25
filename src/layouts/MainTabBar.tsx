import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, View, Text, Pressable, Keyboard } from "react-native";
import FastImage from "react-native-fast-image";
import styled, { useTheme } from "styled-components/native";
import Typography from "../components/Typography";
import { useEffect, useState } from "react";

const shareGray = require('../assets/images/share_gray.png');
const share = require('../assets/images/share.png');
const containerGray = require('../assets/images/container_gray.png');
const container = require('../assets/images/container.png');
const profile = require('../assets/images/profile.png');


const labelMap = {
  T_SHARE: { label: "악보공유방", icon: share, iconGray: shareGray },
  T_CONTAINER: { label: "악보창고", icon: container, iconGray: containerGray },
  T_MYPAGE: { label: "마이페이지", icon: profile, iconGray: profile },
} as { [val: string]: { label: string; icon: any; iconGray: any } };


function MainTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const [visible, setVisible] = useState<boolean>(true);
  const themeApp = useTheme();
  useEffect(() => {

    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      //Whenever keyboard did show make it don't visible
      setVisible(false);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setVisible(true);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  return visible && (
    <TabContainer>
      <TabBox>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          console.log(route.name, options)

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            console.log(!isFocused, !event.defaultPrevented)
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <Pressable
              key={route.name}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <FastImage
                source={isFocused ? labelMap[route.name].icon : labelMap[route.name].iconGray}
                style={{ width: 24, height: 24 }}
              />
              <Typography text="Button03R" textColor={isFocused ? themeApp.colors.primary[0] : themeApp.colors.gray[5]}>
                {labelMap[route.name].label}
              </Typography>
            </Pressable>
          );
        })}
      </TabBox>
    </TabContainer>
  );
}
export default MainTabBar

const TabContainer = styled.View`
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.gray[7]};
  height: 65px;
`
const TabBox = styled.View`
  margin: auto auto;
  flex-direction: row;
  max-width: 668px;
`