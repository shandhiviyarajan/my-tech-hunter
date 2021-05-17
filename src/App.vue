<template>
  <transition name="fade">
    <router-view/>
  </transition>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style lang="sass">
@import "assets/sass/app.scss"
</style>


