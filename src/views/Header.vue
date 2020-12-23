<template>
  <header class="header text-center">
    <h1 class="blog-name pt-lg-4 mb-0">
      <router-link to="/">Anthony's Blog</router-link>
    </h1>
    <nav class="navbar navbar-expand-lg navbar-dark">
      <button class="navbar-toggler" type="button"
              data-toggle="collapse"
              data-target="#navigation"
              aria-controls="navigation"
              aria-expanded="false"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navigation" class="collapse navbar-collapse flex-column">
        <div class="profile-section pt-3 pt-lg-0">
          <img class="profile-image mb-3 rounded-circle mx-auto" src="@/assets/images/profile.png" alt="image">
          <div class="bio">
            <p>{{ this.$store.getters.useData.user.name }} {{ this.$store.getters.useData.user.last_name }}</p>
            <p>{{ this.$store.getters.useData.user.birth_date }}</p>
          </div>
          <hr>
        </div>
        <ul class="navbar-nav flex-column text-left">
          <li
              v-for="list in menuList"
              class="nav-item"
              :class="{active:list.active}"
              :key="list.id"
              @click="handleClick"
          >
            <router-link
                class="nav-link"
                :to="list.to">
              <i :class='list.icon'/>
              {{ list.title }}
            </router-link>
          </li>
        </ul>
        <div class="my-2 my-md-3">
          <span @click="handleClickBack">
             <router-link class="btn btn-primary" to="/login">Exit</router-link>
          </span>

        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    menuList: [
      {
        id: 1,
        to: '/',
        active: true,
        icon: "fas fa-user fa-fw mr-2",
        title: 'Blog Home',
      },
      {id: 2, to: '/blog-posts', active: false, icon: "fas fa-bookmark fa-fw mr-2", title: 'Blog Post',},
      {id: 3, to: '/about', active: false, icon: "fas fa-user fa-fw mr-2", title: 'About Me',}
    ],


  }),
  methods: {
    handleClick(e) {
      let link = e.target.href.split('/')
      this.menuList.filter(v => v.to === `/${link[link.length - 1]}` ? v.active = true : v.active = false)
    },
    async handleClickBack() {
      try {
        await this.$store.dispatch('logout')
        localStorage.removeItem('token')
      } catch (e) {
      }
    }
  },
  async mounted() {
    await this.$store.dispatch('getUserData')
    console.log(this.$store.getters.useData.user);
  }
}
</script>

<style scoped>

</style>