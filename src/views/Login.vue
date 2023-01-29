<script>
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
      this.$emit('login-submitted',loginPayload)
    }
  }
}
</script>

<template>
  <div class="main-wrapper">
    <div class="backdrop-blur rounded-xl p-6">
      <div>
        <img src="" alt="later...">
      </div>
      <form action="" class="flex flex-col gap-2" @submit.prevent="handleSubmit">
        <input type="email" name="email" v-model="email">
        <input type="password" name="password" v-model="password">
        <button class="bg-amber-500 text-white py-2 rounded-3xl" type="submit">Login</button>
      </form>
    </div>
  </div>
</template>
<style scoped>
.main-wrapper {
  @apply h-screen w-screen flex items-center justify-center bg-cover bg-[url('https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]
}


</style>