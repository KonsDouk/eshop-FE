<template>
    <div>
        <form class="form">
            <label for="fName">First Name</label>
            <input readonly type="text" id="fName" name="fName">
            
            <label for="lName">Last Name</label>
            <input readonly type="text" id="lName" name="lName">

            <label for="phone">Phone</label>
            <input readonly type="text" id="phone" name="phone">

            <label for="cellphone">Cellphone</label>
            <input readonly type="text" id="cellphone" name="cellphone">

            <label for="address">Address</label>
            <input readonly type="text" id="address" name="address">

            <label for="streetNo">Street No</label>
            <input readonly type="text" id="streetNo" name="streetNo">

            <label for="email">Email</label>
            <input readonly type="text" id="email" name="email">

            <label for="isActive">Is Active</label>
            <input readonly type="text" id="isActive" name="isActive">

            <label for="created_at">Created At</label>
            <input readonly type="text" id="created_at" name="created_at">

            <label for="updated_at">Updated At</label>
            <input readonly type="text" id="updated_at" name="updated_at">
        </form>
    </div>
</template>

<script>

export default {
    props:{
        data: {
            required: true,
        }
    }

}
</script>

<style scoped>
.form {

}

.form > label {
    width: 10vw;
    height: 30px;
    display: block;
    margin: 0.5em auto;

}
.form > input {
    width:33vw;
    /* display:block; */
}
</style>