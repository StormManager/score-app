
import React, { useEffect, useMemo, useRef } from "react";

import { Animated, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "styled-components";
import CBStyles from "../../../styles/CBStyles";
import RowView from "~components/RowView";
import Typography from "~components/Typography";


export type tToastAction = {
  actionText: string;
  onActionPress: () => void;
};

type CBToastProps = {
  text: string;
  mainColor: string;
  backgroundColor: string;
  onClose: () => void;
};

const TOAST_HEIGHT = CBStyles.adjustScale(48);

const CBToast: React.FC<CBToastProps> = ({ text, mainColor, backgroundColor, onClose }) => {
  const themeApp = useTheme();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const insets = useSafeAreaInsets();

  const TOAST_MAX_OFFSET_Y = useMemo(() => CBStyles.adjustScale(24) + TOAST_HEIGHT - insets.top, [insets.top]);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: TOAST_MAX_OFFSET_Y,
      duration: 300,
      useNativeDriver: true
    }).start();

    const closeToast = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      }).start(onClose);
    }, 2000);
    return () => {
      clearTimeout(closeToast)
    }

  }, [TOAST_MAX_OFFSET_Y, fadeAnim, onClose]);

  return (
    <Animated.View style={{ ...styles.container, transform: [{ translateY: fadeAnim }], top: TOAST_HEIGHT }}>
      <RowView
        style={{
          ...styles.toastContainer,
          backgroundColor
        }}
      >
        <RowView style={styles.contentsContainer}>
          <FastImage source={require("~assets/icons/fill-checked.png")} style={{
            width: 20,
            height: 20
          }} />
          <Typography text="Button02SB" textColor={themeApp.colors.white} >
            {text}
          </Typography>
        </RowView>

      </RowView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    position: "absolute",
    width: "100%",
    flex: 1,

  },
  toastContainer: {
    paddingHorizontal: CBStyles.adjustScale(16),
    paddingVertical: CBStyles.adjustScale(12),
    borderRadius: CBStyles.adjustScale(8)
  },
  contentsContainer: {
    display: 'flex',
    gap: CBStyles.adjustScale(10)
  }
});

export default CBToast;