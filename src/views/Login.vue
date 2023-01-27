<script>
export default {
  name: 'Login',
  data() {
    return {
      logo:'Quiz',
      inputs: ['email', 'password']
    }
  },
  computed :{
    alogo(){
      return this.logo + ' ' + 'App'
    }
  }
}
</script>

<template>
  <div class="main-wrapper">
    <div class="backdrop-blur rounded-xl p-6">
      <div>
        {{ alogo }}
      </div>
      <form action="" class="flex flex-col gap-2">
        <input v-for="input in inputs" :type="input" name="" id="">
      </form>
    </div>
  </div>
</template>
<style scoped>
.main-wrapper {
  @apply h-screen w-screen flex items-center justify-center bg-cover bg-[url('https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]
}


</style>