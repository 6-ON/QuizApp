
<script >
export default {
  name:'Home',
  data(){
    return {
      styles:['bg-green-400','bg-blue-400'],
      current_color :'bg-red-400'
    }
  },
  methods:{
    updateDiv(style){
        this.current_color=style
    },
    resetColor(){
      this.current_color = 'bg-red-400'
    },
  }
}
</script>

<template>

  <div @mouseover="resetColor" class="w-24 h-24" :class="current_color">
  </div>

  <div class="mt-6 flex gap-2">
    <div v-for="style in styles" :class="style" class="w-12 h-12 rounded-full" @mouseover="updateDiv(style)" ></div>

  </div>


</template>


