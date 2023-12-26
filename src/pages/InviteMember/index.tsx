import React from "react";
import { FlatList } from "native-base";
import styled from "styled-components/native";
import UserInviteCard from "./components/UserInviteCard";
import Typography from "../../components/Typography";
import { SIDEBAR_NAVIGATION } from "../../config/consts";
import Header from "../../layouts/Header";
import { memberData } from "../../pages/ShareRoom/components/SidebarContents/component";
import CBStyles from "../../styles/CBStyles";
import { DrawerStackProps } from "../../utils/types/navigation";
import Search from "~components/Search";

const Pages = ({ navigation, route }: DrawerStackProps<"D_INVITE_MEMBER">) => {
  return (
    <Container>
      <Header label={SIDEBAR_NAVIGATION.find((v) => v.id === route.name)?.name} border back={true} />
      <SearchBox>
        <Search isTablet placeholder="유저 아이디 검색" />
      </SearchBox>
      <InviteMemberList>
        <FlatList
          data={memberData}
          renderItem={({ item }) => {
            return <UserInviteCard {...item} />
          }}
          keyExtractor={(item) => item.id.toString()}
        />
      </InviteMemberList>
    </Container>
  )
}

export default Pages;


const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  
`

const InviteMemberList = styled.View`
  display: flex;
  flex:1;
  flex-direction: column;
  padding-left: ${CBStyles.adjustScale(40)}px;
  padding-right: ${CBStyles.adjustScale(40)}px;
`
const SearchBox = styled.View`
  position: fixed;
  background-color: ${({ theme }) => theme.colors.white};
  height: ${`${CBStyles.adjustScale(76)}px`};
  padding-left: ${`${CBStyles.adjustScale(40)}px`};
  padding-right: ${`${CBStyles.adjustScale(40)}px`};
  padding-top: ${`${CBStyles.adjustScale(24)}px`};
`