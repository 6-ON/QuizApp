<script>
import axios from "axios";

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {

  },

  methods: {
    handleSubmit() {
      const loginPayload = {
        email: this.email,
        password: this.password
      }
      axios.post('http://localhost:8080/login',loginPayload)
          .then((res)=>{
            console.log()
          })
    }
  }
}
</script>

<template>
  <div class="main-wrapper">
    <div class="backdrop-blur rounded-xl p-6">
      <div class="flex justify-center" >
        <img class="w-16 h-16" src="" alt="later...">
      </div>
      <form action="" class="flex flex-col gap-2" @submit.prevent="handleSubmit">
        <input class="form-field" type="email" name="email" v-model="email" placeholder="email">
        <input class="form-field" type="password" name="password" v-model="password" placeholder="*****">
        <button class="submit-btn mt-16" type="submit">Login</button>
      </form>
    </div>
  </div>
</template>
<style scoped>
.main-wrapper {
  @apply h-screen w-screen flex items-center justify-center bg-cover bg-[url('https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]
}
.form-field{
  @apply rounded-2xl outline-none h-8 bg-blue-300 text-white text-center placeholder-blue-50
}
.submit-btn{
  @apply bg-blue-500 text-white py-2 rounded-3xl hover:bg-blue-50 hover:text-blue-500
}

</style>