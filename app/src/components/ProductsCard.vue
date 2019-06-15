<template>
  <div>
    <div class="card" @click="addItem(product)">
      <div class="card-image">
        <span class="card-image-link">
          <span class="card-image-link-icon">Buy</span>
          <img class="card-image-link-bg" src="@/assets/img/camisa.jpg" :alt="product.title" :title="product.title">
        </span>
      </div>
      <div class="card-content">
        <div class="card-content-media">
          <div class="card-content-media_detail">
            <p class="card-content-media_detail__title">{{product.title}}</p>
            <p class="card-content-media_detail__price">
              <span>{{product.currencyFormat}} </span>
              <strong>{{product.price}}</strong>
            </p>
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
    position: relative;
    overflow: hidden;
    &-image {
      &-link {
        display: block;
        position: relative;
        cursor: pointer;
        &-icon {
          position: absolute;
          left: 40%;
          /* top: 50%; */
          width: 50px;
          opacity: 0;
          color: #000;
          font-weight: bold;
          font-size: 24px;
          line-height: 280px;
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
            &::before {
              content: "";
              width: 20px;
              height: 3px;
              display: block;
              margin: 0 auto;
              background-color: #dfbc00;
              transition: all 0.5s;
            }
            span {
              font-size: 12px;
            }
            strong {
              font-size: 24px;
            }
          }
        }
      }
    }
  }
  .card {
    &:hover {
      .card {
        &-image {
          &-link {
            &-icon {
              opacity: 1;
            }
            &-bg {
              opacity: 0.5;
            }
          }
        }
        &-content {
          &-media {
            &_detail {
              &__price {
                &::before {
                  width: 100px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
