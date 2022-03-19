<template>
  <div class="layout-center-block">
    <div class="lcb-container1">

      <div class="start-form-wrapper">
        <img :src="imgSrc" alt="cover">
        <div class="lcb-container2 start-form">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'layout-fullscreen',
  props: {
    imgSrc: {
      type: String,
      required: true
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.layout-center-block {
  width: 100%;
  height: 100%;
  background-color: var(--color-background);
  padding: 15px;
}

.start-form-wrapper {
  width: 1050px;
  margin: auto;
  position: relative;
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

.lcb-container2 {
  width: 100%;
  max-width: 435px;
  background: #ffffff;
  box-shadow: 0px 12px 16px rgba(6, 18, 55, 0.06), 6px 20px 36px rgba(6, 18, 55, 0.02);
  border-radius: 8px;
  padding: 52px;
  margin: auto;
}

@media screen and (max-width: 656px) {
  .layout-center-block {
    padding: 15px 70px;
  }
  .lcb-container2 {
    padding: 57px 25px 50px;
  }
}

@media screen and (max-width: 500px) {
  .layout-center-block {
    padding: 15px 15px;
  }
  .lcb-container2 {
    padding: 57px 25px 50px;
  }
}
</style>
