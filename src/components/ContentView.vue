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
    mounted(){
      store.currentId = parseInt(this.$route.params.id.split(':')[1])
      // console.log(store.dummyNotes.notes)
      store.msg = store.dummyNotes.notes.find(item => item.id === store.currentId).content;
      store.updateMd()
    }
  }
</script>

<template>
  <div class="txtArea divPageContent" v-html="store.currentMsgMD"></div>
</template>