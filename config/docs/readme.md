preset.example.js скопировать в preset.js

в папке preset создать для используемого пресета файл private.js
в файл поместимть код 
```js
module.exports = function () {
  return {
    SECURITY: '12345678'
  }
}
```

Что помещать в private.js файл?
В данный файл помещаются настройки которые привязаны к домену и не могут быть использованы в рамках другого домена.
По факту данные настройки нужны больше для бека (пока он отсутствует).
В итоге - здесь храним ключи для гугл карт, интеркома и яндекса.
