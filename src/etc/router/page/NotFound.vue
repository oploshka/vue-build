<template>
  <div class="page-not-found">
    <div style="text-align: center;">
      <h1>404</h1>
      <p>Страница не найдена</p>
      <router-link to="/" class="link">Перейти на главную?</router-link>
    </div>
  </div>
</template>

<script>

export default {

};

</script>

<style lang="scss" scoped>
.page-not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.link {
  font-size: 14px;
  line-height: 18px;
  -webkit-text-decoration-line: underline;
  text-decoration-line: underline;
  color: #F5AC1C;
}
</style>
