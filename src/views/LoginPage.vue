<template>
    <div >
        <h2 class="welcome-message">Welcome to our Eshop!</h2>
        <div class="form-group form">
            <label for="username">Username</label>
            <input v-model="this.email" type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email">

            <label for="password">Password</label>
            <input v-model="this.password" type="password" class="form-control" id="inputPassword" placeholder="Password">

            <button type="button" class="btn btn-primary submit-btn" @click="attemptLogin">Submit</button>
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
    methods: {
        async attemptLogin(){
            await axios.post('/api/customerLogin', {email: this.email, password: this.password})
            .then((response) => {
                console.log("response", response)
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

</style>