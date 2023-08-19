<template>
    <div>
        <h2 class="welcome-message">Welcome to our Eshop!</h2>
        <div class="form-group form">
            <label for="username">Username</label>
            <input v-model="this.email" type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email">

            <label for="password">Password</label>
            <input v-model="this.password" type="password" class="form-control" id="inputPassword" placeholder="Password">
            <div class="buttons">
                <button type="button" class="btn btn-primary submit-btn" @click="login">Login</button>
                <button type="button" class="btn btn-primary submit-btn" @click="logout">Logout</button>
            </div>
            <div v-if="invalidCredentials" class="error-message">
                <p>The username or password you provided is wrong</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {
            email: 'kopap@gmail.com',
            password: 'password1',
            invalidCredentials: false,

        }
    },
    async mounted(){
        
    },
    methods: {
        async login(){
            this.invalidCredentials = false
            let credentials = {}
            credentials.email = this.email
            credentials.password = this.password

            await axios.post('/api/login', credentials)
            .then((response)=> {
                localStorage.setItem('authToken', response.data.token)
                location.reload()
            })
            .catch(() => {
                this.invalidCredentials = true
                localStorage.setItem('authToken', null)
                
            })
        },

        async logout(){
            this.$store.dispatch('logout')
        },

    }
}
</script>

<style scoped>
.form {
    max-width: 50vh;
    margin:auto;
}
.welcome-message {
    margin: 1em;
}
.submit-btn {
    margin: 1em;
}

.buttons {
    display:flex;
    justify-content: center;;
}

.error-message {
    color:red;
}

</style>