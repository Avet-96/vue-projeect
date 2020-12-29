<template>
  <div class="modal_container">
    <div class="modal-dialog margin_d">
      <div class="modal-content">
        <div class="modal-header">
          <div>
            <h3 class="modal-title" id="modal-register-label">Update Post data</h3>
            <p class="mt-2">{{ updatingData.user.name }}</p>
          </div>

          <button type="button" class="abtton close" data-dismiss="modal" @click="closedMo">
            <span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
          </button>

        </div>
        <div class="modal-body">

          <form role="form" action="" method="post" class="registration-form" @submit.prevent="handleSubmit">
            <div class="form-group">
              <label class="sr-only" for="form-email">Title</label>
              <input
                  type="text"
                  name="title"
                  placeholder="Enter new title..."
                  class="ainput  form-control"
                  id="form-email"
                  :value="updatingData.title"
                  @change="handleChangeTitle"

              />
            </div>
            <div class="form-group">
              <label class="sr-only" for="form-about-yourself">About yourself</label>
              <textarea
                  name="description"
                  placeholder="About yourself..."
                  class=".atextarea form-about-yourself form-control"
                  id="form-about-yourself"
                  :value="updatingData.description"
                  @change="handleChangeDescription"
              />
            </div>
            <button type="submit" class="abutton btn">Create</button>
          </form>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
import '../assets/modal.css'

export default {
  name: "Modal",
  props: ['closedModal', 'updatingData'],
  data: () => ({
    title: '',
    description: ''
  }),
  methods: {
    closedMo() {
      this.closedModal();
    },
    async handleSubmit() {
      try {
        let data = {
          id: this.updatingData.id,
          title: !this.title.length ? this.updatingData.title : this.title,
          description: !this.description.length ? this.updatingData.description : this.description,
        }
        let d = await this.$store.dispatch('updatePostData', {...data})
        console.log(d)
        await this.closedMo()

      } catch (e) {
      }
    },
    handleChangeDescription(e) {
      this.description = e.target.value
    },
    handleChangeTitle(e) {
      !e.target.value.length ? this.title = this.updatingData.title : this.title = e.target.value
    },
  },


}
</script>

<style scoped>

</style>