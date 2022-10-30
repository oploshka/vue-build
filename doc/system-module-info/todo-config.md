# Config

Описать как работать с конфигом


в папке config -> preset.example.js переименовать в preset.js и отредактировать его как
```js
export default {
  public  : 'local',
  private : 'local',
};
```

3) в папке config preset находятся настройки для разных машин. в папку local/dev/prod скопировать private.example.js с именем private.js
