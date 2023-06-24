<template>
    <div>
      <ProductLandingPage
      :productObject="product"
      />
    </div>
</template>

<script>
import ProductLandingPage from '@/components/ProductLandingPage.vue';
export default {
  components: {
    ProductLandingPage,

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
      }
    }
  },
  async mounted(){

  }
}
</script>

<style>

</style>