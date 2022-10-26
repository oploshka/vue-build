<template>
  <div class="loading-bar">
    <transition name="loading">
      <div class="loading-bar__line" :style="{ background: '#D3D3D3' }"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'LoadingView'
};
</script>

<style lang="scss" scoped>
@keyframes loading {
  from {
    width: 0;
    left: 0;
  }

  50% {
    width: 100%;
    left: 0;
  }

  to {
    width: 0;
    left: 100%;
  }
}

.loading-bar {
  width: 100%;
  position: absolute;
  z-index: 3100;

  &__line {
    position: relative;
    height: 4px;
    // background: #D3D3D3;
    animation: loading 2s infinite ease-in-out;
  }
}
</style>
