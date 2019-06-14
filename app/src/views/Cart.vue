<template>
  <div class="container">
    <List :data="itens" @delete-item="deleleItem"/>
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
      itens: []
    }
  },
  mounted () {
    this.itens = getLocalStorage()
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
