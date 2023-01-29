<script setup>
import { RouterLink } from 'vue-router'
</script>

<script>

export default{
  props:{
    id: Number,
    name: String,
    tags: Array,
    color: String
  }
}

</script>

<template>
  <div class="parentItems">
    <RouterLink class="item" :to='{path: `/edit/:${id}`}'>
      
      <div class="color" :style="{ backgroundColor: color}"></div>

      {{ name }}
      
      <hr class="separator">

      
      <div class="tagsList">
        <p class="tag" v-for="tag in tags"> #{{ tag }} </p>
      </div>
  
  </RouterLink>
  </div>
  
  
</template>


<style scoped>

  .color{
    width: 10px;
    height: 10px;

    border-radius: 5px;

    /* background-color: red; */
    position: relative;
    left: 0;
    top: 0;

  }
  

  .tagsList{
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-evenly;
  }
  .tag{
    font-size: 70%;
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
    font-size: 130%;
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