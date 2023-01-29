<script>
  import ItemList from "./ItemList.vue";
  import { store } from '../store/store.js'
  

  // créer une variable locale
  export default{
    components: {
      ItemList
    },
    data() {
      return {
        store
      }
    },
    created(){
      store.currentId = parseInt(this.$route.params.id.split(':')[1])
      store.msg = store.notes.find(item => item.id === store.currentId).content;
      
      // store.currentMsgMD = marked.parse(store.msg);
      store.updateMd()
      // console.log(store.notes.find(item => item.id === store.currentId).isOnline)

      store.currentName = store.notes.find(item => item.id === store.currentId).name;
      store.currentTags = store.notes.find(item => item.id === store.currentId).tags.join(" ");
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
    <button class="button save" @click="store.replaceNote(parseInt(store.currentId))">Enregistrer</button>
    <button class="button clear" @click="store.clearNote">Tout effacer</button>
  </div>
  
</template>