<template>
  <div>
    <div class="card" @click="addItem(product)">
      <div class="card-image">
        <span class="card-image-link">
          <img class="card-image-link-icon" src="@/assets/img/buy.png" alt="Imagem não encontrada" title="Imagem não encontrada">
          <img class="card-image-link-bg" src="@/assets/img/camisa.jpg" alt="Imagem não encontrada" title="Imagem não encontrada">
        </span>
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
      &-link {
        display: block;
        position: relative;
        cursor: pointer;
        &-icon {
          position: absolute;
          left: 40%;
          top: 35%;
          width: 50px;
          opacity: 0;
        }
        &-bg {
          max-width: 100%;
          transition: 0.5s all;
        }
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
  .card {
    &:hover {
      .card-image-link-icon {
        opacity: 1;
      }
      .card-image-link-bg {
        opacity: 0.5;
      }
    }
  }
</style>
