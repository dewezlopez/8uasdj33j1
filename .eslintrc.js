module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  env: {
    browser: true,
  },
  rules: {
    'import/no-extraneous-dependencies': 0,
    'no-useless-escape': 0,
    'no-unused-vars': 0,

    /**
     * @description rules of eslint official
     */
    /**
     * @bug https://github.com/benmosher/eslint-plugin-import/issues/1282
     * "import/named" temporary disable.
     */
    'import/named': 'off',
    /**
     * @bug?
     * "import/export" temporary disable.
     */
    'import/export': 'off',
    'import/prefer-default-export': 'off', // Allow single Named-export
    'no-unused-expressions': [
      'warn',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ], // https://eslint.org/docs/rules/no-unused-expressions

    /**
     * @description rules of eslint-plugin-react-hooks
     */
    /**
     * @description rules of eslint-plugin-prettier
     */
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: true,
        trailingComma: 'es5',
        endOfLine: 'auto',
      },
    ],
    'import/no-named-as-default': 0,
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/no-autofocus': 'off',
  },
};
