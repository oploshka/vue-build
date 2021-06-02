Планы:

- Сделать селекты, свитч и др компоненты..
- select mixin
      
      :option-list        или :options="$store.getters['page/getPageCollection']"
      :option-get-key     или :option-func-get-key
      :option-get-name    или :option-func-get-name
      :option-*

- свой выпадающий список (возможно стоит взять за основу v-autocomplete)

- отказ от
    "vue-suggestion": "^1.1.0",
    "vuetify": "^2.4.9"
  в пользу
    vue-multiselect
    v-calendar
  

Fix
- проверить работу компонента номер телефона 
  - не корректно readonly и disable
  - поля не синхронизируются....
  - html radio не работает readonly, disabled
    - поправить верстку, стили
  
