/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { ReactNode, forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Alert, Dimensions, Modal, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, ViewStyle } from 'react-native';
import { ScrollView } from 'native-base';
import { Controller, FieldValues, RegisterOptions, useFormContext } from 'react-hook-form';
import styled, { css, useTheme } from 'styled-components/native';
import CBStyles from '../../styles/CBStyles';
import { formattedTimer } from '../../utils/dateFormatter';
import { AntDesignIcon } from '../Icon';
import Typography from '../Typography';
import { textStyles } from '../Typography/styles';
import EyeOff from '~assets/icons/TextInput/eyeOff.svg';
import EyeOn from '~assets/icons/TextInput/eyeOn.svg';
interface ISuffixProps {
  isNeedDelete?: boolean;
  timer?: number;
  isAuth?: boolean;
  authText?: string;
  authPressEvent?: (props: boolean) => void;
  disabledEvent?: boolean,
}
export interface ITextInputProps {
  name: string;
  label?: string;
  rules?: Omit<RegisterOptions<FieldValues, string>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
  defaultValue?: string | number;
  placeholder: string;
  isEditable?: boolean;
  isPassword?: boolean;
  padding?: string;
  suffix?: ISuffixProps;
  caption?: string;
  style: ViewStyle;
  onDropDownPress?: () => void;
  dropdownList?: string[];
  [rest: string]: any;
}
interface ITimerProps {
  remainTime: number;
  isRunning: boolean;
  firstRunning: boolean;
}
interface IStyleProps {
  isAuth?: boolean;
  suffix?: boolean;
  timer?: boolean;
  isEditable?: boolean;
  editable?: boolean;
  isError?: boolean;
  $focus?: boolean;
}
interface ITextInputStyleProps {
  text: string;
  suffix: boolean;
  timer: boolean;
  placeholder?: string;
  autoComplete: string;
  editable: boolean;
  paddings?: string;
}
const FULL_HEIGHT = Dimensions.get('window').height;
const SCROLL_VIEW_MAX_HEIGHT = 240;
const RefTextInput = forwardRef<TextInput, ITextInputProps>((props, ref) => {
  const {
    name,
    label,
    rules,
    type,
    placeholder,
    defaultValue,
    isEditable = true,
    isPassword,
    suffix,
    padding,
    style,
    onDropDownPress,
    dropdownList
  } = props;
  const {
    control,
    watch,
    formState: { errors },
    setValue,
    resetField,
  } = useFormContext<FieldValues>();
  const inputRef = useRef<TextInput | null>(null);

  useImperativeHandle(ref, () => inputRef.current as TextInput, [inputRef]);


  const [timer, setTimer] = useState<ITimerProps>({
    remainTime: suffix ? suffix.timer ?? 0 : 0,
    isRunning: false,
    firstRunning: false,
  });
  const [isDisabled, setIsDisabled] = useState<boolean>();
  const [focus, setFocus] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const data = watch(name);
  const [isShowing, setIsShowing] = useState(false);
  const themeApp = useTheme();
  const [dropdownTop, setDropdownTop] = useState(0);
  const [width, setWidth] = useState(0);
  const touchableOpacityRef = useRef<TouchableOpacity | null>(null);

  useEffect(() => {
    if (!isVisible || !dropdownList?.length) {
      return;
    }

    touchableOpacityRef.current?.measure(
      (_x, _y, width, height, _pageX, pageY) => {
        setWidth(width);

        if (
          FULL_HEIGHT -
          (pageY +
            height +
            12 +
            Math.min(SCROLL_VIEW_MAX_HEIGHT, dropdownList?.length * 48)) >
          10
        ) {
          setDropdownTop(pageY + height + 12);
        } else {
          setDropdownTop(
            pageY - Math.min(SCROLL_VIEW_MAX_HEIGHT, dropdownList?.length * 48) - 12
          );
        }
      }
    );
  }, [dropdownList?.length, isVisible]);
  // Props
  const containerProps = {
    editable: isEditable,
  };

  const textInputProps = {
    placeholder,
    autoComplete: 'off',
    editable: isEditable,
  };


  let suffixContent: string | ReactNode;

  if (suffix?.isNeedDelete && data) {
    suffixContent = (
      <TouchableOpacity
        onPress={() => {
          resetField(name);
          if (inputRef !== null)
            inputRef.current?.focus();
        }}>
        <AntDesignIcon name="closecircle" />
      </TouchableOpacity>
    );
  }

  // Password Showing
  if (isPassword && data) {
    suffixContent = (
      <TouchableOpacity
        onPress={() => {
          setIsShowing(!isShowing);
        }}>
        {isShowing ? <EyeOn /> : <EyeOff />}
      </TouchableOpacity>
    );
  }

  // Suffix - Timer


  if (timer.remainTime > 0 && !timer.isRunning) {
    setTimer(prev => ({ ...prev, isRunning: true, firstRunning: true }));
  }

  useEffect(() => {
    if (timer.isRunning) {
      const timerId = setTimeout(() => {
        setTimer(prev => ({ ...prev, remainTime: prev.remainTime - 1 }));
      }, 1000);

      if (timer.remainTime < 0) {
        setTimer(prev => ({ ...prev, isRunning: false }));
      }

      return () => {
        clearTimeout(timerId);
      };
    }
  }, [timer]);
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue && defaultValue}
      render={({ field: { onChange } }) => {
        const regExp = /[^0-9]/g;
        const redTimerConditiion =
          // suffix?.timer &&
          (timer.remainTime <= 0 || !timer.isRunning) && timer.firstRunning;
        return (
          <Wrapper {...style}>
            {label?.length && (
              <LabelContainer>
                <Typography
                  text="Button03R"
                  textColor={
                    errors[name]
                      ? themeApp.colors.error
                      : themeApp.colors.gray[5]
                  }>
                  {label}
                </Typography>
              </LabelContainer>
            )}
            {/* TextInput */}
            {onDropDownPress && (
              <TouchableOpacity
                style={styles.dropdown}
                activeOpacity={1}
                ref={touchableOpacityRef}
                onPress={() => {
                  onDropDownPress();
                  console.log(isVisible)
                  setIsVisible(!isVisible)
                }} />
            )}
            <ControlContainer
              $focus={focus}
              {...containerProps}>
              <InputContainer>
                <StyledTextInput
                  {...textInputProps}
                  textBreakStrategy='highQuality'
                  autoCapitalize={'none'}
                  keyboardType={type}
                  editable={!onDropDownPress}
                  onFocus={() => {
                    setFocus(true)
                  }}
                  onBlur={(e) => {
                    setFocus(false)
                  }}
                  onChangeText={onChange}
                  placeholderTextColor={themeApp.colors.gray[7]}
                  text={'Button01R'}
                  paddings={padding && padding}
                  suffix={!!suffixContent}
                  timer={timer.remainTime > 0}
                  value={data && (type === "numeric" ? data.replace(regExp, "") : data)}
                  secureTextEntry={isPassword ? !isShowing : false}
                />
              </InputContainer>
              {/* Suffix */}
              {isEditable && (
                <>
                  {timer.remainTime > 0 && timer.isRunning && (
                    <TimerContainer
                      timer={timer.remainTime > 0}
                      isAuth={suffix?.isAuth}>
                      <Typography
                        variant="h600"
                        weight="R"
                        textColor={timer.remainTime > 0 ? undefined : 'red'}>
                        {timer.isRunning ? formattedTimer(timer.remainTime) : '00:00'}
                      </Typography>
                    </TimerContainer>
                  )}

                  {redTimerConditiion && (
                    <TimerContainerWhenDone>
                      <Typography variant="h600" weight="R" textColor="red">
                        00:00
                      </Typography>
                    </TimerContainerWhenDone>
                  )}

                  <SuffixContainer
                    suffix={!!suffixContent}
                    isAuth={suffix?.isAuth}>
                    {suffixContent}
                  </SuffixContainer>
                </>
              )}
              {isEditable && suffix && suffix.isAuth && (
                <AuthenticationButton
                  disabled={isDisabled}
                  onPress={async () => {
                    setIsDisabled(true);
                    try {
                      if (suffix && suffix.authText === '재발송') {
                        setTimer(prev => ({ ...prev, remainTime: 180 }));
                        resetField(name);
                        return suffix?.authPressEvent && suffix.authPressEvent(true);
                      }
                      suffix?.authPressEvent && suffix.authPressEvent(false);
                    } catch (error: any) {
                      Alert.alert(
                        '인증번호',
                        error.toString()?.replace('error: ', ''),
                      );
                    } finally {
                      setTimeout(() => {
                        setIsDisabled(false);
                      }, 2000);
                    }
                  }}>
                  <Typography
                    text={'Button10SB'}
                    textColor={
                      suffix && suffix.authText === '재발송'
                        ? themeApp.colors.gray[3]
                        : errors[name]
                          ? themeApp.colors.gray[6]
                          : watch(name)
                            ? themeApp.colors.gray[3]
                            : themeApp.colors.gray[6]
                    }>
                    {suffix?.authText}
                  </Typography>
                </AuthenticationButton>
              )}
              <Modal visible={isVisible} transparent animationType="fade">
                <TouchableWithoutFeedback style={{ zIndex: 999 }} onPress={() => setIsVisible(false)}>
                  <DropDownContainer>
                    <DropDownListBox
                      style={
                        CBStyles.baseBoxShadow
                      }
                      $dropdownTop={dropdownTop}
                      $width={width}
                    >
                      <ScrollView showsVerticalScrollIndicator={false}>
                        {dropdownList?.map((l) => (
                          <DropDownListItem key={l} onPress={() => {
                            setValue(name, l)
                            setIsVisible(false)
                          }}>
                            <Typography text='Button01R' textColor={themeApp.colors.gray[2]}>{l}</Typography>
                          </DropDownListItem>
                        ))}
                      </ScrollView>
                    </DropDownListBox>
                  </DropDownContainer>
                </TouchableWithoutFeedback>
              </Modal>
            </ControlContainer>
            {errors[name]?.message && (
              <LabelContainer>
                <Typography
                  text='Button03R'
                  textColor={themeApp.colors.error}>
                  {errors[name]?.message as string}
                </Typography>
              </LabelContainer>
            )}

          </Wrapper>)
      }} />
  );
});

