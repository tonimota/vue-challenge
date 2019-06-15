<template>
  <div class="wrapper">
    <div class="container">
      <List :data="itens" @delete-item="deleleItem" :cart="cart"/>
    </div>
  </div>
</template>

<script>
import List from '@/components/List'
import { updateLocalStorage, getLocalStorage } from '@/plugins/localStorage'

export default {
  name: 'Cart',
  components: {
    List
  },
  data () {
    return {
      itens: [],
      cart: {
        totalItens: 0,
        totalOrder: 0,
        totalInstallments: 0
      }
    }
  },
  mounted () {
    this.itens = getLocalStorage()
    this.calcTotalItens()
  },
  methods: {
    deleleItem (item) {
      this.itens = getLocalStorage()
      this.itens.forEach((product, index) => {
        if (product.sku === item.sku) {
          if (product.qtd === 1) {
            this.itens.splice(index, 1)
          } else {
            this.$set(product, 'qtd', product.qtd - 1)
          }
        }
      })
      updateLocalStorage(this.itens)
      this.calcTotalItens()
    },
    calcTotalItens () {
      const cart = getLocalStorage()
      let totalItens = 0
      let totalOrder = 0
      let totalInstallments = 0
      if (cart !== null) {
        cart.forEach((index) => {
          totalItens = totalItens + index.qtd
          totalOrder = totalOrder + (index.qtd * index.price)
        })
        totalInstallments = (totalOrder / 10).toFixed(2).replace('.', ',')
        totalOrder = totalOrder.toFixed(2).replace('.', ',')
      }
      this.cart = {
        totalItens,
        totalOrder,
        totalInstallments
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    margin-top: 90px;
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
  }
</style>
