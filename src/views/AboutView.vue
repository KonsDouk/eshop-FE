<template>
  <DefaultWrapper
    
  >
    <div>
        <!-- <ProductLandingPage
        :productObject="product"
        :productImages="productImages"
        /> -->
        <!-- <TableComponent
          :dataSource="customers"
        /> -->
        <ProductCard
          :productData="product"
        >

        </ProductCard>
    </div>
  </DefaultWrapper>
</template>

<script>
// import ProductLandingPage from '@/components/ProductLandingPage.vue';
import DefaultWrapper from '../components/DefaultWrapper.vue'
// import TableComponent from '../components/TableComponent.vue'
import ProductCard from '../components/ProductCard.vue'
export default {
  components: {
    // ProductLandingPage,
    DefaultWrapper,
    // TableComponent,
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
    
      ],
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

      

    }
  },

  async mounted(){
    //this.productImages = this.imagesFromCall.split('|')
    this.productImages = ['1_img1', '1_img2', '1_img3', '1_img4']
  }
}

</script>

<style scoped>

</style>