<script setup>
import { RouterLink } from 'vue-router'
// recevoir une variable de l'exterieur
defineProps({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <br>
  <RouterLink class="item" :to='{path: `/edit/:${id}`}'>{{ name }}</RouterLink>
  
</template>


<style scoped>

  .item{
    background-color: #25313d;
    padding: 5%;

    border-radius: 10px;
  }

</style>