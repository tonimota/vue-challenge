<template>
  <div>
    <div class="card" @click="addItem(product)">
      <div class="card-image">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
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
      this.getLocalStorage()
      let add = false
      this.newList.forEach((index) => {
        if (index.sku === product.sku) {
          if (index.qtd === undefined) {
            this.$set(index, 'qtd', 2)
          } else {
            this.$set(index, 'qtd', index.qtd + 1)
          }
          add = true
        }
      })
      if (!add) {
        this.$set(product, 'qtd', 1)
        this.newList.push(product)
      }
      this.updateLocalStorageList()
    },
    updateLocalStorageList () {
      localStorage.setItem('cart', JSON.stringify(this.newList))
      this.getLocalStorage()
    },
    getLocalStorage () {
      let cart = JSON.parse(localStorage.getItem('cart'))
      if (cart !== null) this.newList = cart
    }
  }
}
</script>

<style lang="scss" scoped>
  .card {
    max-width: 280px;
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
