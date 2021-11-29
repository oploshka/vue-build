<template>
  <div class="task-list">
    <div class="task-list__header">
      <h2 class="task-list__title">{{ title }}</h2>
      <span class="task-list__counter">{{ taskListLength }}</span>
    </div>

    <ul class="task-list__body">
      <template v-if="taskList.length">
        <TaskItem
          v-for="taskItem in taskList"
          :key="taskItem.id"
          :todoItem="taskItem"
          @onSetStatus="$emit('onSetStatus', $event)"
          @onEdit="$emit('onEdit', $event)"
          @onRemove="$emit('onRemove', $event)"
        />
      </template>
      <template v-else>
        <p>List is empty</p>
      </template>
    </ul>
  </div>
</template>

<script>
import TaskItem from "./TaskItem.vue";

export default {
  name: "TaskList",
  props: {
    title: {
      type: String,
      required: true,
    },
    taskList: {
      type: Array,
      required: true,
    },
  },
  components: {
    TaskItem,
  },
  computed: {
    taskListLength() {
      return this.taskList.length;
    },
  },
};
</script>
