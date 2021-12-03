<template>
  <div id="todoApp">

      <div class="wrapper">
        <TaskForm
          @onSubmit="submitTodoForm"
          :taskTitle="targetTask && targetTask.getTitle()"
          :buttonTitle="taskFormBtnTitle"
        />
      </div>

    <div class="wrapper column">
      <div class="tasks-wrapper">

        <div class="task-filters">
          <button
            class="btn-filter"
            v-for="filter in filters"
            :key="filter.name"
            @click.prevent="activeFilter = filter.value"
            :class="{ active: activeFilter === filter.value }"
          >
            {{ filter.name }}
          </button>
        </div>

        <TaskList
          v-if="activeFilter === 0 || activeFilter === 1"
          :taskList="activeList"
          :title="'Active'"
          @onEdit="onTaskEdit"
          @onRemove="removeTask"
          @onSetStatus="setTaskStatus"
        />

        <TaskList
          v-if="activeFilter === 0 || activeFilter === 2"
          :taskList="completedList"
          :title="'Completed'"
          @onRemove="removeTask"
          @onSetStatus="setTaskStatus"
        />
      </div>
    </div>
  </div>
</template>

<script>

import TaskClass from "./_class/TaskClass"

import TaskForm from "./_component/TaskForm.vue";
import TaskList from "./_component/TaskList.vue";

export default {
  name: "App",
  components: {
    TaskForm,
    TaskList,
  },
  computed: {
    completedList() {
      return this.taskList.filter((task) => task.getStatus() === true) || []
    },
    activeList() {
      return this.taskList.filter((task) => task.getStatus() === false) || []
    },
    taskFormBtnTitle() {
      return this.targetTask instanceof TaskClass ? 'Save new task' : 'Add new task'
    }
  },
  data() {
    return {
      activeFilter: 0,
      filters: [
        { name: "All", value: 0 },
        { name: "Active", value: 1 },
        { name: "Completed", value: 2 }
      ],
      taskList: [],
      targetTask: null
    };
  },
  methods: {
    submitTodoForm($eventTitle) {
      if (!this.targetTask) {

        const task = new TaskClass({
          id: Date.now(),
          title: $eventTitle,
          completed: false
        })

        this.taskList.push(task)

      } else {
        const index = this.taskList.findIndex((item) => {
          return item.getId() === this.targetTask.getId();
        });
        if (index === -1) {
          console.error('Empty list');
          return 
        }
        
        this.targetTask.setTitle($eventTitle);
        this.targetTask = null;
      }
    },

    onTaskEdit($event) {
      this.targetTask = $event;
    },

    removeTask($event) {
      const index = this.taskList.findIndex((item) => {
        return item.getId() === $event.getId();
      });
      if (index === -1) {
        console.error('Empty list');
        return 
      }

      this.taskList.splice(index, 1);
    },

    setTaskStatus($event) {
      const index = this.taskList.findIndex((item) => {
        return item.getId() === $event.getId();
      });
      if (index === -1) {
        console.error('Empty list');
        return 
      }

      this.taskList[index].setStatus(!this.taskList[index].getStatus())

    },
  },
};
</script>

<style scoped>
@import './_assets/style.css';
</style>