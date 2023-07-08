<template>
  <div class="container">
    <div class="home" v-for="(products, index) in this.product" :key="index">
      <ProductCard
        :productData="products"
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
// import axios from 'axios'
export default {
  name: 'HomeView',
  components: {
    // HelloWorld,
    ProductCard,
  },
  data(){
    return {
      product: [
        {
          productCategory: 5,
          productId: 26,
          productName: 'Alienware XTreme Hardcore Tryhard Terminator 9000',
          productPrice: 15000,
          availableQty: 100,
          productDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error a quaerat facilis numquam temporibus vitae molestias assumenda quis natus, animi, modi autem ut nulla expedita hic voluptas nam, odio reprehenderit consequatur earum quas tenetur nostrum necessitatibus sequi. Nesciunt temporibus distinctio soluta nam est placeat ducimus! Animi repellat velit harum dolorum?',
          productCharacteristics: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, distinctio!',
          img: '1_img1',
        },
        {
          productCategory: 5,
          productId: 26,
          productName: 'Alienware XTreme Hardcore Tryhard Terminator 9000',
          productPrice: 15000,
          availableQty: 100,
          productDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error a quaerat facilis numquam temporibus vitae molestias assumenda quis natus, animi, modi autem ut nulla expedita hic voluptas nam, odio reprehenderit consequatur earum quas tenetur nostrum necessitatibus sequi. Nesciunt temporibus distinctio soluta nam est placeat ducimus! Animi repellat velit harum dolorum?',
          productCharacteristics: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, distinctio!',
          img: '1_img2',
        },
        {
          productCategory: 5,
          productId: 26,
          productName: 'Alienware XTreme Hardcore Tryhard Terminator 9000',
          productPrice: 15000,
          availableQty: 100,
          productDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error a quaerat facilis numquam temporibus vitae molestias assumenda quis natus, animi, modi autem ut nulla expedita hic voluptas nam, odio reprehenderit consequatur earum quas tenetur nostrum necessitatibus sequi. Nesciunt temporibus distinctio soluta nam est placeat ducimus! Animi repellat velit harum dolorum?',
          productCharacteristics: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, distinctio!',
          img: '1_img3',
        },
        {
          productCategory: 5,
          productId: 26,
          productName: 'Alienware XTreme Hardcore Tryhard Terminator 9000',
          productPrice: 15000,
          availableQty: 100,
          productDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error a quaerat facilis numquam temporibus vitae molestias assumenda quis natus, animi, modi autem ut nulla expedita hic voluptas nam, odio reprehenderit consequatur earum quas tenetur nostrum necessitatibus sequi. Nesciunt temporibus distinctio soluta nam est placeat ducimus! Animi repellat velit harum dolorum?',
          productCharacteristics: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, distinctio!',
          img: '1_img4',
        },
        {
          productCategory: 5,
          productId: 26,
          productName: 'Alienware XTreme Hardcore Tryhard Terminator 9000',
          productPrice: 15000,
          availableQty: 100,
          productDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error a quaerat facilis numquam temporibus vitae molestias assumenda quis natus, animi, modi autem ut nulla expedita hic voluptas nam, odio reprehenderit consequatur earum quas tenetur nostrum necessitatibus sequi. Nesciunt temporibus distinctio soluta nam est placeat ducimus! Animi repellat velit harum dolorum?',
          productCharacteristics: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, distinctio!',
          img: '1_img1',
        },
    
      ],
    }
  },
  async mounted(){
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
