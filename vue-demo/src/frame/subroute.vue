<template>
  <div>
    <div>
      <ul>
        <li><router-link :to="{name:'userdefault'}">用户中心默认</router-link></li>
        <li><router-link :to="{name:'userinfo'}">用户中心详情</router-link></li>
        <li><router-link :to="{name:'userlast'}">用户中心设置</router-link></li>
      </ul>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>
