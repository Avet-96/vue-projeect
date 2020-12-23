<template>
  <div>
    <CreateNewPost/>
    <section class="blog-list px-3 py-5 p-md-5">
      <div class="container">
        <div class="item mb-5" v-for="item  in listData" :key="item.id">
          <div class="media">
            <img class="mr-3 img-fluid post-thumb d-none d-md-flex" :src="item.img"
                 :alt="item.alt">
            <div class="media-body">
              <h3 class="title mb-1"><a href="blog-post.html">{{ item.title }}</a></h3>
              <div class="meta mb-1"><span class="date">{{ item.date }}</span><span
                  class="time">{{ item.commentTitle }}</span><span class="comment"><a href="#">{{
                  item.comment
                }}</a></span>
              </div>
              <div class="intro">{{ item.text }}
              </div>
              <a class="more-link" href="blog-post.html">Read more &rarr;</a>
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

export default {
  name: 'Home',
  components: {CreateNewPost, Header},
  data: () => ({
    listData: [
      {
        id: 1,
        img: img,
        alt: 'img',
        link: '/blog-post',
        title: 'Why Every Developer Should Have A Blog',
        date: 'Published 2 days ago',
        commentTitle: '5 min read',
        comment: '8 comments',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium assumenda error laborum placeat quam, quidem sint. Adipisci commodi, consequuntur dolor fugit in incidunt, iure non similique sint velit veritatis.\n'
      },
      {
        id: 4,
        img: img,
        alt: 'img',
        link: '/blog-post',
        title: 'Why Every Developer Should Have A Blog',
        date: 'Published 2 days ago',
        commentTitle: '5 min read',
        comment: '8 comments',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium assumenda error laborum placeat quam, quidem sint. Adipisci commodi, consequuntur dolor fugit in incidunt, iure non similique sint velit veritatis.\n'
      },
      {
        id: 3,
        img: img,
        alt: 'img',
        link: '/blog-post',
        title: 'Why Every Developer Should Have A Blog',
        date: 'Published 2 days ago',
        commentTitle: '5 min read',
        comment: '8 comments',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium assumenda error laborum placeat quam, quidem sint. Adipisci commodi, consequuntur dolor fugit in incidunt, iure non similique sint velit veritatis.\n'
      },
    ]
  })
}
</script>
