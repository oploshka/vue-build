<template>
  <label v-bind:class="['file-image-preview fip', { 'has-error' : (formStatus === 'ERROR') }]">
    <div class="fip__img">
      <img svg-inline class="icon fip__prew" :src="imagePreviewDefault" />
    </div>
    <input class="fip__input" type="file" :id="'file-'+name" ref="file" accept="*" @change="handleFileUpload()"/> <!-- TODO: fix accept -->
    <template v-if="!value.getFile().name">
      <img svg-inline class="icon fip__icon fip__icon--add" src="@img/icon/plus.svg" />
    </template>
    <template v-else>
      <img svg-inline class="icon fip__icon fip__icon--edit" src="@img/icon/edit-solid.svg" />
    </template>
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
      default: () => new FileClass(),
    },
  },
  data() {
    return {
      imagePreviewDefault: require('@img/icon/doc.svg'),
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
        reader.readAsDataURL( file );
      }
    },

    prepareValue($event) {
      return  $event.target.value;
    },
    isEmpty(value) {
      return !value || !value.getFile().name;
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
  width: 75px;
  height: 75px;
  margin: 0;
  padding: 0;
  display: block;
  cursor: pointer;
  &__img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75px;
    height: 75px;
    border-radius: 14px;
    background-color: #E4E6EB;
  }
  &__prew {
    width: 32px;
    height: auto;
  }
  &__input {
    width: 100%;
    opacity: 0;
    position: absolute;
    z-index: -1;
  }
  &__icon {
    position: absolute;
    bottom: -7px;
    right: -7px;
    width: 24px;
    height: 24px;
    display: block;
    border-radius: 50%;
    &--add {
      background: $color-prime;
      object-fit: cover;
      padding: 5px;
    }
    &--edit {
      background: $color-prime;
      object-fit: cover;
      padding: 5px;
    }
  }
  &.has-error {
    .fip__img {
      border: 1px solid $color-error;
    }
  }
}
</style>
