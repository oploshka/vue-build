<template>
  <div class="task-list__item" :class="{completed: todoItem.getStatus()}">

    <div class="checkbox">
      <label :for="`task_${todoItem.getId()}`">
        <input
          :id="`task_${todoItem.getId()}`"
          type="checkbox"
          :value="todoItem.getStatus()"
          @change="$emit('onSetStatus', todoItem)"
        />
        <i class="checkbox__mark"></i>
        {{ todoItem.getTitle() }}
      </label>
    </div>
    <div class="actions">
      <button
        class="btn-edit"
        @click.prevent="$emit('onEdit', todoItem)"
        v-if="!todoItem.getStatus()"
      >
        Edit
      </button>
      <button class="btn-remove" @click.prevent="$emit('onRemove', todoItem)">
        Remove
      </button>
    </div>
  </div>
</template>

<script>

import TaskClass from "../_class/TaskClass"

export default {
  name: "TaskItem",
  props: {
    todoItem: {
      type: TaskClass,
    },
  },
  computed: {
  }
};
</script>