<template>
  <div class="row">
    <div class="col-xs-2 col-xs-offset-2">
      <div class="list-group">
        <router-link to="/about" class="list-group-item">About</router-link>
        <router-link to="/home" class="list-group-item">Home</router-link>
      </div>
    </div>

    <div class="col-xs-6">
      <div class="panel">
        <div class="panel-body">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{

}
</script>

<style scoped>

</style>
