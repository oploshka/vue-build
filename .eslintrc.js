module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "extends": [
    "plugin:vue/essential",
    "eslint:recommended",
    // '@vue/airbnb', - слишком требовательный
  ],
  "rules": {
    "semi": [ 2, "always" ],
    // 'no-multi-spaces': "off",
    "no-unused-vars": "off",
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // "import/extensions": [
    //   "error",
    //   "ignorePackages",
    //   {
    //     "vue": "never",
    //     "js": "never",
    //     "jsx": "never",
    //     "ts": "never",
    //     "tsx": "never"
    //   }
    // ]
  },
  "parserOptions": {
    "parser": "babel-eslint"
  },
  "globals": {
    "CONST": true,
    "ENUM": true,
    "VueApp": true,
    "RequestManager": true,
    "DateTime": true,
    "FileClass": true
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/test/jest/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
