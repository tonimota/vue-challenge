<template>
  <div>
    <div class="container">
      <Products :data="products" @add-item="addItem"/>
    </div>
  </div>
</template>

<script>
import Products from '@/components/Products'
import { getAllProducts } from '@/service/api'
import { updateLocalStorage, getLocalStorage } from '@/plugins/localStorage'

export default {
  name: 'home',
  components: {
    Products
  },
  data () {
    return {
      products: null,
      newList: []
    }
  },
  async mounted () {
    await getAllProducts()
      .then(data => {
        this.products = data.data.products
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {
    addItem (product) {
      this.newList = getLocalStorage() !== null ? getLocalStorage() : this.newList
      let add = false
      this.newList.forEach((index) => {
        if (index.sku === product.sku) {
          if (index.qtd === undefined) {
            this.$set(index, 'qtd', 2)
          } else {
            this.$set(index, 'qtd', index.qtd + 1)
          }
          add = true
        }
      })
      if (!add) {
        this.$set(product, 'qtd', 1)
        this.newList.push(product)
      }
      updateLocalStorage(this.newList)
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
</style>
