<template>
    <div><!-- Το div πρέπει να τα περιέχει όλα -->
        <div class="product-title">
            <h3>Product Title Goes Here</h3>
        </div>

        <div class="product-order-container">
            <div class="product-img">
                <img class="img" src="../../public/images/3jO7N1x.jpg" alt="test product">
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
                        <button class="quantity-btns" :disabled="productQuantity < 2" @click="decreaseProductQuantity"><i class="bi bi-dash"></i></button>
                    </span>
                    <span>
                        <input class="quantity-input-field" type="number" v-model="productQuantity" @blur="checkForNegative">
                    </span>
                    <span class="order-quantity">
                        <button class="quantity-btns" @click="increaseProductQuantity"> <i class="bi bi-plus"></i> </button>
                    </span>
                </div>
                <div class="add-to-cart-btn-container">
                    <button class="add-to-cart">Προσθήκη στο καλάθι</button>
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
        },
        checkForNegative(){
            if (this.productQuantity < 0){
                this.productQuantity = 1
            }
        }
        
    },
    watch: {
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


.product-title {
    margin-top: 2em;
    margin-bottom: 5em;
}

.product-order-container {
    display:flex;
    width:75%;
    justify-content: space-around;
}

.price > p {
    font-size: 3em;
    font-weight: bold;
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

.add-to-cart-btn-container {
    margin:1em;
}

.add-to-cart {
    padding:1em;
    color:white;
    background-color:rgb(55, 156, 7);
    border:none;
    border-radius: 10px;
}
.add-to-cart:hover {
    transform: scale(1.2);
}

.product-img {
    /* overflow: hidden; */
}

.img {
    /* border: solid 10px yellow; */
    width:100%;
    height:100%;
    object-fit: contain;
}
.img:hover {
    transform: scale(1.2);
}
</style>