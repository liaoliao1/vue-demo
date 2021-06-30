<template>
  <div>
    <h1 v-if="firstView">请输入关键字进行搜索</h1>
    <h1 v-else-if="loading">请求中...</h1>
    <h1 v-else-if="errorMsg">{{errorMsg}}</h1>
    <div class="row" v-else-if="users.length>0">
      <div class="card" v-for="(user) in users" :key="user.username">
        <a :href="user.url">
          <img :src="user.avatar_url" style="width:100px">
        </a>
        <p class="card-text">{{user.username}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  data () {
    return {
      firstView: true,
      loading: false,
      users: [],
      errorMsg: ''
    }
  },
  mounted () {
    this.$bus.$on('search', async (searchName) => {
      this.firstView = false
      this.loading = true
      const url = `https://api.github.com/search/users?q=${searchName}`
      try {
        const res = await this.$axios(url)
        const users = res.data.items.map(item => ({
          username: item.login,
          url: item.html_url,
          avatar_url: item.avatar_url
        }))
        this.loading = false
        this.users = users
      } catch (error) {
        this.loading = false
        this.errorMsg = error.message
      }
    })
  }
}
</script>

<style scoped>
.card{
  float: left;
  width: 33.33%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}
.card > img{
  margin-bottom: 0.75rem;
  border-radius: 100px;
}
.card-text{
  font-size: 85%;
}
</style>
