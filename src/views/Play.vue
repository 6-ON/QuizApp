<script>
import Login from "@/views/Login.vue";
export default {
  name :'Play',
  components: {Login},
  methods : {
    handleLogin(payload){
      console.log('payload')
      console.log(payload)
    }
  }
}
</script>
<template>
    <Login @login-submitted="handleLogin"></Login>
</template>
