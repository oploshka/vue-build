
@layout/index.vue добавить
```js

    mounted() {
      // магическая штука для отключения лоадинга
      document.onreadystatechange = () => {
        if (document.readyState == "complete") {
          document.body.className = document.body.className.replace("loading","");
        }
      };
    },
```

@/public/index.html заменить ./index-loading.html