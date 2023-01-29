<script setup>
import ConnectPage from "../components/ConnectPage.vue";
import { RouterLink } from 'vue-router'
</script>

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

<template>

  <main>
    
      <div class="header">
        <h1>Se connecter</h1>
      </div>



      <ConnectPage :connect="true"/>

      Pas de compte ? <RouterLink class="chgCnxPge" to="/register" @click="store.clearInputConnection()">S'inscrire</RouterLink>

  </main>
</template>

<style scoped>


  .header{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    margin: 5%;
  }
  
  h1{
    font-size: 150%;
  }
</style>
