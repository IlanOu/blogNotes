<script setup>
import ShowAllNotes from "../components/OtherNoteCards.vue";
</script>

<template>
  <div class="header">
    <button class="buttonBack" @click="$router.back()">
      ◀
    </button>
    <h1>Rechercher une note</h1>
  </div>
  
  <ShowAllNotes/>

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
