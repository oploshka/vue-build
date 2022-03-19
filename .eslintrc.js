module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  globals: {
    "CONST": true,
    "ENUM": true,
    "VueApp": true,
    "RequestManager": true,
    "DateTime": true,
    "FileClass": true,
  },
  rules: {

    "semi": [ 2, "always" ],
    // 'no-multi-spaces': "off",
    "no-unused-vars": "off",

    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/test/jest/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
