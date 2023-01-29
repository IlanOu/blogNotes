import { reactive, computed } from 'vue'
import router from "../router/index.js";
// import 'highlight.js/styles/solarized-light.css'

export const store = reactive({
    


    currentTheme: 'dark',
    isConnected: false,

    currentUsername: "",
    currentPassword: "",
    myId: null,

    allTags: [],

    currentSearch: "",
    AllMatchItems: [],

    currentId: 0,
    currentName: "",
    currentTags: "",
    msg: "",

    currentMsgMD: "",
    editMode: true,

    dummyNotes: [],
    notes: [],
    addNote(){

        let id = JSON.parse(localStorage.getItem("parameters")).postCount
        id++
        localStorage.setItem("parameters", JSON.stringify({postCount: id}))

        // crée la note
       let thisNote = {name: this.currentName, content: this.msg, id: id, author: this.currentUsername, tags: this.currentTags.split(" "), color: "#ff0055", authorId: this.myId, isOnline: false}

        // ajoute la note à toute les notes
        this.notes.push(thisNote)

        let myDatas = JSON.parse(localStorage.getItem("myDatas"))
        myDatas.notes.push(thisNote)
        localStorage.setItem("myDatas", JSON.stringify(myDatas))

        // fait retour
        router.back()
    },
    replaceNote(currentId){
        

        this.removeNote(currentId)
        this.addNote()
    },
    removeNote(currentId){
        this.AllMatchItems = []
        let thisNote = this.notes.find(item => item.id === currentId);

        let currentOnlinesDatas = JSON.parse(localStorage.getItem("datasLocals"))
        
        
        if (thisNote.isOnline){
            this.notes.shift(thisNote)

            let toDelete = currentOnlinesDatas.notes.find(item => item.id === currentId);

            const index = currentOnlinesDatas.notes.indexOf(toDelete);
            currentOnlinesDatas.notes.splice(index, 1);

            localStorage.setItem("datasLocals", JSON.stringify(currentOnlinesDatas))
            let currentDatas = JSON.parse(localStorage.getItem("datasLocals"))
            this.dummyNotes = currentDatas;
        }else{
            this.notes.shift(thisNote)
        }

        let toLocalStorage = {notes: this.notes}
        localStorage.setItem("myDatas", JSON.stringify(toLocalStorage))

        router.back()
    },
    clearNote(){
        this.msg = "";
        this.currentName = "";
        this.currentTags = "";
        this.currentMsgMD = "";
    },
    async initDatas(){

        
        // initialiser les localstorage
        if (!localStorage.getItem("datasLocals")){
            localStorage.setItem("datasLocals", JSON.stringify({notes: []}))
        }
        if (!localStorage.getItem("myDatas")){
            localStorage.setItem("myDatas", JSON.stringify({notes: []}))
        }
        if (!localStorage.getItem("datasConnections")){
            localStorage.setItem("datasConnections", JSON.stringify({users: []}))
        }
        if (!localStorage.getItem("parameters")){
            localStorage.setItem("parameters", JSON.stringify({postCount: 0}))
        }
        
        

        this.dummyNotes = localStorage.getItem("datasLocals");
    },
    setupMyNotes(){

        this.AllMatchItems = []
        this.notes = []
        let notesUsers = JSON.parse(localStorage.getItem("myDatas")).notes
        for (let i=0; i<notesUsers.length; i++){
            
            
            if (notesUsers[i].authorId == this.myId){
                this.notes.push(notesUsers[i])
            }
        }
        this.AllMatchItems=this.notes;
    },
    search(onTheseNotes){
        this.AllMatchItems = []
        if (this.currentSearch.trim() == ""){
            this.AllMatchItems=onTheseNotes
        }else{
            this.AllMatchItems = onTheseNotes.filter(item => {

                let toGet = [item.name, item.author]

                let containsSearch = [];

                // recherche des mots dans n'importe quel sens dans la phrase
                let theReturn = this.currentSearch.split(" ").map(searchSplitted => {
                    if (searchSplitted){
                        
                        // rechercher par noms ou auteurs
                        let currentContains = containsSearch.push(toGet[0].toUpperCase().includes(searchSplitted.toUpperCase()) || toGet[1].toUpperCase().includes(searchSplitted.toUpperCase()))

                        if (!containsSearch.includes(false)){
                            // dis si le nom de la carte contient le mot de ma recherche
                            return currentContains && !containsSearch.includes(false)
                        }else{
                            containsSearch.push(false)
                            return false
                        }
                    }
                })
                
                return theReturn.includes(true) && !theReturn.includes(false)
            })
        }
    },
    searchByTag(tag, onTheseNotes){
        this.AllMatchItems = []
        this.AllMatchItems = onTheseNotes.filter(item => {
            this.currentSearch = ""

            return item.tags.includes(tag)

        })
    },
    setUpAllTags(onTheseNotes){
        this.allTags = []
        if (onTheseNotes){
            onTheseNotes.map(x => {
                for (let i=0; i<x.tags.length; i++){
                    if (!this.allTags.includes(x.tags[i])){
                        this.allTags.push(x.tags[i])
                    }
                }            
                return true
            })
        }
        
    },
    pushToJson(currentId){
        // poster une note
        
        let thisNote = this.notes.find(item => item.id === currentId);

        if (!thisNote.isOnline){
            let currentDatas = JSON.parse(localStorage.getItem("datasLocals"))
            let myDatas = JSON.parse(localStorage.getItem("myDatas"))
        
            thisNote.color = "#55ff00"

            myDatas.notes.shift(thisNote)
            
            
            myDatas.notes.push(thisNote)
            currentDatas.notes.push(thisNote)
            
            
            localStorage.setItem("datasLocals", JSON.stringify(currentDatas))
            localStorage.setItem("myDatas", JSON.stringify(myDatas))


         
            this.dummyNotes = currentDatas;

            router.back()
        }else{
            console.log("Elle est déjà en ligne")
        }
     
        
    },
    checkConnection(){
        if (this.currentUsername.trim() == ""){
            alert("Veuillez entrer un nom d'utilisateur valide")
        }
        if (this.currentPassword.trim() == ""){
            alert("Veuillez entrer un mot de passe valide")
        }

        let currentConnectionsDatas = JSON.parse(localStorage.getItem("datasConnections"))

        for (let i=0; i<currentConnectionsDatas.users.length; i++){
            if (currentConnectionsDatas.users[i].username == this.currentUsername && currentConnectionsDatas.users[i].password == this.currentPassword){
                this.isConnected=true
                this.myId = currentConnectionsDatas.users[i].id
                router.push('/')
            }
        }
    },
    registerNewUser(){
        if (this.currentUsername.trim() == ""){
            alert("Veuillez entrer un nom d'utilisateur valide")
        }
        if (this.currentPassword.trim() == ""){
            alert("Veuillez entrer un mot de passe valide")
        }

        let currentConnectionsDatas = JSON.parse(localStorage.getItem("datasConnections"))

        let id = currentConnectionsDatas.users.length

        for (let i=0; i<currentConnectionsDatas.users.length; i++){
            if (currentConnectionsDatas.users[i].username == this.currentUsername && currentConnectionsDatas.users[i].password == this.currentPassword){
                console.log("Cet utilisateur existe déjà")
            }else {
                if (id == currentConnectionsDatas.users[i]){
                    id++
                }
                currentConnectionsDatas.users.push({username: this.currentUsername, password: this.currentPassword, id: id})
                this.myId = id

                this.isConnected=true
                router.push('/')
            }
        }
        if (currentConnectionsDatas.users.length < 1){
            currentConnectionsDatas.users.push({username: this.currentUsername, password: this.currentPassword, id: id})
            this.myId = id

            this.isConnected=true
            router.push('/')
        }
        

        localStorage.setItem("datasConnections", JSON.stringify(currentConnectionsDatas))
    },
    updateMd(){
        this.currentMsgMD = marked.parse(this.msg) 
        // console.log(this.currentMsgMD)
    },
    log (content){
        console.log(content)
    },
    clearInputConnection(){
        this.currentPassword = "";
        this.currentUsername = "";
    },
    deconnect(){
        this.isConnected= false;
        this.currentUsername= "";
        this.currentPassword= "";
        this.myId= null;

        router.back()
    }
})