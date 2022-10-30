




# Имя компонента (name)
Имя компонента должно совпадать с именем файла компонента.
```js
export default {
  name: 'TodoItem'
  // ...
}
```

# Определение входных параметров
Входные параметры должны быть определены как можно более подробно.
```js
export default {
  props: {
    status: {
      type: String,
      required: true,
      // required - true не пишем default: '',
      // required - false обязательно пишем default: '',
      
      // validator - опционально
      validator: function (value) {
        return [
          'syncing',
          'synced',
          'version-conflict',
          'error'
        ].indexOf(value) !== -1
      }
    }
  }
}
```

// Ещё лучше!



# Данные компонента (data)
Свойство data компонента должно быть функцией.
При использовании свойства data в компоненте (т.е. везде, за исключением new Vue),
значением всегда должна быть функция, возвращающая объект.

```js
export default {
  data() {
    return {
      foo: 'bar'
    }
  }
}
```