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
    if (!localStorage.getItem('token')) {
      await this.$router.push('/login')
    }
  },
  components: {
    EmptyLayout, MainLayout
  },

}
</script>
<style lang="scss">

</style>
