<template>
  <div :class="$parent.formElementBlockClass">
    <label :for="$parent.name" v-if="$parent.label" class="fve-label">{{ $parent.label }}<span v-if="$parent.required" class="fve-label-require">*</span></label>
    <div class="fve-field">
      <div class="fve-control">
        <!-- custom block start -->
        <slot />
        <!-- custom block end -->
      </div>
      <div v-if="$parent.formMessage" class="fve-message">{{$parent.formMessage}}</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

.fve {

  box-sizing: border-box;

  // base
  display     : block;
  margin      : 0 0 0 0;
  padding     : 0 0 0 0;
  color       : #2C3242;
  font-size   : 16px;
  line-height : 1.3;

  // label
  .fve-label {
    display     : inline-block;
    margin      : 0 0 0 3px;
    padding     : 0 0 0 0;
    color       : #757A8A;
    font-size   : 12px;
    line-height : inherit;
    transition: color 0.15s ease-in-out;
  }
  .fve-label-require {
    display: none;
  }
  &.fve-require .fve-label-require {
    display     : inline-block;
    margin      : 0 0 0 4px;
    padding     : 0 0 0 0;
    color       : #094E91;
    font-size   : 14px;
    line-height : inherit;
  }

  // field
  .fve-field {
    position: relative;
  }

  // TODO: допилить блок message (warning, error, success)
  // message
  .fve-message {
    position: absolute;
    right: 0;
    bottom: 100%;
    padding: 6px 8px;
    //color: #757A8A;
    font-size: 0.75em;
    //background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(10px);
    transition: all 0.25s ease-in-out;
    opacity: 0;
    visibility: hidden;

    background-color: #ffb3b3;
    color: #1c1c1c;
    &:after {
      content: "";
      position: absolute;
      right: 10px;
      top: 100%;
      border: 6px solid transparent;
      //border-top: 6px solid #ffffff;

      border-top: 6px solid #ffb3b3;
    }
  }
}
.fve.fve-require {
  // label
  .fve-label {
    color: #f5ac1c;
  }
}

.fve.fve-status__error {
  .fve-label {
    color: var(--fve-color-error);
  }
  .fve-message {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .fve-input,
  .fve-textarea,
  .fve-select {
    .fve-control {
      border-color: var(--fve-color-error);
    }
  }

  .fve-checkbox {
    .fve-checkbox-vue {
      border-color: var(--fve-color-error);
    }
  }
}


</style>
