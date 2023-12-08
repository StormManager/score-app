module.exports = {
    printWidth: 120,
    tabWidth: 4,
    singleQuote: false,
    bracketSpacing: true,
    semi: true,
    useTabs: false,
    arrowParens: "avoid",
    endOfLine: "auto",
    jsxBracketSameLine: false,
    trailingComma: "none",
    importOrder: [
        "^react$",
        "^react-native$",
        "^@react-navigation/(.*)$",
        "<THIRD_PARTY_MODULES>",
        "^__generated__(.*)$",
        "^api(.*)$",
        "~assets(.*)$",
        "~components(.*)$",
        "~firebase(.*)$",
        "~hooks(.*)$",
        "~navigation(.*)$",
        "~schema(.*)$",
        "~screens(.*)$",
        "~store(.*)$",
        "~styles(.*)$",
        "~layouts(.*)$",
        "~utils(.*)$",
        "^[./]"
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true
};
