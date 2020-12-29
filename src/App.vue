<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>
<script>
import EmptyLayout from "@/layout/EmptyLayout";
import MainLayout from "@/layout/MainLayout";

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  async mounted() {
    // await this.$store.dispatch('getUserData')
    // let link = window.location.pathname
    // let token = localStorage.getItem('token')
    // if (this.$store.getters.useData.length > 0) {
    //   let isLogin = token === this.$store.getters.useData.user.token
    //   if (isLogin && (link === '/login' || link === '/registration')) {
    //     await this.$router.push('/')
    //   }
    // } else {
    //   await this.$router.push('/login')
    // }

    // console.log(link === '/login')

    if (!localStorage.getItem('token')) {
      await this.$router.push('/login')
    } else {
      await this.$router.push('/')
    }
  },
  components: {
    EmptyLayout, MainLayout
  },

}
</script>
<style lang="scss">

</style>
