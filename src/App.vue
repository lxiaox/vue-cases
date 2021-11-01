<template>
  <div id="app">
    <!-- <eight-queen></eight-queen> -->
    <resize-demo></resize-demo>
  </div>
</template>

<script>
import ResizeDemo from './components/ResizeDemo.vue'
export default {
  name: 'App',
  components: { ResizeDemo },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
