<template>
  <div class="list">
    <div class="list-icon">
      <img src="@/assets/img/bag.png" alt="Carrinho de Produtos" title="Carrinho de Produtos">
      <span class="list-icon-title">Carrinho</span>
    </div>
    <ListItem v-for="(item, index) in data" :key="index" :item="item" @update-cart="updateCart"/>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem'

export default {
  props: {
    data: {
      type: Array,
      default: () => {}
    }
  },
  components: {
    ListItem
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
      &-title {
        display: block;
        color: #fff;
      }
    }
  }
</style>
