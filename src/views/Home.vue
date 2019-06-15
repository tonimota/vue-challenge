<template>
  <div class="wrapper">
    <div class="container">
      <img v-show="loading" class="loading" src="@/assets/img/basicloader.gif" alt="">
      <p v-if="!loading && !showList">{{messageErro}}</p>
      <span :class="visible ? 'visible' : ''" class="tooltip">Item adicionado</span>
      <Products v-show="showList" :data="products" @add-item="addItem"/>
    </div>
  </div>
</template>

<script>
import Products from '@/components/Products'
import { getAllProducts } from '@/service/api'
import { updateLocalStorage, getLocalStorage } from '@/plugins/localStorage'

export default {
  name: 'home',
  components: {
    Products
  },
  data () {
    return {
      products: null,
      newList: [],
      visible: false,
      loading: true,
      showList: false,
      messageErro: 'Not found Products, service temporarily down. Sorry for inconvenience'
    }
  },
  async mounted () {
    await getAllProducts()
      .then(data => {
        this.products = data.data.products
        this.hiddenLoadind()
      })
      .catch(err => {
        console.log(err)
        this.hiddenLoadind()
      })
  },
  methods: {
    addItem (product) {
      this.newList = getLocalStorage() !== null ? getLocalStorage() : this.newList
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
      updateLocalStorage(this.newList)
      this.showTooltip()
    },
    showTooltip () {
      this.visible = true
      setTimeout(() => {
        this.visible = false
      }, 1000)
    },
    hiddenLoadind () {
      setTimeout(() => {
        this.showList = true
        this.loading = false
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    margin-top: 80px;
    .container {
      max-width: 1200px;
      margin: 0 auto;
      position: relative;
      .tooltip {
        opacity: 0;
        position: fixed;
        right: 8%;
        top: 90px;
        width: 150px;
        padding: 10px;
        text-align: center;
        z-index: 1;
        background-color: rgba(223, 188, 0, 0.5);
        border-radius: 10px;
        -webkit-box-shadow: 6px 6px 8px 0px rgba(181,181,181,1);
        -moz-box-shadow: 6px 6px 8px 0px rgba(181,181,181,1);
        box-shadow: 6px 6px 8px 0px rgba(181,181,181,1);
        transition: 0.5s all;
      }
    }
  }
  .visible {
    opacity: 1!important;
  }
  @media screen and (max-width: 767px) {
    .wrapper {
      .container {
        width: 100%;
        max-width: 100%;
        position: relative;
        .tooltip {
          position: fixed;
          right: 20px;
          top: initial;
        }
      }
    }
  }
</style>