export default RefTextInput;

const Wrapper = styled.View`
  width: 100%;
`;
const LabelContainer = styled.View`
  width: 100%;
  background-color: transparent;
  margin-bottom: 4px;
`;

// TextInput
const ControlContainer = styled.View<IStyleProps>`
  position: relative;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 8px;
  /* border: none; */
  ${({ editable }) => {
    if (!editable) {
      return css`
        background-color: #f5f6f8;
      `;
    }
  }}
  ${({ editable, theme, isError, $focus }) => {
    if (editable) {
      return css`
        background-color: ${theme.colors.white};
        border: 1px solid ${isError
          ? theme.colors.error
          : $focus ? theme.colors.gray[5] : theme.colors.gray[7]};
      `;
    }
  }}
`;
const DropDownContainer = styled.View`
    width: ${CBStyles.windowWidth}px;
    height: ${CBStyles.windowWidth}px;
    align-items: center;
`
const DropDownListBox = styled.View<{ $dropdownTop?: number, $width?: number }>`
    width:${({ $width }) => `${$width ?? 0}px`};
    position: absolute;
    z-index: 10;
    top: ${({ $dropdownTop }) => `${$dropdownTop ?? 0}px`};;
    right: ${CBStyles.adjustScale(40)}px;
    border-radius:  ${CBStyles.adjustScale(8)}px;
    background-color: ${({ theme }) => theme.colors.white};
    max-height: ${SCROLL_VIEW_MAX_HEIGHT}px;
`
const DropDownListItem = styled.Pressable`
  padding-top: ${CBStyles.adjustScale(17)}px;
  padding-bottom: ${CBStyles.adjustScale(17)}px;
  padding-left: ${CBStyles.adjustScale(16)}px;
`
const AuthenticationButton = styled.Pressable`
  min-width: 77px;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  border: ${({ theme }) => `1px solid ${theme.colors.gray[7]}`};
  padding: 7px 16px;
  position: absolute;
  right: 0;
  bottom: 8px;
`;
const InputContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: flex-start;
`;

const StyledTextInput = styled.TextInput<ITextInputStyleProps>`
  width: 100%;
  ${({ text }) => text && textStyles[text]}
  ${({ suffix }) => {
    if (suffix) {
      return css`
        padding-right: 18%;
      `;
    }
  }}
  ${({ timer }) => {
    if (timer) {
      return css`
        padding-right: 36%;
      `;
    }
  }}
  ${({ editable }) => {
    if (!editable) {
      return css`
        color: black;
        padding-right: 0px;
      `;
    }
  }}
  ${({ paddings }) => {
    if (paddings) {
      return css`
        padding: ${paddings};
      `
    }
  }}
