<template>
  <div>
    <Header/>
    <div class="main-wrapper">
      <router-view/>
    </div>
    <footer class="footer text-center py-2 theme-bg-dark">
      <small class="copyright">Designed with by <a href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying
        Riley</a> for developers</small>
    </footer>
  </div>
</template>

<script>


import Home from "@/views/BlogList";
import Header from "@/views/Header";

export default {
  name: "MainLayout",
  components: {Home, Header},

}
</script>

<style scoped>

</style>