<template>
  <div class="loading-view-spinner2">
    <svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="259px" height="34px" viewBox="0 0 457 60" xml:space="preserve">
      <g>
        <circle fill="#a8def4" cx="-31" cy="30" r="30"/>
        <circle fill="#b9e4f6" cx="-97" cy="30" r="24"/>
        <circle fill="#caebf8" cx="-163" cy="30" r="19"/>
        <circle fill="#ecf8fd" cx="-229.5" cy="30.5" r="13.5"/>
        <circle fill="#f5fbfe" cx="-295" cy="31" r="11"/>
        <animateTransform attributeName="transform" type="translate" values="61 0;127 0;193 0;259 0;325 0;391 0;457 0;523 0;589 0;655 0;721 0;787 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;" calcMode="discrete" dur="1440ms" repeatCount="indefinite"/>
      </g>
      <g>
        <circle fill="#a8def4" cx="488" cy="30" r="30"/>
        <circle fill="#b9e4f6" cx="554" cy="30" r="24"/>
        <circle fill="#caebf8" cx="620" cy="30" r="19"/>
        <circle fill="#ecf8fd" cx="686.5" cy="30.5" r="13.5"/>
        <circle fill="#f5fbfe" cx="753" cy="31" r="11"/>
        <animateTransform attributeName="transform" type="translate" values="0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;-61 0;-127 0;-193 0;-259 0;-325 0;-391 0;-457 0;-523 0;-589 0;-655 0;-721 0;-787 0;" calcMode="discrete" dur="1440ms" repeatCount="indefinite"/>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'LoadingView'
};
</script>

<style lang="scss" scoped>

.loading-view-spinner2 {
  /*background: #5CD182;*/

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

</style>
