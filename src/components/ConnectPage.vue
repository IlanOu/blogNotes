<script>
import { store } from '../store/store.js'
export default{
  props:{
    connect: Boolean
  },
  data() {
    return {
    store
    }
}
}

</script>


<template>

    <h3>
        Nom d'utilisateur
    </h3>
    <input type="text" v-model="store.currentUsername" placeholder="Nom d'utilisateur"/>

    <h3>
        Mot de passe
    </h3>
    <input type="password" v-model="store.currentPassword" placeholder="Mot de passe"/>


    <button v-if="connect" class="button connectionPageBtn" @click="store.checkConnection()">
        Se connecter
    </button>
    <button v-else class="button connectionPageBtn" @click="store.registerNewUser()">
        S'inscrire
    </button>

</template>