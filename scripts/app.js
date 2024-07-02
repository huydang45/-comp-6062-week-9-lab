console.log("Load scripts successfully!")

//Create a new vue app
const app = Vue.createApp({
    //define data for the app
    data(){
        return{
            greeting: "Welcome to Vue.js!",
            message: "This message is displayed based on a boolean property.",
            showMessage: true
        }
    }
})

app.mount('#myVueApp')