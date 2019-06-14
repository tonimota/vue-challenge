<template>
  <div class="container">
    <List :data="itens" @delete-item="deleleItem"/>
  </div>
</template>

<script>
import List from '@/components/List'

export default {
  name: 'Cart',
  components: {
    List
  },
  data () {
    return {
      itens: []
    }
  },
  mounted () {
    this.getLocalStorage()
  },
  methods: {
    getLocalStorage () {
      let cart = JSON.parse(localStorage.getItem('cart'))
      if (cart !== null) this.itens = cart
    },
    deleleItem (item) {
      this.getLocalStorage()
      this.itens.forEach((product, index) => {
        if (product.sku === item.sku) {
          if (product.qtd === 1) {
            this.itens.splice(index, 1)
          } else {
            this.$set(product, 'qtd', product.qtd - 1)
          }
        }
      })
      this.updateLocalStorageList()
    },
    updateLocalStorageList () {
      localStorage.setItem('cart', JSON.stringify(this.itens))
      this.getLocalStorage()
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
