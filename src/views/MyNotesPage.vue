<script setup>
import NoteCard from "../components/MyNoteCards.vue";
</script>

<script>
  import { store } from '../store/store.js'
  
  
  // créer une variable locale
  export default{
    data() {
      return {
        category: '',
        store
      }
    },
    created(){
      store.setUpAllTags(store.notes)
    }
  }
</script>

<template>
  <div class="header">
    
    <button class="buttonBack" @click="$router.back()">
      ◀
    </button>
    <h1>Mes notes</h1>
  </div>

  <input v-model="store.currentSearch" @keyup="store.search(store.notes)" placeholder="Rechercher"/>
    

  <select @change="store.searchByTag(category, store.notes);" v-model="category" >
    <option value="" disabled selected>Filtrer par tag</option>
    <option v-for="tag in store.allTags" :value="tag"> {{ tag }} </option>
  </select> 
  
  
  <NoteCard v-for="item in store.AllMatchItems" :key="item.id" :id="item.id" :name="item.name" :tags="item.tags" :color="item.color" />
  <!-- @event-added="store.msg = item.content; store.currentId = item.id" -->
</template>

<style scoped>

  .header{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    margin: 5%;
  } 

  h1{
    font-size: 150%;
  }
  

</style>