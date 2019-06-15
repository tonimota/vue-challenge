<template>
  <div class="list">
    <div class="list-icon">
      <img src="@/assets/img/bag.png" alt="Carrinho de Produtos" title="Carrinho de Produtos">
      <span class="list-icon-qtd">
        <strong>{{cart.totalItens}}</strong>
      </span>
      <span class="list-icon-title">Cart</span>
    </div>
    <div class="list-itens">
      <ListItem v-for="(item, index) in data" :key="index" :item="item" @update-cart="updateCart"/>
    </div>
    <ListTotal :cart="cart" />
  </div>
</template>

<script>
import ListItem from '@/components/ListItem'
import ListTotal from '@/components/ListTotal'

export default {
  props: {
    data: {
      type: Array,
      default: () => {}
    },
    cart: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    ListItem,
    ListTotal
  },
  data () {
    return {
      itens: []
    }
  },
  methods: {
    updateCart (e) {
      this.$emit('delete-item', e)
    }
  }
}
</script>

<style lang="scss" scoped>
  .list {
    max-width: 400px;
    padding: 20px;
    min-height: 300px;
    margin: 0 auto;
    background-color: #202025;
    &-icon {
      position: relative;
      &-qtd {
        width: 100%;
        position: absolute;
        bottom: 30px;
        left: 0px;
        strong {
          font-size: 12px;
          width: 20px;
          height: 20px;
          display: block;
          margin: 0 auto;
          line-height: 20px;
          background-color: yellow;
          border-radius: 50%;
        }
      }
      &-title {
        text-transform: uppercase;
        display: block;
        margin: 10px 0px;
        color: #fff;
        font-weight: bold;
      }
    }
    &-itens {
      height: 320px;
      overflow-y: scroll;
    }
  }
  @media screen and (max-width: 767px) {
    .list {
      width: 100%;
      max-width: 100%;
      padding: 0px;
      margin: 0;
      &-icon {
        padding-top: 10px;
      }
      &-itens {
        height: auto;
      }
    }
  }
</style>
