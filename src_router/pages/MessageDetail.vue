<template>
  <ul>
    <li>id: {{$route.params.id}}</li>
    <li>title: {{messageDetail.title}}</li>
    <li>content: {{messageDetail.content}}</li>
  </ul>
</template>

<script>
const messageDetails = [
  {id: 1, title: 'msg1', content: 'content1'},
  {id: 3, title: 'msg3', content: 'content3'},
  {id: 5, title: 'msg5', content: 'content5'}
]
export default{
  data () {
    return {
      messageDetail: {}
    }
  },
  mounted () {
    setTimeout(() => {
      const id = this.$route.params.id * 1
      const detail = messageDetails.find(detail => detail.id === id)
      this.messageDetail = detail
    }, 1000)
  },
  watch: {
    $route (value) {
      setTimeout(() => {
        const id = value.params.id * 1
        const detail = messageDetails.find(detail => detail.id === id)
        this.messageDetail = detail
      }, 1000)
    }
  }
}
</script>

<style scoped>

</style>
