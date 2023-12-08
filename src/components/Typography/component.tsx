import React from 'react';
import styled, { css } from 'styled-components/native';
import { textStyles } from './styles';

interface ITypograhpyProps {
  children: React.ReactNode;
  align?: string;
  text?: string;
  textColor?: string;
  lineBreakStrategyIOS?: string;
  [key: string]: any;
}

const Component: React.FunctionComponent<ITypograhpyProps> = (props) => {
  return <Typograhpy

    lineBreakStrategyIOS={props.lineBreakStrategyIOS}
    align={props.align}
    text={props.text}
    textColor={props.textColor}
    {...props.key}>
    {props.children}
  </Typograhpy>
};

export default Component;

const Typograhpy = styled.Text<ITypograhpyProps>`
 font-style: normal;
  margin: 0px;
  padding: 0px;
  font-family: ${({ theme }) => theme.font.fontFamily};

  ${({ text }) => text && textStyles[text]};

  ${({ align }) =>
    align &&
    css`
      text-align: ${align};
    `};

  ${({ textColor }) => {
    if (!textColor) return null;

    const isNeedNotProperty = Array.isArray(textColor);
    return isNeedNotProperty
      ? css`
          ${textColor}
        `
      : css`
          color: ${textColor};
        `;
  }};
  background-color: transparent;
`
