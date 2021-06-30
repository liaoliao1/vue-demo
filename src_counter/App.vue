<template>
  <div>
    <div>click {{count}} times, count is {{type}}</div>
    <button @click="add">+</button>
    <button @click="decrement">-</button>
    <button @click="addIfOdd">increment if odd</button>
    <button @click="addAsync">increment async</button>
  </div>
</template>

<script>
export default{
  data () {
    return {
      count: 0
    }
  },
  computed: {
    type () {
      return this.count % 2 === 1 ? '奇数' : '偶数'
    }
  },
  methods: {
    add () {
      this.count++
    },
    decrement () {
      this.count--
    },
    addIfOdd () {
      if (this.count % 2 === 1) {
        this.count++
      }
    },
    addAsync () {
      setTimeout(() => {
        this.count++
      }, 1000)
    }
  }
}
</script>

<style scoped>

</style>
