<template>
  <div class="pos-relative">
    <CreateNewPost
        :updateData="updateData"
    />
    <div class="modal_block" :class="{'d-none':!isOpen}">
      <Modal
          :closedModal="closedModal"
          :updatingData="updatingData"
      />
    </div>
    <section class="blog-list px-3 py-5 p-md-5">
      <div class="container">
        <div class="item mb-5" v-for="item  of allPost" :key="item.id">
          <div class="media">
            <img class="mr-3 img-fluid post-thumb d-none d-md-flex" :src="img"
                 :alt="item.alt">
            <div class="media-body">
              <h3 class="title mb-1"><a href="blog-post.html">{{ item.title }}</a></h3>
              <div class="meta mb-1"><span class="date">{{ item.created_at }}</span>
              </div>
              <div class="intro">
                {{ item.description }}
              </div>
              <h5 class="mt-3">{{ item.user.name }} {{ item.user.last_name }}
              </h5>
              <a class="more-link" href="blog-post.html">Read more &rarr;</a>
              <div class="d-flex justify-content-end" v-if="user_id === item.user.id">
                <button class="btn btn-danger" @click="deletePost(item.id)"><span
                    class="h6 text-center">delete</span></button>
                <button class="btn btn-info ml-3" @click="updatePost(item)"><span
                    class="h6 text-center">update</span>
                </button>
              </div>

            </div><!--//media-body-->

          </div><!--//media-->

        </div><!--//item-->
        <nav class="blog-nav nav nav-justified my-5">
          <a class="nav-link-prev nav-item nav-link d-none rounded-left" href="#">Previous<i
              class="arrow-prev fas fa-long-arrow-alt-left"></i></a>
          <a class="nav-link-next nav-item nav-link rounded" href="blog-list.html">Next<i
              class="arrow-next fas fa-long-arrow-alt-right"></i></a>
        </nav>
      </div>
    </section>
  </div>

</template>

<script>
// @ is an alias to /src

import Header from "@/views/Header";
import img from '@/assets/images/blog/blog-post-thumb-3.jpg'
import CreateNewPost from "@/views/CreateNewPost";
import Modal from "@/views/Modal";

export default {
  name: 'Home',
  components: {Modal, CreateNewPost, Header},
  data: () => ({
    img: img,
    allPost: {},
    user_id: null,
    isOpen: false,
    updatingData: {
      user: {}
    }
  }),
  methods: {
    async closedModal() {
      this.isOpen = false
      await this.$store.dispatch('allPosts', {offset: 0})
      this.allPost = this.$store.state.posts.postsData.all;

    },
    updatePost(item) {
      this.updatingData = item
      this.isOpen = true
    },
    async updateData() {
      await this.$store.dispatch('allPosts', {offset: 0})
      this.allPost = this.$store.state.posts.postsData.all;
    },
    async deletePost(id) {
      await this.$store.dispatch('deletePost', {id})
      await this.updateData()
    }
  },
  async mounted() {
    await this.$store.dispatch('allPosts', {offset: 0})
    this.allPost = this.$store.state.posts.postsData.all;
    this.user_id = this.$store.state.auth.data.user.id
  }
}
</script>
