<script>
  import { store } from '../store/store.js'
  import { RouterLink } from 'vue-router'
  
  
  // créer une variable locale
  export default{
    components: {
      RouterLink
    },
    data() {
      return {
        store
      }
    },
    created(){
      if (!store.isConnected){
        this.$router.push('register') 
      }
    }
  }
</script>

<template>
  
  <main class="content">

    <div class="title">
      <img src="../assets/logo.png" alt="Logo" class="logo">
      <h1>Blog-Notes</h1>
    </div>
    

    <div class="menu">
      <RouterLink class="menuItems linksHover" to="/create" @click="store.clearNote(); store.editMode=true">▸ Créer une note</RouterLink>
      <br>
      <RouterLink class="menuItems linksHover" to="/dashboard" @click="store.clearNote(); store.setUpAllTags(store.notes); store.editMode=true; store.setupMyNotes();">▸ Voir mes notes</RouterLink>
      <br>
      <RouterLink class="menuItems linksHover" to="/search" @click="store.clearNote(); store.setUpAllTags(store.dummyNotes.notes); store.AllMatchItems=store.dummyNotes.notes">▸ Trouver une note</RouterLink>

    </div>
    
  </main>
  <a class="deconnection" @click="store.deconnect()">Déconnexion</a>
</template>


<style scoped>

  .content{
    display: flex;
    align-items: center;
    justify-content:space-evenly;
    flex-direction: column;
  }

  .title{
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  h1{
    font-size: xx-large;
  }

  .logo{
    width: 17%;
    margin: 5%;
  }

</style>