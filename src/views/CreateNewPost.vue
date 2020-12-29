<template>
  <section class="cta-section theme-bg-light  py-5">
    <div class="container">
      <h2 class="heading">New Post</h2>
      <form class="signup-form form-inline d-flex flex-column align-items-start" @submit.prevent="handleSubmit">
        <input type="text"
               name="title"
               v-model='title'
               class="border-0 mb-3 form-control"
               placeholder="Post title"/>

        <textarea type="text"
                  id="semail"
                  name="semail1"
                  class="form-control  border-0 mb-3"
                  placeholder="Post description"
                  v-model="description"
        />

        <button type="submit" class="btn btn-primary">Create</button>
      </form>
    </div><!--//container-->

  </section>

</template>

<script>
export default {
  name: "CreateNewPost",
  props: ['updateData'],

  data: () => ({
    title: '',
    description: '',
  }),
  methods: {
    async handleSubmit() {
      try {
        let token = localStorage.getItem('token')
        if (token === this.$store.getters.useData.user.token) {
          if (this.title !== '' && this.description !== '') {
            let data = {title: this.title, description: this.description}
            await this.$store.dispatch('createPost', data)
            this.title = ''
            this.description = ''
            this.updateData()
          }
        } else {
          alert('Pleas login ead')
          await this.$router.push('/login')
        }
      } catch (e) {
      }
    }
  }
}
</script>

<style scoped>

</style>