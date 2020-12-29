<template>
  <div class="agileits-top">
    <form action="#" @submit.prevent="handleSubmit" method="post">
      <input class="text" v-model="name" type="text" name="name" placeholder="Username" required="">
      <input class="text email" v-model="last_name" type="text" name="last_name" placeholder="last name" required="">
      <input class="text email" v-model="email" type="email" name="email" placeholder="Email" required="">
      <input class="text" v-model="password" type="password" name="password" placeholder="Password" required="">
      <input class="text w3lpass" v-model="confirmed_password" type="password" name="password"
             placeholder="Confirm Password" required="">
      <input class="date_inp" type="date" name="date" v-model="birth_date" id="">

      <div class="wthree-text">
        <label class="anim">
          <input type="checkbox" class="checkbox" required="">
          <span>I Agree To The Terms & Conditions</span>
        </label>
        <div class="clear"></div>
      </div>
      <input type="submit" value="Sign Up">
    </form>

    <p>Go to login
      <router-link to="/login"> Login Now!</router-link>
    </p>
  </div>
</template>

<script>
import '../assets/style/login.css'
import {mapGetters} from 'vuex'

export default {
  name: "Registration",
  data: () => ({
    name: '',
    last_name: '',
    birth_date: '',
    password: '',
    confirmed_password: '',
    email: ''

  }),
  methods: {
    async handleSubmit() {
      try {
        const data = {
          name: this.name,
          last_name: this.last_name,
          birth_date: this.birth_date,
          password: this.password,
          confirmed_password: this.confirmed_password,
          email: this.email,
        }
        await this.$store.dispatch('userRegistration', data)
        if (this.$store.getters.registrationStatus === 'OK') {
          await this.$router.push('/login')
          this.name = ''
          this.last_name = ''
          this.birth_date = ''
          this.password = ''
          this.confirmed_password = ''
          this.email = ''
        }
      } catch (e) {
      }
    }
  }
}
</script>

<style scoped>

</style>