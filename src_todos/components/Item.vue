<template>
    <li :style="{background: bgColor}" @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)">
        <label>
            <input type="checkbox" v-model="isCheck"/>
            <span>{{todo.title}}</span>
        </label>
        <button class="btn-danger" v-show="isShow" @click="deleteItem">删除</button>
    </li>
</template>

<script>
export default{
  data () {
    return {
      bgColor: 'white',
      isShow: false
    }
  },
  props: {
    todo: Object,
    deleteTodo: Function,
    index: Number,
    updateTodo: Function
  },
  methods: {
    handleEnter (isEnter) {
      if (isEnter) {
        this.bgColor = '#ccc'
        this.isShow = true
      } else {
        this.bgColor = 'white'
        this.isShow = false
      }
    },
    deleteItem () {
      if (confirm('确定删除')) {
        this.deleteTodo(this.index)
      }
    }
  },
  computed: {
    isCheck: {
      get () {
        return this.todo.complete
      },
      set (value) {
        this.updateTodo(this.todo, value)
      }
    }
  }
}
</script>

<style scoped>
li{
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}
li label{
    float: left;
    cursor: pointer;
}
li label li input{
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}
li button{
    float: right;
    margin-top: 3px;
}
</style>
