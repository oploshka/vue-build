<template>
  <div class="layout-center-block">
    <div class="lcb-container1">
      <div class="lcb-container2">
        <router-view/>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: 'layout-block-center',
};
</script>

<style lang="scss" scoped>
.layout-center-block {
  width: 100%;
  height: 100%;
  background: #e5e5e5;

  padding: 15px;
}

.lcb-container1 {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.lcb-container2{
  width: 100%;
  max-width: 435px;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  border-radius: 8px;
  padding: 52px;
  margin: auto;
}

@media screen and (max-width: 656px) {
  .layout-center-block{
    padding: 15px 70px;
  }
  .lcb-container2{
    padding: 57px 25px 50px;
  }
}
@media screen and (max-width: 500px) {
  .layout-center-block{
    padding: 15px 15px;
  }
  .lcb-container2{
    padding: 57px 25px 50px;
  }
}
</style>
