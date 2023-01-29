<script setup>
import ContentEdit from "../components/ContentEdit.vue";
</script>

<script>
  import { store } from '../store/store.js'
  

  // créer une variable locale
  export default{
    data() {
      return {
        store
      }
    },
    created(){
      store.currentId = parseInt(this.$route.params.id.split(':')[1])
    }
  }
</script>

<template>
  <main>
    <div class="header">
      <button class="buttonBack" @click="$router.back()">
        ◀
      </button>
      <h1>Editer une note</h1>
      <button class="buttonPublish" @click="store.pushToJson(store.currentId)">
        Publier
      </button>
      
    </div>
    <div class="underHeader">
      <button class="button deleteNote" @click="store.removeNote(store.currentId)">
        Supprimer une note
      </button>

      <button class="button" @click="store.editMode = !store.editMode;">Editer : {{ store.editMode }}</button>      
    </div>
    
    <ContentEdit/>
  </main>
</template>

<style scoped>

  .underHeader{
    display: flex;
    width: 60%;
    align-items: center;
    justify-content: space-between;
    margin: 2%;

  }

  .deleteNote:hover{
    background-color: rgba(191, 41, 41, 0.502);
  }

  .header{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    margin: 2%;
  }

  h1{
    font-size: 150%;
  }
</style>
