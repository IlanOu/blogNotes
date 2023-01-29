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
      store.setUpAllTags(store.dummyNotes.notes)
    }
  }
</script>

<script setup>
import { RouterLink } from 'vue-router'

</script>





<template>
    <input v-model="store.currentSearch" @keyup="store.search(store.dummyNotes.notes)" placeholder="Rechercher"/>
    
    <select @change="store.searchByTag(category, store.dummyNotes.notes);" v-model="category" >
      <option value="" disabled selected>Filtrer par tag</option>
      <option v-for="tag in store.allTags" :value="tag"> {{ tag }} </option>
    </select>

    <div class="parentItems">
        <RouterLink class="item" v-for="element in store.AllMatchItems" :to='{path: `/view/:${element.id}`}'>
          
          
          <p class="noteAuthor">{{ element.author }} : </p>
          <p class="noteName">{{ element.name }}</p>
          
          <hr class="separator">

          

          <div class="tagsList">
            <p class="tag" v-for="tag in element.tags"> #{{ tag }} </p>
          </div>
            
        </RouterLink>
    </div>
    

</template>





<style scoped>

  .noteAuthor{
    font-style: italic;
  }

  .noteName{
    text-decoration: underline;
    /* font-style: italic; */
  }

  .tagsList{
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-evenly;
  }
  .tag{
    font-size: 60%;
    margin: 0 1%;
    color: #BEB6C1;
  }

  .parentItems{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }
  .item{
    font-size: 120%;

    position: relative;
    background-color: #272833aa;
    padding: 5%;

    border-radius: 5px;

    margin: 1%;

    text-align: center;

    width: 60%;

      
  }

  .item:hover{
    filter: brightness(1.2);
  }

</style>