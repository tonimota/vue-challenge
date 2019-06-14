<template>
  <div class="list">
    <ProductsCard v-for="(item, index) in data" :key="index" :product="item"/>
  </div>
</template>

<script>
import ProductsCard from './ProductsCard'

export default {
  props: {
    data: {
      type: Array,
      default: () => {}
    },
    btn: {
      type: Boolean,
      default: false
    }
  },
  components: {
    ProductsCard
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
