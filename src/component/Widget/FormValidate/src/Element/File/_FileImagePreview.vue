<template>
  <label v-bind:class="['file-image-preview fip', { 'has-error' : (formStatus === 'ERROR') }]">
    <img svg-inline class="icon fip__img" :src="value.getSrc() || imagePreviewDefault" />
    <input class="fip__input" type="file" :id="'file-'+name" ref="file" accept="image/*" @change="handleFileUpload()"/>

    <template v-if="!value.getSrc()">
      <div class="fip__icon-block">
        <img svg-inline class="icon fip__icon fip__icon--add" src="@img/icon/plus.svg" />
      </div>
    </template>
    <template v-else>
      <div class="fip__icon-block">
        <img svg-inline class="icon fip__icon fip__icon--edit" src="@img/icon/edit-solid.svg" />
        <img svg-inline class="icon fip__icon fip__icon--rm" @click.prevent.stop="rm($event.target)" src="@img/icon/close.svg" />
      </div>
    </template>
  </label>

</template>

<script>

import FveFieldMixin from "@widgetFormValidate/src/Mixin/FveFieldMixin";

export default {
  mixins:[
    FveFieldMixin
  ],
  props: {
    value: {
      type: FileClass,
      default: () => new FileClass(),
    },
  },
  data() {
    return {
      imagePreviewDefault: require('@img/icon/upload-img.svg'),
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
  width: 75px;
  height: 75px;
  padding: 0;
  display: block;
  cursor: pointer;
  &__img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: block;
    border-radius: 14px;
  }
  &__input {
    width: 100%;
    opacity: 0;
    position: absolute;
    z-index: -1;
  }
  &__icon-block {
    position: absolute;
    bottom: -7px;
    right: -7px;
    display: flex;
  }
  &__icon {
    width: 24px;
    height: 24px;
    display: block;
    border-radius: 50%;

    &:not(:first-child) {
      margin-left: 5px;
    }
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
    &--rm {
      background: $color-error;
      object-fit: cover;
      padding: 5px;
      path {
        fill: #FFFFFF;
      }
    }
  }
  &--round {
    .fip__img {
      border-radius: 50%;
    }
    .fip__icon {
      bottom: -4px;
      right: 8px;
      width: 30px;
      height: 30px;
      padding: 8px;
    }
  }
  &.has-error {
    .fip__img {
      border: 1px solid $color-error;
    }
  }
  // &:hover {
  //   .fip__img {
  //     box-shadow: 0 0 5px 1px rgba(0, 0, 0, .3);
  //   }
  // }
}
</style>
