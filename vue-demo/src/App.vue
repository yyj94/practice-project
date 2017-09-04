<template>
  <div id="app">
    <div class="nav-list">
      <router-link class="nav-item" to="/">首页</router-link>
      <router-link class="nav-item" to="/content">内容页</router-link>
      <router-link class="nav-item" to="/user">用户中心</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import "./style/scss/style.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin: 0 0;
}
</style>
