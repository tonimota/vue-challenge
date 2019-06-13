<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="container">
      <List :data="products " />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import List from '@/components/List'
import { getAllProducts } from '@/service/api'

export default {
  name: 'home',
  components: {
    List
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
