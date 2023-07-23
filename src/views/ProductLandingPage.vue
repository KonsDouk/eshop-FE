<template>
    <div v-if="product"><!-- Το div πρέπει να τα περιέχει όλα -->
        <!-- <div class="product-title">
            <h3>{{ this.productObject.productName }}</h3>
        </div> -->

        <div class="product-order-container">
            <div>
                <div class="product-img">
                    <img class="img" :src="`http://localhost:80/${product.product_photos[0].src}`" :alt="product.product_photos[0].alt">
                </div>
                <div class="more-imgs" v-if="product.product_photos.length > 1">
                    <img class="smaller-imgs" v-for="(image, index) in productImages" :key='index' :src="require(`../../public/images/${image}.jpg`)" alt="" @click="changeMainImage(image)">
                </div>
            </div>

            <div class="order-btns">
                <div class="price">
                    <p>{{ product.price }} €</p>
                </div>
                <div class="product-availability">
                    <div v-if="product.quantity >0"><span  ><i class="bi bi-check-lg"></i></span> <span>{{ this.productAvailabilty }}</span></div>
                    <div v-else><span><i class="bi bi-x-lg"></i></span> <span>{{ this.productAvailabilty }}</span></div>
                </div>

                <div class="quantity-controls">
                    <span class="order-quantity">
                        <button class="quantity-btns" :disabled="productQuantity < 2" @click="decreaseProductQuantity"><i class="bi bi-dash"></i></button>
                    </span>
                    <span>
                        <input class="quantity-input-field" type="number" v-model="productQuantity">
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

        <div class="product-description">
            <span class="tabs" @click="showDescription"><button>Περιγραφή</button></span>
            <span class="tabs" @click="showCharacteristics"><button>Χαρακτηριστικά</button></span>
            <div class="product-description-text" v-if="this.descriptionFlag">
                <p>{{ product.description }}</p>
            </div>

            <!-- <div class="characteristics" v-if="this.characteristicsFlag">
                <p>{{ this.productObject.productCharacteristics }}</p>
            </div> -->
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    components: {
        
    },
    props: {
        id: {
            required: true,
            type: Number
        },
    },
    data(){
        return {
            productQuantity: null,
            showSelectedImage: /*this.productObject.productId +*/ '1_img1',
            descriptionFlag : true,
            characteristicsFlag: false,
            productAvailabilty: null,
            availabilityIcon: null,
            product: null,

        }
    },
    async mounted(){
        await axios.get('/api/product/'+this.id)
        .then((response) => {
            this.product = response.data
            this.productQuantity = response.data.quantity
            console.log('responseeee', response)
        })
        console.log('product', this.product)
        if (this.product.quantity > 0){
            this.availabilityIcon = `<i class="bi bi-check-lg"></i>`
            this.productAvailabilty = 'Άμεσα διαθέσιμο'
        }
        else {
            this.availabilityIcon = `<i class="bi bi-x"></i>`
            this.productAvailabilty = 'Κατόπιν παραγγελίας'
        }
        
        
    },
    methods: {
        increaseProductQuantity(){
            this.productQuantity++
        },
        decreaseProductQuantity(){
            this.productQuantity--
        },
        changeMainImage(x){
            this.showSelectedImage = x
        },
        showDescription(){
            this.characteristicsFlag = false
            this.descriptionFlag = true
        },
        showCharacteristics(){
            this.descriptionFlag = false
            this.characteristicsFlag = true
        },
        
    },
    watch: {
        productQuantity(nv){
            if (nv < 0){
                this.productQuantity = 1
            }
        },

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
    /* border:solid 1px red; */
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

.smaller-imgs {
    margin: 1em;
    max-width: 4.5em;
    max-height: 5em;
}
.smaller-imgs:hover {
    cursor: pointer;
}


.tabs > button {
    background: none;
    border:none;
    margin: 1em;
    border-bottom: solid 2px black;
}
.tabs > button:hover {
    transform: scale(1.2);
}

.product-description {
    max-width: 70%;
    margin: auto;
}
</style>