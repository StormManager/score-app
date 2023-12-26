import React from "react";
import { FlatList } from "react-native";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import styled, { useTheme } from "styled-components/native";
import Typography from "../../../../components/Typography";
import { SIDEBAR_NAVIGATION } from "../../../../config/consts";
import Header from "../../../../layouts/Header";
import UserCard from "../UserCard";
import { IUserCardProps } from "../UserCard/component";
import SiedebarNavigationButton from "~components/SiedebarNavigationButton";
export const memberData: Array<IUserCardProps> = [
  {
    id: 0,
    name: "장경태",
    image: null,
  },
  {
    id: 1,
    name: "김선열",
    image: null,
  },
  {
    id: 2,
    name: "구현경",
    image: null,
  },
  {
    id: 3,
    name: "이승환",
    image: null,
  }
]
const Component = ({ descriptors, navigation, state }: DrawerContentComponentProps) => {

  const themeApp = useTheme();
  return <Container>
    <Header label="채팅방 정보" border back={false} />

    {state.routeNames.map((text) => {
      const sidebarName = SIDEBAR_NAVIGATION.find((v) => v.id === text);
      if (sidebarName)
        return <SiedebarNavigationButton key={sidebarName?.id} title={sidebarName?.name} icon={sidebarName?.icon} onPress={() => navigation.navigate(sidebarName?.id)} />
      return null
    })}
    <UserCountInfo>
      <TextBox>
        <Typography text="Body01R" textColor={themeApp.colors.gray[3]}>참여인원</Typography>
      </TextBox>
      <Typography text="Body01R" textColor={themeApp.colors.gray[5]}>4/10</Typography>
    </UserCountInfo>
    <FlatList
      data={memberData}
      renderItem={({ item }) => {
        return <UserCard {...item} />
      }}
      keyExtractor={(item) => item.id.toString()}
    />
  </Container>
}

export default Component;

const Container = styled.View`
  flex:1;
  background-color: white;
  padding-left: 24px;
`;

const UserCountInfo = styled.View`
  padding: 16px 0;
  flex-direction: row;
`
const TextBox = styled.View`
  margin-right: 8px;
`
