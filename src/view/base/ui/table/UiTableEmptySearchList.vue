<template>
  <div class="empty-search-content">
    <div class="empty-search-content__title">Поиск не дал результатов</div>
  </div>
</template>

<script>
export default {
  name: 'UiTableEmptySearchList',
};
</script>

<style lang="scss" scoped>
.empty-search-content {
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;  
  padding: 40px 0;
  .empty-search-content__title {
    font-size: 20px;
    font-weight: 500;
    color: #A4B0B5;
  }
}
</style>