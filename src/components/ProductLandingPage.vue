<template>
    <div><!-- Το div πρέπει να τα περιέχει όλα -->
        <div class="product-title">
            <h3>Product Title Goes Here</h3>
        </div>

        <div class="product-order-container">
            <div class="product-img">
                <!-- <img src="../../public/images/3jO7N1x.jpg" style="width:50em; height:30em;" alt="test product"> -->
            </div>

            <div class="order-btns">
                <div class="price">
                    <p>10000 €</p>
                </div>
                <div class="product-availability">
                    <p>Διαθεσιμότητα: Άμεσα διαθέσιμο</p>
                </div>

                <div class="quantity-controls">
                    <span class="order-quantity">
                        <button class="quantity-btns" v-if="this.productQuantity > 1" @click="decreaseProductQuantity"><i class="bi bi-dash"></i></button>
                    </span>
                    <span>
                        <input class="quantity-input-field" type="number" v-model="productQuantity">
                    </span>
                    <span class="order-quantity">
                        <button class="quantity-btns" @click="increaseProductQuantity"> <i class="bi bi-plus"></i> </button>
                    </span>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            productQuantity: 5,
            
        }
    },
    mounted(){
        
    },
    methods: {
        increaseProductQuantity(){
            this.productQuantity++
        },
        decreaseProductQuantity(){
            this.productQuantity--
        }
    }
}
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
/* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}
input[type=number] {
    -moz-appearance:textfield; /* Firefox */
}
.product-order-container {
    display:flex;
    width:75%;
    justify-content: space-around;
}
.product-img {
    max-width: 50em;
    min-width:1em;
    max-height: 50em;
    min-height: 1em;
    width:35em;
    height:25em;
    margin: auto;
    border:solid 1px red;
}

.quantity-btns {
    height: 2em;
    width: 2em;
    margin: 1em;
    border: solid 1px black;
    border-radius: 1em;
    background: none;
}

.quantity-controls {
    display:inline;
}

.quantity-input-field {
    width:3em;
    text-align: center;
    border:solid 1px black;
    border-radius: 5px;
}

</style>