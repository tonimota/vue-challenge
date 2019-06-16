<template>
  <div class="list">
    <ProductsCard v-for="(item, index) in data" :key="index" :product="item" @update-products="updateProducts"/>
  </div>
</template>

<script>
import ProductsCard from './ProductsCard'

export default {
  props: {
    data: {
      type: Array,
      default: () => {}
    }
  },
  components: {
    ProductsCard
  },
  methods: {
    updateProducts (product) {
      this.$emit('add-item', product)
    }
  }
}
</script>

<style lang="scss" scoped>
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
