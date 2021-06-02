<template>
  <div >
<!--     <AddBlock :label="label" @add="addItem"> -->
    <div class="remove-ell" v-for="(v, index) in value" :key="index">
      <TextFormElement
          name="hall"
          v-model="value[index]"
      />
      <button type="button" class="remove-ell__btn" @click="removeItem(index)" v-if="value.length > 1">
        <img svg-inline class="icon" src="@img/icon/minus.svg" />
      </button>
    </div>
<!--    </AddBlock>-->
  </div>

</template>

<script>
//  TODO AddBlock
export default {};
</script>

<style lang="scss" scoped>

</style>
