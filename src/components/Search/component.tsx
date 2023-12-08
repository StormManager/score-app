import React, { useRef } from "react"
import { FormProvider, useForm } from "react-hook-form"
import styled, { useTheme } from "styled-components/native"
import CBStyles from "../../styles/CBStyles"
import { AntDesignIcon } from "../Icon"
import RefTextInput from "../RefTextInput"
import Typography from "../Typography"
const Component = ({ isTablet, placeholder }: { isTablet: boolean, placeholder: string }) => {
  const themeApp = useTheme();
  const form = useForm({ mode: 'all' });
  const searchRef = useRef(null);

  return (
    <Container>
      <FormProvider {...form}>
        <InputBox>
          <RefTextInput
            name="search"
            ref={searchRef}
            autoCapitalize="none"
            placeholder={placeholder}
            padding={`${CBStyles.adjustScale(12)}px ${CBStyles.adjustScale(24)}px`}
          />
        </InputBox>
        {isTablet
          ?
          <SearchTabletButton>
            <Typography text="Button01SB" textColor={themeApp.colors.white}>
              검색
            </Typography>
          </SearchTabletButton>
          :
          <SearchButton>
            <AntDesignIcon name="search1" size={24} color="white" />
          </SearchButton>
        }
      </FormProvider>
    </Container>
  )
}


export default Component

const Container = styled.View` 
  flex:1;
  flex-direction: row;
  align-items: center;
`
const SearchButton = styled.Pressable`
  width: 55px;
  aspect-ratio: 1;
  max-height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
  background-color: ${({ theme }) => theme.colors.primary[0]};
`
const InputBox = styled.View`
  flex:1; 
  margin-right: 16px;
`

const SearchTabletButton = styled.Pressable`
  width: 112px;
  height: 100%;
  max-height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
  background-color: ${({ theme }) => theme.colors.primary[0]};

`