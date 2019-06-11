<template>
  <div class="container is-fluid">
    <img alt="Vue logo" src="../assets/logo.png">
    <List></List>
  </div>
</template>

<script>
// @ is an alias to /src
import List from '@/components/List'
import { getAllProducts } from '@/service/api'

export default {
  name: 'home',
  components: {
    List
  },
  async mounted () {
    await getAllProducts()
      .then(data => {
        console.log(data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>
