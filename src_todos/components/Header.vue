<template>
    <div class="todo-header">
        <input @keyup.enter="add" v-model="title" type="text" placeholder="请输入任务名称，按回车键确认">
    </div>
</template>

<script>
export default{
  data () {
    return {
      title: ''
    }
  },
  props: {
    addTodo: {
      type: Function,
      required: true
    }
    // todos: Array
  },
  methods: {
    add () {
      const title = this.title.trim()
      if (!title) {
        alert('请先输入')
        return
      }
      const todo = {
        id: Date.now(),
        complete: false,
        title
      }
      // this.todos.unshift(todo)
      this.addTodo(todo)
      this.title = ''
    }
  }
}
</script>

<style scoped>
.todo-header input{
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
}
.todo-header input:focus{
    outline: none;
    border-color: aqua;
    box-shadow: inset 0 1px 1px black blue;
}
</style>
