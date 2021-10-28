<template>
  <div class="loading-bar" v-if="loading">
    <transition name="loading">
      <div class="loading-bar__line" :style="{ background: color }"></div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'loading-bar',
    props: {
      loading: Boolean,
      color: {
        type: String,
        default: '#D3D3D3',
      }
    }

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
    width: 0%;
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
