
<script >
export default {
  name:'Home',
  data(){
    return {
      styles:[{name:'red',color:'bg-red-400'},{name:'green',color:'bg-green-400'},{name:'blue',color:'bg-blue-400'}],
      current_color :0
    }
  },
  methods:{
    updateDiv(index){
        this.current_color = index
    },
    resetColor(){
      this.current_color = 0
    },
  },
  computed:{
    color(){
      return this.styles[this.current_color]
    }
  }
}
</script>

<template>

  <div class="w-24 h-24" :class="color.color">
  </div>
  <p>{{color.name}}</p>
  <div class="mt-6 flex gap-2">
    <div v-for="(style,index) in styles" :class="style.color" class="w-12 h-12 rounded-full" @mouseover="updateDiv(index)" ></div>

  </div>


</template>


