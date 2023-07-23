<template>
    <div class="container">
        <div class="product-image" @click="goToLandingPage">
            <img :src="`http://localhost:80/${this.mainPhoto.src}`" :alt="mainPhoto.alt">
        </div>
        <div class="price" @click="goToLandingPage">
            Τιμή: {{ this.price }}€
            <p class="available" v-if="quantity > 5">Διαθέσιμο για παραγγελία</p>
            <p class="unavailable" v-if="quantity <= 5">Κατόπιν παραγγελίας</p>
        </div>
        <div class="btns">
            <span style="margin: 0 2em;"><button type="button" class="btn btn-primary" @click="addToWishList"><i class="bi bi-heart"></i></button></span>
            <span style="margin: 0 2em;"> <button type="button" class="btn btn-success" @click="addToCart"><i class="bi bi-cart-plus"></i></button></span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        // productData: {
        //     required: true,
        //     type: Object,
        // },
        id: {
            required: true,
            type: String
        },
        name: {
            required: true,
            type: String
        },
        price: {
            required: false,
            type: String
        },
        description: {
            required: false,
            type: String
        },
        quantity: {
            required: false,
            type: String
        },
        mainPhoto: {
            required: false,
            type: String
        },
        photos: {
            required: false,
            type: String
        }


    },

    data(){
        return {
        }
    },

    mounted(){
        // console.log()
    },
    methods: {
        goToLandingPage(){
            this.$router.push({name: 'product_landing_page', params: {id: this.id}})
        },
        addToWishList(){
            
        },
        addToCart(){
            
        }
    }

}
</script>

<style scoped>
.container {
    border: solid 1px cyan;
    min-height: 1em;
    width:15vw;
    margin: auto; 
    cursor:pointer;
    /* margin:auto; */
}

.product-image >img {
    width:100%;
    max-height: 9em;
    object-fit: contain;
}

.btns {
    margin: 0.5em auto;
}

.price {
    font-size: 2em;
    font-weight: bold;
    margin: 0.5em;
}

.available {
    color: green;
    font-size: 0.5em;
}

.unavailable {
    color: red;
    font-size: 0.5em;
}
</style>