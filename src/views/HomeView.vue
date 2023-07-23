<template>
  <div class="container">
    <div class="home" v-for="(products, index) in this.products" :key="index">
      <ProductCard
        :productData="products"
        :name="products.name"
        :price="products.price"
        :description="products.description"
        :quantity="products.quantity"
        :mainPhoto="products.product_photos[0]"
        :photos="products.product_photos"
        :id="products.id"
      >
      </ProductCard>


      <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import ProductCard from '../components/ProductCard.vue'
import axios from 'axios'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld,
    ProductCard,
  },
  data(){
    return {
      products: null,

    }
  },
  async mounted(){
    await axios.get('/api/products')
    .then((response) => {
      this.products = response.data
    })
    console.log('products', this.products)
    // let x = axios.get('/api/customers')
    
  },
  methods: {
    // goToLandingPage(){
    
    // }
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
</style>
