<template>
  <div class="todo-wrap">
    <Header :addTodo="addTodo"/>
    <List :todos="todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo"/>
    <Footer :todos="todos" :selectAll="selectAll" :deleteCheck="deleteCheck"/>
  </div>
</template>

<script>
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
export default{
  data () {
    return {
      todos: JSON.parse(localStorage.getItem('todos_key') || '[]')
    }
  },
  methods: {
    addTodo (todo) {
      this.todos.unshift(todo)
    },
    deleteTodo (index) {
      this.todos.splice(index, 1)
    },
    updateTodo (todo, complete) {
      todo.complete = complete
    },
    selectAll (isCheck) {
      this.todos.forEach(todo => { todo.complete = isCheck })
    },
    deleteCheck () {
      this.todos = this.todos.filter(todo => !todo.complete)
    }
  },
  watch: {
    todos: {
      deep: true,
      handler: function (value) {
        localStorage.setItem('todos_key', JSON.stringify(value))
      }
    }
  },
  components: {
    Header,
    List,
    Footer
  }
}
</script>

<style scoped>
.todo-wrap{
  width: 600px;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
