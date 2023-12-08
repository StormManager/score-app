import FastImage from "react-native-fast-image";
import styled, { useTheme } from "styled-components/native";
import Typography from "../../../../components/Typography";

export interface IUserCardProps {
  name: string;
  image: string | null;
  id: number;
}

const Component = ({ name, image, id }: IUserCardProps) => {
  const themeApp = useTheme();
  return (
    <Container>
      <FastImage source={image ? { uri: image } : require("../../../../assets/images/card_profile.png")} style={{ width: 32, height: 32, marginRight: 8 }} resizeMode="cover" />
      <Typography text="Body02R" textColor={themeApp.colors.gray[3]}>{name}</Typography>
    </Container>
  )
}

export default Component;
const Container = styled.View`
  flex:1;
  flex-direction: row;
  align-items: center;
  display: flex;
  margin-bottom: 16px;
`;
