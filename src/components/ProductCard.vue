<template>
    <div class="container">
        <div class="product-image" @click="goToLandingPage">
            <img :src="require(`../../public/images/${this.productData.img}.jpg`)" alt="product-image">
        </div>
        <div class="price" @click="goToLandingPage">
            Τιμή: {{ this.productData.productPrice }}€
            <p class="available" v-if="this.productData.availableQty > 5">Διαθέσιμο για παραγγελία</p>
            <p class="unavailable" v-if="this.productData.availableQty <= 5">Κατόπιν παραγγελίας</p>
        </div>
        <div class="btns">
            <span style="margin: 0 2em;"><button type="button" class="btn btn-primary" @click="addToWishList"><i class="bi bi-card-checklist"></i></button></span>
            <span style="margin: 0 2em;"> <button type="button" class="btn btn-success" @click="addToCart"><i class="bi bi-cart-plus"></i></button></span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        productData: {
            required: true,
            type: Object,
        }
    },

    data(){
        return {
        }
    },

    mounted(){
        // console.log("sdfsdf", this.productData)
    },
    methods: {
        goToLandingPage(){
            
            this.$router.push('product_landing_page', this.productData.productId)
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