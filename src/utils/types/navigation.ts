import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootScreenPrams = {
  S_LOGIN: {screen: keyof LoginStackParam; params?: any};
  S_MAIN: {screen: keyof LoginStackParam; params?: any};
};
type RootStackRouteProp<T extends keyof RootScreenPrams> = RouteProp<
  RootScreenPrams,
  T
>;
type RootNativeStackNavigationProp<T extends keyof RootScreenPrams> =
  NativeStackNavigationProp<RootScreenPrams, T>;

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
export type HomeStackParam = {
  P_HOME: undefined;
};
type HomeStackRouteProp<T extends keyof HomeStackParam> = RouteProp<
  HomeStackParam,
  T
>;
type HomeNativeStackNavigationProps<T extends keyof HomeStackParam> =
  CompositeNavigationProp<
    NativeStackNavigationProp<RootScreenPrams, 'S_MAIN'>,
    NativeStackNavigationProp<HomeStackParam, T>
  >;
export type HomeStackProps<T extends keyof HomeStackParam> = {
  route: HomeStackRouteProp<T>;
  navigation: HomeNativeStackNavigationProps<T>;
};
