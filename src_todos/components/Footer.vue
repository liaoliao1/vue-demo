<template>
    <div class="todo-footer">
        <label >
            <input type="checkbox" v-model="checkAll">
        </label>
        <span>
            <span>已完成{{completedCount}}</span> / 全部{{todos.length}}
        </span>
        <button @click="deleteCheck" class="btn-danger" v-if="completedCount">清除已完成任务</button>
    </div>
</template>

<script>
export default{
  props: {
    todos: Array,
    selectAll: Function,
    deleteCheck: Function
  },
  computed: {
    completedCount () {
      return this.todos.reduce((pre, todo) => pre + (todo.complete ? 1 : 0), 0)
    },
    checkAll: {
      get () {
        return this.todos.length === this.completedCount && this.completedCount > 0
      },
      set (value) {
        this.selectAll(value)
      }
    }
  }
}
</script>

<style scoped>

</style>
