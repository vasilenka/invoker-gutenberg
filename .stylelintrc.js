module.exports = {
  extends: "stylelint-config-standard",
  rules: {
    "no-empty-source": null,
    "string-quotes": "double",
    "color-hex-length": "long",
    "declaration-empty-line-before": "never",
    "rule-empty-line-before": "never",
    "at-rule-empty-line-before": null,
    "block-closing-brace-newline-after": "never-multi-line",
    "no-descending-specificity": false,
    indentation: [2],
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "extend",
          "at-root",
          "debug",
          "warn",
          "error",
          "if",
          "else",
          "for",
          "each",
          "while",
          "mixin",
          "include",
          "content",
          "return",
          "function",
          "tailwind",
          "apply",
          "responsive",
          "variants",
          "screen"
        ]
      }
    ]
  }
};
