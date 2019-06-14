<template>
  <div>
    <div class="container">
      <Products :data="products" />
    </div>
  </div>
</template>

<script>
import Products from '@/components/Products'
import { getAllProducts } from '@/service/api'

export default {
  name: 'home',
  components: {
    Products
  },
  data () {
    return {
      products: null
    }
  },
  async mounted () {
    await getAllProducts()
      .then(data => {
        console.log(data.data.products)
        this.products = data.data.products
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style lang="scss" scoped>
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
</style>
