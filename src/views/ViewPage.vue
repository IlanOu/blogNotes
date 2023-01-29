<script setup>
import ContentView from "../components/ContentView.vue";
</script>

<template>
  <main>
    <div class="header">
      <button class="buttonBack" @click="$router.back()">
        ◀
      </button>
      <h1>Voir une note</h1>
    </div>
    
    <ContentView/>
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
