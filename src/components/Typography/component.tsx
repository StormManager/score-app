import React from 'react';
import styled, { css } from 'styled-components/native';
import { optionStyles, textStyles, variantStyles, weightStyles } from './styles';

interface ITypograhpyProps {
  children: React.ReactNode;
  variant?: string;
  weight?: string
  align?: string;
  option?: string;
  text?: string;
  textColor?: string;
  lineBreakStrategyIOS?: string;
  [key: string]: any;
}

const Component: React.FunctionComponent<ITypograhpyProps> = (props) => {
  return <Typograhpy

    lineBreakStrategyIOS={props.lineBreakStrategyIOS}
    weight={props.weight}
    align={props.align}
    variant={props.variant}
    option={props.option}
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

  ${({ variant }) => variant && variantStyles[variant]};
  ${({ option }) => option && optionStyles[option]}
  ${({ weight }) => weight && weightStyles[weight]};
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
