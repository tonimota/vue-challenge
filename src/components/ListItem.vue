<template>
  <div class="card">
    <div class="card-figure">
      <img :src="item.img" alt="Imagem não encontrada" title="Imagem não encontrada">
    </div>
    <div class="card-item">
      <p class="card-item-top">
        <span class="card-item-top_title overflow-line">{{item.title}}</span>
        <span class="card-item-top_description overflow-line">{{item.description}}</span>
      </p>
      <p class="card-item-bottom">
        <span class="card-item-bottom_qtd">Quantidade: {{item.qtd}}</span>
        <span class="card-item-bottom_price">{{item.currencyFormat}} {{currencyData}}</span>
      </p>
    </div>
    <div class="card-close">
      <span @click="removeItem(item)">x</span>
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
  computed: {
    currencyData: function () {
      return this.item.price.toFixed(2).replace('.', ',')
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

$font-size: 12px;
$line-height: 1.4;
$lines-to-show: 1;

.card {
  position: relative;
  max-width: 380px;
  height: 60px;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  &:hover {
    &::before {
      content: "";
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      z-index: 3;
      background-color: #000;
      opacity: 0.3;
      -webkit-transition: all 0.5s;
      transition: all 0.5s;
    }
    .card-close {
      color: #fff;
    }
  }
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
      &_price {
        float: right;
        color: #dfbd00;
        font-weight: bold;
      }
    }
  }
  &-close {
    z-index: 9999;
    :hover {
      color: #fff;
      cursor: pointer;
    }
  }
}
@media screen and (max-width: 767px) {
  .card {
    &-figure {
      min-width: 70px;
    }
  }
}
.overflow-line {
  display: block;
  display: -webkit-box;
  max-width: 100%;
  height: $font-size*$line-height*$lines-to-show; /* Fallback for non-webkit */
  margin: 0 auto;
  font-size: $font-size;
  line-height: $line-height;
  -webkit-line-clamp: $lines-to-show;
   /* autoprefixer: off */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
