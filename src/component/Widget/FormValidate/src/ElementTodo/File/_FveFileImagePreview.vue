<template>
  <label v-bind:class="['file-image-preview fip', { 'has-error' : (formStatus === 'ERROR') }]">
    <template v-if="value && value.getSrc()">
      <div class="icon fip__img">
        <img :src="value.getSrc()" alt="" />
      </div>
    </template>
    <template v-else>
      <img svg-inline class="icon fip__icon" src="@img/icon/photo-upload.svg" alt="" />
      <!--
<svg width="70" height="57" viewBox="0 0 70 57" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M24.9073 2.47954C25.3323 2.02981 25.9238 1.77496 26.5426 1.77496H42.8968C43.5298 1.77496 44.1336 2.04165 44.5599 2.5096L50.4125 8.93307C51.1231 9.71299 52.1294 10.1575 53.1845 10.1575H65.7188C66.9614 10.1575 67.9688 11.1648 67.9688 12.4075V52.8179C67.9688 54.0606 66.9614 55.0679 65.7188 55.0679H4.28125C3.03861 55.0679 2.03125 54.0606 2.03125 52.8179V12.4075C2.03125 11.1648 3.03861 10.1575 4.28125 10.1575H16.0356C17.0669 10.1575 18.0527 9.73273 18.761 8.98318L24.9073 2.47954ZM26.5426 0.274963C25.5113 0.274963 24.5255 0.699701 23.8171 1.44926L17.6708 7.95289C17.2458 8.40263 16.6543 8.65747 16.0356 8.65747H4.28125C2.21018 8.65747 0.53125 10.3364 0.53125 12.4075V52.8179C0.53125 54.889 2.21018 56.5679 4.28125 56.5679H65.7188C67.7898 56.5679 69.4688 54.889 69.4688 52.8179V12.4075C69.4688 10.3364 67.7898 8.65747 65.7188 8.65747H53.1845C52.5514 8.65747 51.9477 8.39078 51.5213 7.92283L45.6687 1.49936C44.9581 0.719441 43.9519 0.274963 42.8968 0.274963H26.5426ZM27.173 29.8174C27.173 25.6489 30.5522 22.2696 34.7207 22.2696C38.8892 22.2696 42.2684 25.6489 42.2684 29.8174C42.2684 33.9859 38.8892 37.3651 34.7207 37.3651C30.5522 37.3651 27.173 33.9859 27.173 29.8174ZM34.7207 20.7696C29.7238 20.7696 25.673 24.8205 25.673 29.8174C25.673 34.8143 29.7238 38.8651 34.7207 38.8651C39.7176 38.8651 43.7684 34.8143 43.7684 29.8174C43.7684 24.8205 39.7176 20.7696 34.7207 20.7696Z" fill="#DEE4ED"/>
</svg>
      -->
    </template>
    <input class="fip__input" type="file" :id="'file-'+name" ref="file" accept="image/*" @change="handleFileUpload()"/>
  </label>

</template>

<script>

import FveMixinField from "@widgetFormValidate/src/Mixin/FveMixinField";

export default {
  mixins:[
    FveMixinField
  ],
  props: {
    value: {
      type: FileClass,
      default: () => { return new FileClass(); },
    },
  },
  data() {
    return {
      imagePreviewDefault: require('@img/icon/photo-upload.svg'),
    };
  },
  methods: {
    handleFileUpload() {
      const file = this.$refs.file.files[0];

      let reader  = new FileReader();
      reader.addEventListener("load", () => {
        this.$emit('input', new FileClass({
          src: reader.result,
          file: file,
        }));
      }, false);

      if( file ){
        if ( /\.(jpe?g|png|gif)$/i.test( file.name ) ) {
          reader.readAsDataURL( file );
        }
      }
    },
    rm(event) {
      this.$emit('input', new FileClass({
        src: '',
        file: {},
      }));
    },

    prepareValue($event) {
      return  $event.target.value;
    },
    isEmpty(value) {
      return !value || !value.getSrc();
    },
    validateFunction(value){
      return 'SUCCESS';
    },
  },
};
</script>

<style lang="scss" scoped>
.fip {
  position: relative;
  display: block;
  width: 100%;
  height: 178px;
  padding: 0;
  background-color: var(--fve-input--background);
  border-radius: 8px;
  transition: all .2s ease-in-out;
  overflow: hidden;
  cursor: pointer;
  &__img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  &__input {
    width: 100%;
    opacity: 0;
    position: absolute;
    z-index: -1;
  }
  &__icon {
    position: absolute;
    left: 50%;
    top: 50%;
    display: block;
    width: 68px;
    height: auto;
    transform: translate(-50%,-50%);
    opacity: 0.5;
    z-index: 1;
  }
  &.has-error {
    border: 1px solid #c82333;
  }
}
</style>
