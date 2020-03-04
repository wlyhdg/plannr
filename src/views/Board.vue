<template>
  <div>
    <h1>Good morning Wael. Here's what you have planned.</h1>
    <div class="columns flex">
      <div
        class="task-section rounded"
        v-for="(column, columnIndex) of board.columns"
        :key="columnIndex"
        @drop="moveTask($event, column.tasks)"
        @dragover.prevent
        @dragenter.prevent
      >
        <div class="font-bold heading">
          {{ column.name }}
        </div>
        <div class="list-reset">
          <div
            class="task font-bold rounded"
            v-for="(task, taskIndex) of column.tasks"
            :key="taskIndex"
            draggable
            @dragstart="pickupTask($event, taskIndex, columnIndex)"
            @click="goToTask(task)"
          >
            <span>{{ task.name }}</span>
            <p class="small slim zm" v-if="task.description">
              {{ task.description }}
            </p>
          </div>
          <input
            type="text"
            placeholder="+ enter new task here..."
            @keyup.enter="submitTask($event, column.tasks)"
          />
        </div>
      </div>
    </div>
    <div v-if="isTaskOpen" class="task-background" @click.self="close">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["board"]),
    isTaskOpen() {
      return this.$route.name === "task";
    }
  },
  methods: {
    goToTask(task) {
      this.$router.push({ name: "task", params: { id: task.id } });
    },
    close() {
      this.$router.push({ name: "board" });
    },
    submitTask(e, scopedTasks) {
      this.$store.commit("CREATE_TASK", {
        tasks: scopedTasks,
        name: e.target.value
      });
      e.target.value = "";
    },
    pickupTask(e, taskIndex, fromColumnIndex) {
      // e.dataTransfer.effectAllowed = "move";
      // e.dataTransfer.dropEffect = "move";

      e.dataTransfer.setData("task-index", taskIndex);
      e.dataTransfer.setData("from-column-index", fromColumnIndex);
    },
    moveTask(e, toTasks) {
      const fromColumnIndex = e.dataTransfer.getData("from-column-index");
      const taskIndex = e.dataTransfer.getData("task-index");
      const fromTasks = this.board.columns[fromColumnIndex].tasks;

      this.$store.commit("MOVE_TASK", {
        fromTasks,
        toTasks,
        taskIndex
      });
    }
  }
};
</script>

<style>
.task-section {
  width: 100%;
  background-color: lightgray;
  margin: 30px 20px;
  padding: 15px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.task {
  margin: 10px 0;
  background-color: white;
  padding: 7px;
}

.task-background {
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.columns {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
