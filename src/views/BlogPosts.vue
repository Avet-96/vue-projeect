<template>
  <div>
    <article class="blog-post px-3 py-5 p-md-5">
      <div class="container">
        <header class="blog-post-header">
          <h2 class="title mb-2">Why Every Developer Should Have A Blog</h2>
          <div class="meta mb-3"><span class="date">Published 3 months ago</span><span
              class="time">5 min read</span><span class="comment"><a href="#">4 comments</a></span></div>
        </header>

        <div class="blog-post-body">

          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
            fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
            justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper
            nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
            enim. </p>

          <h3 class="mt-5 mb-3">Code Block Example</h3>
          <p>You can get more info at <a href="https://highlightjs.org/" target="_blank">https://highlightjs.org/</a>.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
            fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
            justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper
            nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
          </p>
          <h3 class="mt-5 mb-3">Typography</h3>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          <h5 class="my-3">Bullet Points:</h5>
          <ul class="mb-5">
            <li class="mb-2">Lorem ipsum dolor sit amet consectetuer.</li>
            <li class="mb-2">Aenean commodo ligula eget dolor.</li>
            <li class="mb-2">Aenean massa cum sociis natoque penatibus.</li>
          </ul>
          <ol class="mb-5">
            <li class="mb-2">Lorem ipsum dolor sit amet consectetuer.</li>
            <li class="mb-2">Aenean commodo ligula eget dolor.</li>
            <li class="mb-2">Aenean massa cum sociis natoque penatibus.</li>
          </ol>
          <h5 class="my-3">Quote Example:</h5>

          <h5 class="my-3">Table Example:</h5>
          <table class="table table-striped my-5">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            </tbody>
          </table>

          <h5 class="mb-3">Embed A Tweet:</h5>

          <h3 class="mt-5 mb-3">Video Example</h3>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>

        </div>

        <nav class="blog-nav nav nav-justified my-5">
          <a class="nav-link-prev nav-item nav-link rounded-left" href="index.html">Previous<i
              class="arrow-prev fas fa-long-arrow-alt-left"></i></a>
          <a class="nav-link-next nav-item nav-link rounded-right" href="blog-list.html">Next<i
              class="arrow-next fas fa-long-arrow-alt-right"></i></a>
        </nav>


      </div>
    </article>

    <section class="promo-section theme-bg-light py-5 text-center">
      <div class="container">
        <h2 class="title">Promo Section Heading</h2>
        <p>You can use this section to promote your side projects etc. Lorem ipsum dolor sit amet, consectetuer
          adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p>
        <figure class="promo-figure">
          <a href="https://made4dev.com" target="_blank"><img class="img-fluid" src="@/assets/images/promo-banner.jpg"
                                                              alt="image"></a>
        </figure>
      </div><!--//container-->
    </section><!--//promo-section-->

  </div>
</template>

<script>
export default {
  name: "BlogPosts",
  mounted() {
  },


}
</script>

<style scoped>

</style>