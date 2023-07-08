<template>
  <DefaultWrapper
    
  >
    <div>
        <img v-if="this.photo" :key="this.refreshKey" :src="this.photo" alt="test">
        <ProductLandingPage
        :productObject="product"
        :productImages="productImages"
        />
        <TableComponent
          :dataSource="customers"
        />
        <ProductCard
          :productData="product"
        >

        </ProductCard>
    </div>
  </DefaultWrapper>
</template>

<script>
import ProductLandingPage from '@/components/ProductLandingPage.vue';
import DefaultWrapper from '../components/DefaultWrapper.vue'
import TableComponent from '../components/TableComponent.vue'
import ProductCard from '../components/ProductCard.vue'
import {v4 as uuidv4} from 'uuid'
// import axios from 'axios'
export default {
  components: {
    ProductLandingPage,
    DefaultWrapper,
    TableComponent,
    ProductCard,
  },

  data(){
    return {
      product: {
          productCategory: 5,
          productId: 26,
          productName: 'Alienware XTreme Hardcore Tryhard Terminator 9000',
          productPrice: 15000,
          availableQty: 100,
          productDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error a quaerat facilis numquam temporibus vitae molestias assumenda quis natus, animi, modi autem ut nulla expedita hic voluptas nam, odio reprehenderit consequatur earum quas tenetur nostrum necessitatibus sequi. Nesciunt temporibus distinctio soluta nam est placeat ducimus! Animi repellat velit harum dolorum?',
          productCharacteristics: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, distinctio!',
          img: '1_img4',
        },
      // product: [
      //   {
      //     productCategory: 5,
      //     productId: 26,
      //     productName: 'Alienware XTreme Hardcore Tryhard Terminator 9000',
      //     productPrice: 15000,
      //     availableQty: 100,
      //     productDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error a quaerat facilis numquam temporibus vitae molestias assumenda quis natus, animi, modi autem ut nulla expedita hic voluptas nam, odio reprehenderit consequatur earum quas tenetur nostrum necessitatibus sequi. Nesciunt temporibus distinctio soluta nam est placeat ducimus! Animi repellat velit harum dolorum?',
      //     productCharacteristics: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, distinctio!',
      //     img: '1_img1',
      //   },
      //   {
      //     productCategory: 5,
      //     productId: 26,
      //     productName: 'Alienware XTreme Hardcore Tryhard Terminator 9000',
      //     productPrice: 15000,
      //     availableQty: 100,
      //     productDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error a quaerat facilis numquam temporibus vitae molestias assumenda quis natus, animi, modi autem ut nulla expedita hic voluptas nam, odio reprehenderit consequatur earum quas tenetur nostrum necessitatibus sequi. Nesciunt temporibus distinctio soluta nam est placeat ducimus! Animi repellat velit harum dolorum?',
      //     productCharacteristics: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, distinctio!',
      //     img: '1_img2',
      //   },
      //   {
      //     productCategory: 5,
      //     productId: 26,
      //     productName: 'Alienware XTreme Hardcore Tryhard Terminator 9000',
      //     productPrice: 15000,
      //     availableQty: 100,
      //     productDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error a quaerat facilis numquam temporibus vitae molestias assumenda quis natus, animi, modi autem ut nulla expedita hic voluptas nam, odio reprehenderit consequatur earum quas tenetur nostrum necessitatibus sequi. Nesciunt temporibus distinctio soluta nam est placeat ducimus! Animi repellat velit harum dolorum?',
      //     productCharacteristics: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, distinctio!',
      //     img: '1_img3',
      //   },
      //   {
      //     productCategory: 5,
      //     productId: 26,
      //     productName: 'Alienware XTreme Hardcore Tryhard Terminator 9000',
      //     productPrice: 15000,
      //     availableQty: 100,
      //     productDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error a quaerat facilis numquam temporibus vitae molestias assumenda quis natus, animi, modi autem ut nulla expedita hic voluptas nam, odio reprehenderit consequatur earum quas tenetur nostrum necessitatibus sequi. Nesciunt temporibus distinctio soluta nam est placeat ducimus! Animi repellat velit harum dolorum?',
      //     productCharacteristics: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, distinctio!',
      //     img: '1_img4',
      //   },
    
      // ],
      customers: [
        {
          customerId: 1,
          fName: 'John',
          lName: 'Doe',
          email: 'john@doe.com',
          phone: '123450987',
          cellPhone: '6911223344',
          address: 'Pantou Meno',
          streetNo: '22',
          isActive: true

        },
        {
          customerId: 2,
          fName: 'Jane',
          lName: 'Doe',
          email: 'jane@doe.com',
          phone: '7654321',
          cellPhone: '6911223344',
          address: 'Edo Meno',
          streetNo: '33',
          isActive: false
        }
      ],
      productImages: [],
      photo: null,
      refreshKey:uuidv4(),

      

    }
  },

  async mounted(){
    // let x = await axios.get('/api/customers')
    // console.log("x orders", x)

    // let y = await axios.get('/api/products')
    // console.log('y products', y )

    // await axios.get('/api/products_photos')
    // .then((response) => {
    //   this.photo = 'localhost:80/' +response.data[0].src
    //   console.log("response", response)
    //   console.log("this.photo", this.photo)
    //   console.log('z photos', response)
    //   this.refreshKey = uuidv4()
    // })


    //this.productImages = this.imagesFromCall.split('|')
    this.productImages = ['1_img1', '1_img2', '1_img3', '1_img4']
  }
}

</script>

<style scoped>

</style>