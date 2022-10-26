### Важно
Не нужно класть компоненты в корень папки.
Так же компоненты не должны обладать логикой!
Компоненты это глупые создания которые отображают содержимое
(за исключением некоторых виджетов - к примеру виджет погоды)

### Структура папки components:
- Module
- Page
- Part
- UI
- Widget


#### Module
Разбивка компонентов по папкам для отображения одинаковых сущностей.
Те. компоненты newsFullView, newsMinView, newsEdit кладем в папку News

#### Page
Бывают ситуации, когда компонент принадлежит только одной страницы (главная, about, contact).
В таких ситуациях используется эта папка (не забываем создавать под папки Home, About, Contact ).
Так же возможны ситуации когда вы не знаете куда относиться данный компонент...
Тогда создаем папку с названием страницы и помещаем туда все то что не понятно.
В идеале данная папка должна содержать минимум и по мере появления ясности рефакториться.


#### Part
Готовые статические компоненты (части страницы которые), которые не связаны с контентом
- могут иметь поведение

Примеры:
- header
- footer
- menu
- хлебные крошки


#### UI
Пагинация, строки поиска

#### Widget
Готовые вспомогательные компоненты, которые могут понадобиться на разных страницах.
погода, , ...

Примеры:
- блоки с настройками
- переключатели языка
- погода
- сторонние чаты
- loadibg bar
- слайдеры