<template>
  <div class="agileits-top">
    <form action="#" method="post" @submit.prevent="handleSubmit">

      <input class="text email"
             type="email"
             name="email"
             placeholder="Email"
             required=""
             v-model="email"
      >
      <input class="text"
             type="password"
             name="password"
             placeholder="Password"
             required=""
             v-model="password"
      >

      <input type="submit" value="Sign In">
    </form>
    <p>Don't have an Account?
      <router-link to="/registration"> Register Now!</router-link>
    </p>
  </div>
</template>

<script>
import '../assets/style/login.css'

export default {
  name: "Login",
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    async handleSubmit() {
      try {
        let userData = {
          email: this.email, password: this.password
        }
        await this.$store.dispatch('userLogin', userData)
        await this.$store.dispatch('getUserData')
        if (localStorage.getItem('token') === this.$store.getters.useData.user.token) {
          await this.$router.push('/')
        }
      } catch (e) {
      }
    }
  }
}
</script>

<style scoped>

</style>