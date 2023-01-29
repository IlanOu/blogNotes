<script>
  import { store } from '../store/store.js'
  

  // créer une variable locale
  export default{
    data() {
      return {
        store
      }
    },
    mounted: function() {
        this.root = document.documentElement;
    },
    methods:{
        changeTheme(theme){
            console.log(theme)
            if (theme == 'dark') {
                this.root.style.setProperty("--text-color", "white");
                this.root.style.setProperty("--background-txtarea", "#272833aa");
                this.root.style.setProperty("--background-gradient-first", "rgba(42,40,52,1)");
                this.root.style.setProperty("--background-gradient-second", "rgba(85,87,107,1)");

                this.root.style.setProperty("--textarea-A", "aqua");
                this.root.style.setProperty("--textarea-h1", "rgb(255, 136, 0)");
                this.root.style.setProperty("--textarea-h2", "rgb(255, 187, 0)");
                this.root.style.setProperty("--textarea-h3", "rgb(255, 230, 0)");
                this.root.style.setProperty("--textarea-h4", "rgb(136, 255, 0)");
            } else {
                this.root.style.setProperty("--text-color", "black");
                this.root.style.setProperty("--background-txtarea", "white");
                this.root.style.setProperty("--background-gradient-first", "gray");
                this.root.style.setProperty("--background-gradient-second", "white");

                this.root.style.setProperty("--textarea-A", "purple");
                this.root.style.setProperty("--textarea-h1", "DarkRed");
                this.root.style.setProperty("--textarea-h2", "OrangeRed");
                this.root.style.setProperty("--textarea-h3", "MediumSeaGreen");
                this.root.style.setProperty("--textarea-h4", "DarkGreen");
            }
        }
    }
  }
</script>

<template>
  <main>
    <div class="header">
      <button class="buttonBack" @click="$router.back()">
        ◀
      </button>
      <h1>Paramètres</h1>      
    </div>
    
    <div class="content">
        <h3>Apparence</h3> 

        <hr class="separator">

        <div class="subContainer">
            <h4>Thème :</h4>

            <select @change="changeTheme(store.currentTheme)" v-model="store.currentTheme">
                <option value="dark">dark</option>
                <option value="light">light</option>
            </select>
        </div>

        <h3>Compte</h3> 

        <hr class="separator">

        <div class="subContainer">
            <a class="deconnection" @click="store.deconnect()">Me déconnecter</a>
        </div>

        

    </div>
  </main>
</template>

<style scoped>
    .subContainer{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
    }

    .content{
        width: 120%;
        height: 100%;

        border-radius: 3px;
        padding: 2px 10px;

        background-color: var(--background-txtarea);
    }

    .subContainer{
        padding: 0 3%;
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
  h3{
    font-weight: bold;
    letter-spacing: 1px;
    margin: 3%;
  }
</style>
