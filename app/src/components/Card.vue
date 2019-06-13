<template>
  <div class="card">
    <div class="card-image">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">John Smith</p>
          <p class="subtitle is-6">@johnsmith</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .card {
    max-width: 280px;
    margin: 0 10px;
    &-image {
      img {
        max-width: 100%;
      }
    }
  }
</style>
