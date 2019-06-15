<template>
  <div class="total-cart">
    <p class="total-cart-description">
      <span class="total-cart-description-title">Subtotal</span>
      <span class="total-cart-description-total">R$ <strong>{{cart.totalOrder}}</strong><em>ou em até 10x de R$ {{cart.totalInstallments}}</em></span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    cart: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
  .total-cart {
    height: 60px;
    &-description {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
      color: #fff;
      font-size: 12px;
      &-total {
        strong {
          font-size: 18px;
          color: #dfbd00;
        }
        em {
          display: block;
        }
      }
    }
  }
</style>
