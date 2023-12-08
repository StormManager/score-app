import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootScreenPrams = {
  S_LOGIN: {screen: keyof LoginStackParam; params?: any};
  S_MAIN: {screen: keyof MainTabParam; params?: any};
  P_CREATE_ROOM: undefined;
  P_SHARE_ROOM: {screen: keyof DrawerParam; params?: any};
};
type RootStackRouteProp<T extends keyof RootScreenPrams> = RouteProp<
  RootScreenPrams,
  T
>;
type RootNativeStackNavigationProp<T extends keyof RootScreenPrams> =
  T extends 'S_MAIN'
    ? BottomTabNavigationProp<RootScreenPrams, T>
    : T extends 'P_SHARE_ROOM'
    ? DrawerNavigationProp<RootScreenPrams, T>
    : NativeStackNavigationProp<RootScreenPrams, T>;

export type RootStackProps<T extends keyof RootScreenPrams> = {
  route: RootStackRouteProp<T>;
  navigation: RootNativeStackNavigationProp<T>;
};

export type LoginStackParam = {
  P_LOGIN: undefined;
};
type LoginStackRouteProp<T extends keyof LoginStackParam> = RouteProp<
  LoginStackParam,
  T
>;
type LoginNativeStackNavigationProps<T extends keyof LoginStackParam> =
  CompositeNavigationProp<
    NativeStackNavigationProp<RootScreenPrams, 'S_LOGIN'>,
    NativeStackNavigationProp<LoginStackParam, T>
  >;
export type LoginStackProps<T extends keyof LoginStackParam> = {
  route: LoginStackRouteProp<T>;
  navigation: LoginNativeStackNavigationProps<T>;
};
export type MainTabParam = {
  T_SHARE: undefined;
  T_CONTAINER: undefined;
  T_MYPAGE: undefined;
};
type MainTabStackRouteProp<T extends keyof MainTabParam> = RouteProp<
  MainTabParam,
  T
>;
type MainTabNativeStackNavigationProps<T extends keyof MainTabParam> =
  CompositeNavigationProp<
    NativeStackNavigationProp<RootScreenPrams, 'S_MAIN'>,
    NativeStackNavigationProp<MainTabParam, T>
  >;
export type MainTabStackProps<T extends keyof MainTabParam> = {
  route: MainTabStackRouteProp<T>;
  navigation: MainTabNativeStackNavigationProps<T>;
};
export type IDrawerProps = {
  roomName?: string;
  password?: string;
  totalUser?: string;
};
export type DrawerParam = {
  D_SHARE_ROOM: IDrawerProps;
};
type DrawerStackRouteProp<T extends keyof DrawerParam> = RouteProp<
  DrawerParam,
  T
>;
type DrawerNativeStackNavigationProps<T extends keyof DrawerParam> =
  CompositeNavigationProp<
    NativeStackNavigationProp<RootScreenPrams, 'S_MAIN'>,
    DrawerNavigationProp<DrawerParam, T>
  >;
export type DrawerStackProps<T extends keyof DrawerParam> = {
  route: DrawerStackRouteProp<T>;
  navigation: DrawerNativeStackNavigationProps<T>;
};
