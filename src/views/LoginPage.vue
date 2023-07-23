<template>
    <div >
        <h2 class="welcome-message">Welcome to our Eshop!</h2>
        <div class="form-group form">
            <label for="username">Username</label>
            <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email">

            <label for="password">Password</label>
            <input type="password" class="form-control" id="inputPassword" placeholder="Password">

            <button type="button" class="btn btn-primary submit-btn" @click="attemptLogin">Submit</button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        attemptLogin(){
            console.log("Hello")
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