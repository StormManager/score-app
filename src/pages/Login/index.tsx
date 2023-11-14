import * as React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

export interface IPageProps {
  route: any
}

export const PAGE_NAME = 'P_LOGIN';
const Pages = ({ route }: IPageProps) => {
  const params = route.params;
  console.log(params)
  return (
    <Container>
      <Text>test</Text>
    </Container>
  );
}

export default Pages;


const Container = styled.View`
  flex:1;
  background-color: skyblue;
`
