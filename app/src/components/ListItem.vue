<template>
  <div class="card">
    <div class="card-figure">
      <img src="@/assets/img/notfound.png" alt="Imagem não encontrada" title="Imagem não encontrada">
    </div>
    <div class="card-item">
      <p class="card-item-top">
        <span class="card-item-top_title">{{item.title}}</span>
        <span class="card-item-top_description">{{item.description}}</span>
      </p>
      <p class="card-item-bottom">
        <span class="card-item-bottom_qtd">Quantidade: {{item.qtd}}</span>
        <span class="card-item-bottom_price">{{item.currencyFormat}} {{item.price}}</span>
      </p>
    </div>
    <div class="card-close">
      <span @click="removeItem(item)">X</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    removeItem (item) {
      this.$emit('update-cart', item)
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  max-width: 380px;
  height: 60px;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  &:first-child {
    border-top: 1px solid rgba(0, 0, 0, 0.5);
  }
  &-figure {
    min-width: 100px;
    max-width: 100px;
    height: 100%;
    img {
      width: 50px;
    }
  }
  &-item {
    width: 100%;
    padding: 0px 10px;
    display: flex;
    align-content: space-between;
    flex-direction: column;
    color: #fff;
    text-align: left;
    font-size: 14px;
    p {
      margin: 0px;
    }
    &-top {
      flex: 1;
      margin-top: 0px;
      &_title {
        display: block;
      }
    }
    &-bottom {
      flex: 1;
        line-height: 29px;
      &_qtd {

      }
      &_price {
        float: right;
        color: #dfbd00;
        font-weight: bold;
      }
    }
  }
  &-close {
    :hover {
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>
