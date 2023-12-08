import { css } from "styled-components/native";
import { RuleSet } from "styled-components/native/dist/types";
import CBStyles from "../../styles/CBStyles";

export const textStyles: Record<string, RuleSet<object>> = {
    LargeTitle: css`
        font-size: ${CBStyles.adjustScale(48)}px;
        line-height: ${CBStyles.adjustScale(60)}px;
        font-weight: 600;
        font-family: "Pretendard-SemiBold";
    `,
    Title01R: css`
        font-size: ${CBStyles.adjustScale(32)}px;
        line-height: ${CBStyles.adjustScale(42)}px;
        font-family: "Pretendard-Regular";
    `,
    Title01SB: css`
        font-size: ${CBStyles.adjustScale(32)}px;
        line-height: ${CBStyles.adjustScale(42)}px;
        font-weight: 600;
        font-family: "Pretendard-SemiBold";
    `,
    Title02R: css`
        font-size: ${CBStyles.adjustScale(28)}px;
        line-height: ${CBStyles.adjustScale(36)}px;
        font-family: "Pretendard-Regular";
    `,
    Title02SB: css`
        font-size: ${CBStyles.adjustScale(28)}px;
        line-height: ${CBStyles.adjustScale(36)}px;
        font-weight: 600;
        font-family: "Pretendard-SemiBold";
    `,
    Title03R: css`
        font-size: ${CBStyles.adjustScale(22)}px;
        line-height: ${CBStyles.adjustScale(30)}px;
        font-family: "Pretendard-Regular";
    `,
    Title03SB: css`
        font-size: ${CBStyles.adjustScale(22)}px;
        line-height: ${CBStyles.adjustScale(30)}px;
        font-weight: 600;
        font-family: "Pretendard-SemiBold";
    `,
    Title04R: css`
        font-size: ${CBStyles.adjustScale(18)}px;
        line-height: ${CBStyles.adjustScale(24)}px;
        font-family: "Pretendard-Regular";
    `,
    Title04SB: css`
        font-size: ${CBStyles.adjustScale(18)}px;
        line-height: ${CBStyles.adjustScale(24)}px;
        font-weight: 600;
        font-family: "Pretendard-SemiBold";
    `,
    Body01R: css`
        font-size: ${CBStyles.adjustScale(16)}px;
        line-height: ${CBStyles.adjustScale(22)}px;
        font-family: "Pretendard-Regular";
    `,
    Body01SB: css`
        font-size: ${CBStyles.adjustScale(16)}px;
        line-height: ${CBStyles.adjustScale(22)}px;
        font-weight: 600;
        font-family: "Pretendard-SemiBold";
    `,
    Body02R: css`
        font-size: ${CBStyles.adjustScale(14)}px;
        line-height: ${CBStyles.adjustScale(22)}px;
        font-family: "Pretendard-Regular";
    `,
    Body02SB: css`
        font-size: ${CBStyles.adjustScale(14)}px;
        line-height: ${CBStyles.adjustScale(22)}px;
        font-weight: 600;
        font-family: "Pretendard-SemiBold";
    `,
    Button01R: css`
        font-size: ${CBStyles.adjustScale(17)}px;
        line-height: ${CBStyles.adjustScale(22)}px;
        font-family: "Pretendard-Regular";
    `,
    Button01SB: css`
        font-size: ${CBStyles.adjustScale(17)}px;
        line-height: ${CBStyles.adjustScale(22)}px;
        font-weight: 600;
        font-family: "Pretendard-SemiBold";
    `,
    Button02R: css`
        font-size: ${CBStyles.adjustScale(15)}px;
        line-height: ${CBStyles.adjustScale(20)}px;
        font-family: "Pretendard-Regular";
    `,
    Button02SB: css`
        font-size: ${CBStyles.adjustScale(15)}px;
        line-height: ${CBStyles.adjustScale(20)}px;
        font-weight: 600;
        font-family: "Pretendard-SemiBold";
    `,
    Button03R: css`
        font-size: ${CBStyles.adjustScale(12)}px;
        line-height: ${CBStyles.adjustScale(18)}px;
        font-family: "Pretendard-Regular";
    `,
    Button03SB: css`
        font-size: ${CBStyles.adjustScale(12)}px;
        line-height: ${CBStyles.adjustScale(18)}px;
        font-weight: 600;
        font-family: "Pretendard-SemiBold";
    `,
    Label: css`
        font-size: ${CBStyles.adjustScale(16)}px;
        line-height: ${CBStyles.adjustScale(22)}px;
        font-family: "Pretendard-SemiBold";
    `
};
