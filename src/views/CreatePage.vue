<script setup>
import CreatePage from "../components/ContentCreate.vue";
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
      <button class="buttonBack" @click="$router.back()">
        ◀
      </button>
      <h1>Creer une note</h1>
      <button @click="store.editMode = !store.editMode;">Editer : {{ store.editMode }}</button>

    </div>
    
    <CreatePage/>
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