<template>
  <div>
    <h1>App</h1>
    <img src="./assets/logo.png" alt="logo">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
  /* h1{
    color: red;
  } */
  img{
    width: 200px;
    height: 200px;
  }
</style>
