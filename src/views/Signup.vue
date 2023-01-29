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
      <h1>S'inscrire</h1>
    </div>
    
    <ConnectPage :connect="false"/>

    Déjà un compte ? <RouterLink class="chgCnxPge" to="/login" @click="store.clearInputConnection()">Se connecter</RouterLink>

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
