import {css} from 'styled-components/native';
import {RuleSet} from 'styled-components/native/dist/types';

export const weightStyles: Record<string, RuleSet<object>> = {
  B: css`
    font-weight: 700;
  `,
  M: css`
    font-weight: 500;
  `,
  R: css`
    font-weight: 400;
  `,
  N: css`
    font-weight: 600;
  `,
};

export const optionStyles: Record<string, RuleSet<object>> = {
  longform: css`
    line-height: 22px;
  `,
  underline: css`
    text-decoration-line: underline;
  `,
};

export const variantStyles: Record<string, RuleSet<object>> = {
  h900: css`
    font-weight: 700;
    font-size: 22px;
    line-height: 32px;
    letter-spacing: -0.05px;
  `,

  h800: css`
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.025px;
  `,

  h700: css`
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  `,

  h600: css`
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  `,

  h500: css`
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
  `,

  h400: css`
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;
  `,

  h300: css`
    font-weight: 400;
    font-size: 9px;
    line-height: 12px;
  `,
};

export const textStyles: Record<string, RuleSet<object>> = {
  LargeTitle: css`
    font-size: 48x;
    line-height: 60px;
    font-family: 'Pretendard-SemiBold';
  `,
  Title01R: css`
    font-size: 32px;
    line-height: 42px;
    font-family: 'Pretendard-Regular';
  `,
  Title01SB: css`
    font-size: 32px;
    line-height: 42px;
    font-family: 'Pretendard-SemiBold';
  `,
  Title02R: css`
    font-size: 28px;
    line-height: 36px;
    font-family: 'Pretendard-Regular';
  `,
  Title02SB: css`
    font-size: 28px;
    line-height: 36px;
    font-family: 'Pretendard-SemiBold';
  `,
  Title03R: css`
    font-size: 22px;
    line-height: 30px;
    font-family: 'Pretendard-Regular';
  `,
  Title03SB: css`
    font-size: 22px;
    line-height: 30px;
    font-family: 'Pretendard-SemiBold';
  `,
  Title04R: css`
    font-size: 18px;
    line-height: 24px;
    font-family: 'Pretendard-Regular';
  `,
  Title04SB: css`
    font-size: 18px;
    line-height: 24px;
    font-family: 'Pretendard-SemiBold';
  `,
  Body01R: css`
    font-size: 16px;
    line-height: 22px;
    font-family: 'Pretendard-Regular';
  `,
  Body01SB: css`
    font-size: 16px;
    line-height: 22px;
    font-family: 'Pretendard-SemiBold';
  `,
  Body02R: css`
    font-size: 14px;
    line-height: 22px;
    font-family: 'Pretendard-Regular';
  `,
  Body02SB: css`
    font-size: 14px;
    line-height: 22px;
    font-family: 'Pretendard-SemiBold';
  `,
  Button01R: css`
    font-size: 17px;
    line-height: 22px;
    font-family: 'Pretendard-Regular';
  `,
  Button01SB: css`
    font-size: 17px;
    line-height: 22px;
    font-family: 'Pretendard-SemiBold';
  `,
  Button02R: css`
    font-size: 15px;
    line-height: 20px;
    font-family: 'Pretendard-Regular';
  `,
  Button02SB: css`
    font-size: 15px;
    line-height: 20px;
    font-family: 'Pretendard-SemiBold';
  `,
  Button03R: css`
    font-size: 12px;
    line-height: 18px;
    font-family: 'Pretendard-Regular';
  `,
  Button03SB: css`
    font-size: 12px;
    line-height: 18px;
    font-family: 'Pretendard-SemiBold';
  `,
  Label: css`
    font-size: 16px;
    line-height: 22px;
    font-family: 'Pretendard-SemiBold';
  `,
};
