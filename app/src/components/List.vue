<template>
  <div class="list">
    <Card v-for="(item, index) in data" :key="index" />
  </div>
</template>

<script>
import Card from './Card'

export default {
  props: {
    data: {
      type: Array,
      default: () => {}
    }
  },
  components: {
    Card
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
