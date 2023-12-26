/* eslint-disable react/react-in-jsx-scope */
import FastImage from "react-native-fast-image";
import styled, { useTheme } from "styled-components/native";
import Typography from "../../../../components/Typography";
import CBStyles from "../../../../styles/CBStyles";

export interface IUserCardProps {
  name: string;
  image: string | null;
  id: number;
}

const Component = ({ name, image, id }: IUserCardProps) => {
  const themeApp = useTheme();
  return (
    <Container>
      <FastImage source={image ? { uri: image } : require("../../../../assets/images/card_profile.png")} style={{ width: 32, height: 32 }} resizeMode="cover" />
      <Typography text="Body02R" textColor={themeApp.colors.gray[3]}>{name}</Typography>
      <Typography text="Body02R" textColor={themeApp.colors.gray[6]}>testetse</Typography>
    </Container>
  )
}

export default Component;
const Container = styled.View`
  flex:1;
  padding: ${CBStyles.adjustScale(8)}px;
  flex-direction: row;
  align-items: center;
  display: flex;
  gap: ${CBStyles.adjustScale(8)}px;
`;
