<template>
    <ul class="todo-main">
        <Item v-for="(todo, index) in todos" :key='todo.id'
          :deleteTodo="deleteTodo" :updateTodo="updateTodo" :todo="todo" :index="index"></Item>
    </ul>
</template>

<script>
import Item from './Item'
export default{
  // 声明接收标签属性：属性名
  // 接收到的数据都会成为当前组件对象的属性
  props: ['todos', 'deleteTodo', 'updateTodo'],
  components: {
    Item
  }
}
</script>

<style scoped>
.todo-main{
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
}
.todo-empty{
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
}
</style>
