<template>
  <FveSwitchTemplate theme="checkbox">
    <span class="fve-switch__element"><span v-if="selected" class="fve-switch__element-active"></span></span>
    <span class="fve-switch__label">{{label}}</span>
  </FveSwitchTemplate>
</template>

<script>

import FveSwitchMixin from '@widgetFormValidate/src/Mixin/FveSwitchMixin';

export default {
  mixins: [
    FveSwitchMixin
  ]
};
</script>

<style lang="scss" scoped>
$color: #409eff;
$active-padding: 2px;
.fve-switch__element{
  display: inline-block;
  vertical-align: middle;

  height: 18px;
  width: 18px;
  border: 2px solid $color;
  //border-radius: 100%;

  position: relative;
  .fve-switch__element-active{
    position: absolute;
    top: $active-padding;
    bottom: $active-padding;
    left: $active-padding;
    right: $active-padding;
    background: $color;
    //border-radius: 100%;
  }
}
.fve-switch__label{
  display: inline-block;
  vertical-align: middle;
  margin-left: 10px;
}
</style>
