# Первая установка

1) npm i
2) в папке config -> preset.example.js переименовать в preset.js и отредактировать его как
```js
export default {
  public  : 'local',
  private : 'local',
};
```
3) в папке config preset находятся настройки для разных машин. в папку local/dev/prod скопировать private.example.js с именем private.js

4) в настройки phpStorm добавить webpack.alias.js (в раздел webpack)
npm run serve
