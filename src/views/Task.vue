<template>
  <div class="task-view rounded">
    <div class="modal-card flex">
      <input
        v-model="task.name"
        class="heading font-bold"
        @change="updateTaskProperty($event, 'name')"
      />
      <div>
        <p class="field-title zm zp">description</p>
        <textarea
          v-model="task.description"
          @change="updateTaskProperty($event, 'description')"
        >
        </textarea>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getTask"]),
    task() {
      return this.getTask(this.$route.params.id);
    }
  },
  methods: {
    updateTaskProperty(e, name) {
      this.$store.commit("UPDATE_TASK", {
        task: this.task,
        key: name,
        value: e.target.value
      });
    }
  }
};
</script>

<style lang="less">
textarea {
  margin: 3px 10px;
  width: 50%;
  border-radius: 15px;
  padding: 10px;
  align-self: center;
}
.task-view {
  position: relative;
  margin: 0 auto;
  width: 50%;
  height: auto;
  top: 15%;
  background-color: white;
}
.modal-card {
  justify-content: center;
  flex-direction: column;
  overflow-x: scroll;
  word-wrap: word-break;
  input {
    width: 50%;
    margin: 15px auto;
    font-size: 1.5rem;
    text-align: center;
  }
}
</style>
