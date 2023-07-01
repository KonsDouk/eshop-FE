<template>
    <div class="container">
        <div class="product-image">
            <img :src="require(`../../public/images/${this.productData.img}.jpg`)" alt="product-image">
        </div>
        <div class="price">
            Τιμή: {{ this.productData.productPrice }}€
            <p class="available" v-if="this.productData.availableQty > 5">Διαθέσιμο για παραγγελία</p>
            <p class="unavailable" v-if="this.productData.availableQty <= 5">Κατόπιν παραγγελίας</p>
        </div>
        <div class="btns">
            <button type="button" class="btn btn-primary" ><i class="bi bi-card-checklist"></i></button>
            <button type="button" class="btn btn-success" ><i class="bi bi-cart-plus"></i></button>
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
        console.log("sdfsdf", this.productData)
    }

}
</script>

<style scoped>
.container {
    border: solid 1px cyan;
    max-width: 50em;
    min-width:1em;
    min-height: 1em;
    width:15em;
    margin: auto; 
}
.product-image {
    
}
.product-image >img {
    width:100%;
    height:100%;
    object-fit: contain;
    /* max-width: 50em;
    min-width:1em;
    max-height: 50em;
    min-height: 1em;
    width:35em;
    height:25em;
    margin: auto; */
}

.btns {
    display:flex;
    justify-content:space-around;
    margin: 0.5em;
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