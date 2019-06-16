<template>
  <div class="list" :class="btn">
    <ProductsCard v-for="(item, index) in data" :key="index" :product="item" @update-products="updateProducts"/>
  </div>
</template>

<script>
import ProductsCard from './ProductsCard'

export default {
  props: {
    data: {
      type: Array,
      default: () => {},
      required: true
    },
    btn: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  components: {
    ProductsCard
  },
  methods: {
    updateProducts (product) {
      console.log('updateProducts')
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
