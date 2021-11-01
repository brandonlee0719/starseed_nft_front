<template>
  <div id="app">
    <Headerr/>
    
    <router-view/>
  </div>
</template>




<script>

import axios from 'axios'
import Headerr from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Headerr
  },
  data(){
    return{
      
    }
  },
  watch: {
   '$route' (to, from){
    
    }
  },
  methods:{
    init(){
    }
  },
  mounted(){
  },
  created(){
   
    
  }
}
</script>
