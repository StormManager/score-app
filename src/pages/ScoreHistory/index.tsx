import React from "react";
import styled from "styled-components/native";
import Typography from "../../components/Typography";
import Header from "../../layouts/Header";
import { DrawerStackProps } from "../../utils/types/navigation";

const Pages = ({ navigation, route }: DrawerStackProps<"D_SCORE_HISTORY">) => {
  return (
    <Container>
      <Header label="악보 히스토리" border back={true} />
      <Typography>
        악보 히스토리
      </Typography>
    </Container>
  )
}

export default Pages;


const Container = styled.View`
  flex: 1;
`