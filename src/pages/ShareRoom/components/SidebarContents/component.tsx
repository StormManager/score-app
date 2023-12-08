import React from "react";
import styled, { useTheme } from "styled-components/native";
import Typography from "../../../../components/Typography";
import Header from "../../../../layouts/Header";
import { FlatList } from "react-native";
import UserCard from "../UserCard";
import { IUserCardProps } from "../UserCard/component";
const data: Array<IUserCardProps> = [
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
const Component = () => {
  const themeApp = useTheme();
  return <Container>
    <Header label="채팅방 정보" border back={false} />
    <UserCountInfo>
      <TextBox>
        <Typography text="Body01R" textColor={themeApp.colors.gray[3]}>참여인원</Typography>
      </TextBox>
      <Typography text="Body01R" textColor={themeApp.colors.gray[5]}>4/10</Typography>
    </UserCountInfo>
    <FlatList
      data={data}
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

const Title = styled.View`
  padding: 8px;
  padding-left: 24px;
  height: 40px;

`
const UserCountInfo = styled.View`
  padding: 16px 0;
  flex-direction: row;
`
const TextBox = styled.View`
  margin-right: 8px;
`