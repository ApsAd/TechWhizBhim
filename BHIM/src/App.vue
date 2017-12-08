<template>
  <div>
    <router-view>
      <appLogin></appLogin>
    </router-view>
  </div>
</template>

<script>
 import Login from './components/Login.vue'
 export default{
components:{
appLogin:Login
}
}
</script>

<style>
</style>