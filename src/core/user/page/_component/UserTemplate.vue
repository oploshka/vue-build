<template>
  <div class="layout__container">
    <div class="layout__header">
      <img class="layout__logo" src="#" />
    </div>

    <div class="layout-center-block">
      <div class="lcb-container1">
        <div class="start-form-wrapper">
          <!--<img v-if="imgSrc" :src="imgSrc" alt="cover">-->
          <div>
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout-fullscreen',
  // props: {
  //   imgSrc: {
  //     type: String,
  //     required: true
  //   }
  // },
  components: {},
};
</script>

<style lang="scss" scoped>
.layout__container {
  background: #f7f9fb;
}
.layout__header {
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(28, 41, 61, 0.1);
  border-radius: 8px;
  width: 100%;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: center;
  // margin-top: 140px;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // height: 75px;
  // left: 50%;
  // transform: translate(-50%);
  // position: absolute;
}
.layout__logo {
  width: 160px;
}
.layout__subsystem {
  color: var(--color-primary);
  font-weight: 600;
  font-size: 36px;
  margin-bottom: 40px;
}

.layout-center-block {
  width: 100%;
  height: 100%;
  background-color: var(--color-background);
  padding: 15px;
}

.start-form-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 1050px;
  margin: auto;
  position: relative;
  top: -128px;
  max-height: 720px;
  height: 100%;
}

.start-form {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
}

.lcb-container1 {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 656px) {
  .layout-center-block {
    padding: 15px 70px;
  }
}

@media screen and (max-width: 500px) {
  .layout-center-block {
    padding: 15px 15px;
  }
}
</style>
