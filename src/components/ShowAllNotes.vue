<script>
  import { store } from '../store/store.js'
  
  
  // créer une variable locale
  export default{
    data() {
      return {
        store
      }
    }
  }
</script>

<script setup>
import { RouterLink } from 'vue-router'

</script>





<template>
    <input v-model="store.currentSearch" @keyup="store.search()" placeholder="Rechercher"/>
    <div class="parentItems">
        <RouterLink class="item" v-for="element in store.AllMatchItems" :to='{path: `/view/:${element.id}`}'>
            "{{ element.name }}" par {{ element.author }}
        </RouterLink>
    </div>
    

</template>





<style scoped>

    .parentItems{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
    }
    .item{
        background-color: #25313d;
        padding: 5%;

        border-radius: 10px;

        margin: 2%;

        text-align: center;

        width: 60%;

        
    }

</style>