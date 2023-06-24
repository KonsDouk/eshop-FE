<template>
  <DefaultWrapper
    :title="this.product.productName"
  >
    <div>
        <ProductLandingPage
        :productObject="product"
        :productImages="productImages"
        />
    </div>
  </DefaultWrapper>
</template>

<script>
import ProductLandingPage from '@/components/ProductLandingPage.vue';
import DefaultWrapper from '../components/DefaultWrapper.vue'
export default {
  components: {
    ProductLandingPage,
    DefaultWrapper,
  },

  data(){
    return {
      product: {
        productId: 1,
        productName: 'Alienware XTreme Hardcore Tryhard Terminator 9000',
        productPrice: 15000,
        availableQty: 100,
        productDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error a quaerat facilis numquam temporibus vitae molestias assumenda quis natus, animi, modi autem ut nulla expedita hic voluptas nam, odio reprehenderit consequatur earum quas tenetur nostrum necessitatibus sequi. Nesciunt temporibus distinctio soluta nam est placeat ducimus! Animi repellat velit harum dolorum?',
        productCharacteristics: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, distinctio!',
      },
      productImages: []
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