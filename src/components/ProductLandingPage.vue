<template>
    <div><!-- Το div πρέπει να τα περιέχει όλα -->
        <div class="product-title">
            <h3>{{ this.productObject.productName }}</h3>
        </div>

        <div class="product-order-container">
            <div>
                <div class="product-img">
                    <img class="img" :src="require(`../../public/images/${this.showSelectedImage}.jpg`)" alt="test product">
                </div>
                <div class="more-imgs">
                    <img class="smaller-imgs" src="../../public/images/img1.jpg" alt="img1" @click="changeMainImage">
                    <img class="smaller-imgs" src="../../public/images/img2.jpg" alt="img2" @click="changeMainImage">
                    <img class="smaller-imgs" src="../../public/images/img3.jpg" alt="img3" @click="changeMainImage">
                    <img class="smaller-imgs" src="../../public/images/img4.jpg" alt="img4" @click="changeMainImage">
                </div>
            </div>

            <div class="order-btns">
                <div class="price">
                    <p>{{  this.productObject.productPrice}} €</p>
                </div>
                <div class="product-availability">
                    <p>Διαθεσιμότητα: {{ (this.productObject.availableQty > 0) ? 'Άμεσα διαθέσιμο' : 'Κατόπιν παραγγελίας' }}</p>
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

        <div class="product-description">
            <span class="tabs" @click="showDescription"><button>Περιγραφή</button></span>
            <span class="tabs" @click="showCharacteristics"><button>Χαρακτηριστικά</button></span>
            <div class="product-description-text" v-if="this.descriptionFlag">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error a quaerat facilis numquam temporibus vitae molestias assumenda quis natus, animi, modi autem ut nulla expedita hic voluptas nam, odio reprehenderit consequatur earum quas tenetur nostrum necessitatibus sequi. Nesciunt temporibus distinctio soluta nam est placeat ducimus! Animi repellat velit harum dolorum?</p>
            </div>
            <div class="characteristics" v-if="this.characteristicsFlag">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, distinctio!</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        productObject: {
            required: true,
            type: Object
        }
    },
    data(){
        return {
            productQuantity: 5,
            showSelectedImage: 'img1',
            descriptionFlag : true,
            characteristicsFlag: false,
        }
    },
    mounted(){
        console.log(this.productObject)
    },
    methods: {
        increaseProductQuantity(){
            this.productQuantity++
        },
        decreaseProductQuantity(){
            this.productQuantity--
        },
        changeMainImage(x){
            //Πατέντα! Να παίρνει το όνομα από την βάση και με εκείνο να επιλέγει την εικόνα που θα φαίνεται
            this.showSelectedImage = x.target.alt
        },
        showDescription(){
            this.characteristicsFlag = false
            this.descriptionFlag = true
        },
        showCharacteristics(){
            this.descriptionFlag = false
            this.characteristicsFlag = true
        }
        
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