`;

// Suffix
const SuffixContainer = styled.View<IStyleProps>`
  position: absolute;
  width: 0;
  right: 0;
  height: 100%;
  ${({ isAuth }) => {
    if (isAuth) {
      return css`
        align-items: flex-end;
        justify-content: space-between;
        flex-direction: row;
      `;
    } else {
      return css`
        align-items: center;
        justify-content: center;
      `;
    }
  }}
  ${({ suffix, isAuth }) => {
    if (suffix) {
      if (isAuth) {
        return css`
          width: 32%;
        `;
      } else {
        return css`
          width: 10%;
        `;
      }
    }
  }}
`;


const styles = StyleSheet.create({
  dropdown: {
    position: "absolute",
    paddingInline: "1rem",
    display: "flex",
    flexDirection: 'row',
    justifyContent: "flex-end",
    alignItems: "center",
    top: 0,
    bottom: 0,
    left: 0,
    zIndex: 1,
    right: 0,
  }
});
const TimerContainer = styled.View <IStyleProps> `
  position: absolute;
  width: 0;
  right: 0;
  /* bottom: 8px; */
  bottom: 16px;
  ${({ isAuth }) => {
    if (isAuth) {
      return css`
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
      `;
    } else {
      return css`
        align-items: center;
        justify-content: center;
      `;
    }
  }}
  ${({ timer, isAuth }) => {
    if (timer) {
      if (isAuth) {
        return css`
          width: 38%;
        `;
      } else {
        return css`
          width: 15%;
        `;
      }
    }
  }}
`;

const TimerContainerWhenDone = styled.View`
  position: absolute;
  width: 0;
  right: 0;
  bottom: 16px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  width: 38%;
`;