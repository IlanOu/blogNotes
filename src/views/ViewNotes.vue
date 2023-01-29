<script setup>
import ShowAllNotes from "../components/ShowAllNotes.vue";
</script>

<template>
  <main>
    <div class="header">
      <button class="buttonBack" @click="$router.back()">
        ◀
      </button>
      <h1>Rechercher une note</h1>
    </div>
    
    <ShowAllNotes/>

  </main>
</template>

<style scoped>
  .header{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
  }

  h1{
    font-size: 150%;
  }
</style>
