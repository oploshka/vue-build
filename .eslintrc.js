module.exports = {
  root: true,
  env: {
    node: true,
    // 'vue/setup-compiler-macros': true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:oploshka/recommended',
    'plugin:oploshka/overrides-test-jest',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    //
    // '@typescript-eslint/no-empty-function': 'off',
    // '@typescript-eslint/ban-ts-comment': 'off',
    //
    'vue/multi-word-component-names': 'off',
    //
    'import/first': 'off',
  },
  globals: {
    USER: true,
    CONST: true,
    ENUM: true,
    VueApp: true,
    RequestManager: true,
    DateTime: true,
    FileClass: true,
  },
};
