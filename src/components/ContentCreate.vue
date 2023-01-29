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
  <input v-model="store.currentName" placeholder="Nom de la note"/>
  <input v-model="store.currentTags" placeholder="Tags"/>
  <textarea class="txtArea" v-if="store.editMode" v-model="store.msg" placeholder="..." @keyup="store.updateMd()"> </textarea>
  <div class="txtArea divPageContent" v-else-if="!store.editMode" v-html="store.currentMsgMD"></div>

  <!-- <p>{{ store.note.content }}</p> -->

  <div class="buttonsParent">
    <button class="button save" @click="store.addNote">Enregistrer</button>
    <button class="button clear" @click="store.clearNote">Tout effacer</button>
  </div>
  
</template>