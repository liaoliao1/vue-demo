<template>
  <div>
    <ul>
    <li v-for="(m) in messages" :key="m.id">
      <router-link :to="`/home/message/detail/${m.id}`">{{m.title}}</router-link>
    </li>
  </ul>
  <router-view></router-view>
  </div>
</template>

<script>
export default{
  data () {
    return {
      messages: []
    }
  },
  mounted () {
    setTimeout(() => {
      const messages = [
        {id: 1, title: 'mss1'},
        {id: 3, title: 'mss3'},
        {id: 5, title: 'mss5'}
      ]
      this.messages = messages
    }, 1000)
  }
}
</script>

<style scoped>

</style>
