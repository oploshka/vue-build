<template>
  <form @submit.prevent="onSubmit" class="form">
    <input type="text" v-model="title" ref="taskFormInput" />
    <button class="btn btn-add">{{ buttonTitle }}</button>
  </form>
</template>

<script>
const MAX_LENGTH = 50;

export default {
  name: "TaskForm",
  props: {
    taskTitle: {
      type: String,
    },
    buttonTitle: {
      type: String,
      default: "Add new task",
    },
  },
  watch: {
    taskTitle(val) {
      if (val) {
        this.title = val;
        this.$refs.taskFormInput.focus();
      }
    },
  },
  data() {
    return {
      title: this.taskTitle || "",
    };
  },
  methods: {
    onSubmit() {
      if (this.title.length > MAX_LENGTH) {
        alert("Max length str error");
        return;
      }
      this.$emit("onSubmit", this.title);
      this.title = "";
      this.$refs.taskFormInput.blur();
    },
  },
};
</script>

<style scoped>
</style>