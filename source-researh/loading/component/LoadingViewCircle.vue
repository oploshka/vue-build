<template>
  <div class="loading-view-spinner">
    <transition name="spin">
      <div class="nb-spinner"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'LoadingViewCircle'
};
</script>

<style lang="scss" scoped>

.loading-view-spinner {
  /*background: #5CD182;*/

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.nb-spinner {
  width: 128px;
  height: 128px;
  margin: 0;
  background: transparent;
  border-top: 4px solid #f5ac1c;
  border-right: 4px solid transparent;
  border-radius: 50%;
  -webkit-animation: 1s spin linear infinite;
  animation: 1s spin linear infinite;
}

@keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

</style>
