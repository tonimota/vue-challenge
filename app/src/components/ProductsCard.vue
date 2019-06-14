<template>
  <div>
    <div class="card" @click="addItem(product)">
      <div class="card-image">
        <img src="@/assets/img/notfound.png" alt="Imagem não encontrada">
      </div>
      <div class="card-content">
        <div class="card-content-media">
          <div class="card-content-media_detail">
            <p class="card-content-media_detail__title">{{product.title}}</p>
            <p class="card-content-media_detail__price">{{product.currencyFormat}} {{product.price}}</p>
            <p class="card-content-media_detail__description">{{product.description}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      newList: []
    }
  },
  methods: {
    addItem (product) {
      this.$emit('update-products', product)
    }
  }
}
</script>

<style lang="scss" scoped>
  .card {
    width: 280px;
    margin: 0 10px;
    &-image {
      img {
        max-width: 100%;
      }
    }
    &-content {
      &-media {
        &_detail {
          &__title {
            font-weight: bold;
          }
          &__price {
            font-weight: bold;
          }
        }
      }
    }
  }
</style>
