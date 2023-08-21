<template>
  <div>
    <!-- <div v-if="this.modalVisibility" class="modal-container"> -->
      <div class="my-modal">
        <button type="button" class="btn btn-primary">Create a new Wishlist</button> <br>
        Or add to an existing one
        <select class="form-select" aria-label="Default select example">
          <option v-for="(items, index) in this.wishlists" :key="index" value="1">{{items.name}}</option>
        </select>
        <button type="button" class="btn btn-success">Save</button>
        <button type="button" class="btn btn-danger">Cancel</button>
      </div>
    <!-- </div> -->
  
    <div class="container">
      <div class="home" v-for="(products, index) in this.products" :key="index">
        <ProductCard
          class="product-card"
          :productData="products"
          :name="products.name"
          :price="products.price"
          :description="products.description"
          :quantity="products.quantity"
          :mainPhoto="products.product_photos[0]"
          :photos="products.product_photos"
          :id="products.id"
          @show-modal="showModal"
        >
        </ProductCard>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
import axios from 'axios'

export default {
  name: 'HomeView',
  components: {
    ProductCard,
  },
  data(){
    return {
      products: null,
      wishlists: null,
      modalVisibility: true,
    }
  },
  async mounted(){
    await Promise.all([
      axios.get('/api/products')
      .then((response) => {
        this.products = response.data
      }),
      axios.get('/api/wishlists')
      .then((response) => {
        this.wishlists = response.data
      })
    ])
    console.log('products', this.products, 'wishlists', this.wishlists)
    // await axios.get('/api/products')
    // .then((response) => {
    //   this.products = response.data
    //   console.log(response)
    // })

    // await axios.get('/api/wishlists')
    // .then((response) => {
    //   console.log('wishlist', response)
    // })
    
  },
  methods: {
    showModal(){
      this.modalVisibility = true
      console.log('homeview', this.modalVisibility)
    }
  }
}
</script>

<style scoped>
.container {
  display:flex;
  flex-direction: row;
  margin: auto;
  flex-wrap: wrap;
}

.home {
  margin:1em;
}

.product-card {
  z-index: 0;
}

.my-modal {
  position:fixed;
  z-index: 1;
  /* text-align:center; */
  width: 25em;
  left:50vw;
  transform: translate(-50%, 50%);
  margin: auto;
  padding: 2em;
  background: white;
  border-radius:10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.my-modal > button {
  margin:1em;
}
</style>
