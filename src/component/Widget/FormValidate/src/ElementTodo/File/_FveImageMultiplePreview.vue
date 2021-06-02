<template>
  <div v-bind:class="['file-image-preview fip', { 'has-error' : (formStatus === 'ERROR') }]">
    <div class="fip__img fip__img--empty" @click="$refs.file.click()">
      <svg width="44" height="38" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M39.7926 2.3916C39.7926 1.55023 39.1106 0.868164 38.2692 0.868164C37.4278 0.868164 36.7458 1.55023 36.7458 2.3916V4.87485H34.2292C33.3878 4.87485 32.7057 5.55691 32.7057 6.39828C32.7057 7.23966 33.3878 7.92172 34.2292 7.92172H36.7458V10.4054C36.7458 11.2468 37.4278 11.9289 38.2692 11.9289C39.1106 11.9289 39.7926 11.2468 39.7926 10.4054V7.92172H42.3126C43.154 7.92172 43.836 7.23966 43.836 6.39828C43.836 5.55691 43.154 4.87485 42.3126 4.87485H39.7926V2.3916Z" fill="#5C5C5C"/>
        <path d="M15.4304 5.70426C16.2937 4.79074 17.4951 4.27309 18.752 4.27309H29.5866C30.428 4.27309 31.11 3.59102 31.11 2.74965C31.11 1.90828 30.428 1.22621 29.5866 1.22621H18.752C16.6572 1.22621 14.6548 2.08896 13.2159 3.61149L12.0504 4.84475C11.1871 5.75827 9.98567 6.27591 8.72875 6.27591H7.78125C3.5744 6.27591 0.164062 9.68624 0.164062 13.8931V29.6637C0.164062 33.8706 3.57439 37.2809 7.78125 37.2809H36.2188C40.4256 37.2809 43.8359 33.8706 43.8359 29.6637V13.9575C43.8359 13.1162 43.1539 12.4341 42.3125 12.4341C41.4711 12.4341 40.7891 13.1162 40.7891 13.9575V29.6637C40.7891 32.1878 38.7429 34.234 36.2188 34.234H7.78125C5.25714 34.234 3.21094 32.1878 3.21094 29.6637V13.8931C3.21094 11.369 5.25713 9.32279 7.78125 9.32279H8.72875C10.8236 9.32279 12.826 8.46004 14.2649 6.93751L15.4304 5.70426Z" fill="#5C5C5C"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.8317 13.5724C18.2297 13.5724 15.3097 16.4924 15.3097 20.0945C15.3097 23.6965 18.2297 26.6166 21.8317 26.6166C25.4338 26.6166 28.3538 23.6965 28.3538 20.0945C28.3538 16.4924 25.4338 13.5724 21.8317 13.5724ZM18.3565 20.0945C18.3565 18.1752 19.9124 16.6193 21.8317 16.6193C23.7511 16.6193 25.307 18.1752 25.307 20.0945C25.307 22.0138 23.7511 23.5697 21.8317 23.5697C19.9124 23.5697 18.3565 22.0138 18.3565 20.0945Z" fill="#5C5C5C"/>
      </svg>
    </div>
    <template v-if="value && value.length">
      <div class="icon fip__img" v-for="(img, index) in value" :key="index" >
        <img :src="img.getSrc()" alt="" />
        <div class="remove-icon" @click="removeImage(index)">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.883 5.3125C11.883 5.3125 11.521 9.8025 11.311 11.6938C11.211 12.5972 10.653 13.1265 9.73903 13.1432C7.9997 13.1745 6.25836 13.1765 4.5197 13.1398C3.64036 13.1218 3.0917 12.5858 2.9937 11.6985C2.78236 9.7905 2.42236 5.3125 2.42236 5.3125" stroke="#CAF12E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.8053 3.15951H1.5" stroke="#CAF12E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.6269 3.15998C10.1036 3.15998 9.65289 2.78998 9.55022 2.27732L9.38822 1.46665C9.28822 1.09265 8.94956 0.833984 8.56356 0.833984H5.74156C5.35556 0.833984 5.01689 1.09265 4.91689 1.46665L4.75489 2.27732C4.65222 2.78998 4.20156 3.15998 3.67822 3.15998" stroke="#CAF12E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </template>
    <input multiple class="fip__input" type="file" :id="'file-'+name" ref="file" accept="image/*" @change="handleFileUpload()" />
  </div>
</template>

<script>

import FveMixinField from "@widgetFormValidate/src/Mixin/FveMixinField";

export default {
  mixins:[
    FveMixinField
  ],
  props: {
    value: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      imagePreviewDefault: require('@img/icon/photo-upload.svg'),
      // nameFix: 0
    };
  },
  methods: {
    addImage(data) {
      const _value = [...this.value, data];
      this.$emit('input', _value);
    },
    removeImage (index) {
      const _value = [...this.value];
      let item = _value.splice(index, 1);
      this.$emit('removeImage', item[0]);
      this.$emit('input', _value);
    },
    handleFileUpload() {
      const files = this.$refs.file.files;

      Object.keys(files).forEach(i => {
        const file = files[i];
        const reader = new FileReader();
        reader.onload = () => {
          this.addImage(new FileClass({
            src: reader.result,
            file: file,
          }));
          // this.nameFix++;
        };
        if(file){
          if ( /\.(jpe?g|png|gif)$/i.test( file.name ) ) {
            reader.readAsDataURL(file);
          }
        }
      });
    },

    prepareValue($event) {
      return  $event.target.value;
    },
    isEmpty(value) {
      return !value || !value.length;
    },
    validateFunction(value){
      return 'SUCCESS';
    },
  },
};
</script>

<style lang="scss" scoped>

.fip {
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
  margin-bottom: 16px;
  border-radius: 8px;
  transition: all .2s ease-in-out;
  overflow: hidden;
  &__img {
    position: relative;
    margin: 10px 10px;
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: 8px;
    cursor: pointer;
    &--empty {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #373737;
    }
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    .remove-icon {
      position: absolute;
      display: none;
      top: 10px;
      right: 10px;
      z-index: 1;
    }
    &:hover .remove-icon {
      display: block;
    }
    &:not(.fip__img--empty):hover:after {
      content: "";
      display: block;
      width: 100px;
      height: 100px;
      position: absolute;
      top: 0;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
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
