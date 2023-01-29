<script>
import { RouterLink, RouterView } from "vue-router";
import { store } from "./store/store.js"
  
  // créer une variable locale
  export default{
    components: {
      RouterLink,
      RouterView
    },
    setup() {
      return {
        store
      }
    },
    created(){
      
      store.initDatas()
      
    }
  }

</script>

<template>  
  <RouterView/>
</template>