<template>
  <div id="app">
    <Index></Index>
  </div>
</template>

<script>
import Index from './components/index';
export default {
  name: 'App',
  components: {
    Index
  },
  mounted() {
    var dpr = window.devicePixelRatio;
    var meta = document.createElement('meta');

    // dpr
    meta.setAttribute('content', 'initial-scale=' + 1/dpr + ', maximum-scale=' + 1/dpr + ', minimum-scale=' + 1/dpr + ', user-scalable=no');
    document.getElementsByTagName('head')[0].appendChild(meta);

    // rem
    document.addEventListener('DOMContentLoaded', function () {
      document.getElementsByTagName('html')[0].style.fontSize = window.innerWidth / 10 + 'px';
    }, false);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
