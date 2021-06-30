<template>
  <div>
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'hello world 组件'
    }
  }
}
</script>

<style scoped >
  h1{
    color: red;
  }
</style>
