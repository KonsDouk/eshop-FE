<template>
    <div >
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
        }
    },
    mounted(){
        
    },
    methods: {
        async login(){
            let credentials = {}
            credentials.email = this.email
            credentials.password = this.password

            await axios.post('/api/login', credentials)
            .then((response)=> {
                localStorage.setItem('authToken', response.data.token)
                console.log('response', response)
            })
        },

        async logout(){
            const headers = {'Authorization': `Bearer ${localStorage.getItem('authToken')}`}
            await axios.post('/api/logout', null, {headers})
            .then(() => {
                localStorage.setItem('authToken', null)
            })
        }
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

</style>