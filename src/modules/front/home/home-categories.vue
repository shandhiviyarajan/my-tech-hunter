<template>
  <section>
    <div class="section-title">
      <h2>
        Popular Categories
      </h2>
      <p>
        Browse through some of our most popular categories
      </p>
    </div>
    <b-container>
      <div class="swiper-container" id="home_categories" style="width: 100%; margin:0 auto">

        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <div v-for="(category, index) in [1,2,3,4]" :key="index" class="swiper-slide">
            <b-card class="category_card p-0">
              <div class="category_image">
                <div>
                  <div class="category_title">
                    Remote services <br>
                    & troubleshooting
                  </div>
                  <div class="category_count">
                    32 Services available
                  </div>
                </div>
                <figure>
                  <img :src="`/images/categories/category_${category}.jpg`" />
                </figure>
              </div>
            </b-card>
          </div>


        </div>
      </div>

    </b-container>
  </section>
</template>


<script>
import Swiper from 'swiper'

export default {
  name: 'HomeCategories',
  mounted(){
    new Swiper('#home_categories', {
      // Optional parameters
      loop: false,
      spaceBetween:0,
      slidesPerView:4,
      centeredSlides:false,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 12
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 12
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 12
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 12
        },
        900: {
          slidesPerView: 4,
          spaceBetween:12
        }


      }

    })
  }
}
</script>
