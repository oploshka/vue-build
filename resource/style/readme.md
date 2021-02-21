# Храним стили.

- base = вспомогательные
    - variable.scss     = scss переменные
    - mixins.scss       = scss миксины
    - root.scss         = css variable


# Папка src/normalize
Устанавливает значения по умолчанию для html элементов.

- reset
```
дефолтное поведение всем элементам
http://meyerweb.com/eric/tools/css/reset/
```
- normalize-box-sizing
```
Используем box-sizing - border-box
```
- normalize
```
сбросили поведение во всех браузерах к единому виду
https://necolas.github.io/normalize.css/latest/normalize.css
```
- custom-fix
```
Исправляем эффекты outline и другие неучтенные вещи
```
- grid
```
Подключаем гридку от бутстрапа
```

# Папка src/visual
## base.scss
Задаем базовые настройки html элементам

## reduction.scss
Сокращения для каких либо стилей

# Папка src/theme

В идеале такие вещи должны уходить в компонент, но не все идеально.

При создании таких стилей обязательно:
- использовать префикс .th-[имя компонента]
- использовать философию BEM по именованию классов
