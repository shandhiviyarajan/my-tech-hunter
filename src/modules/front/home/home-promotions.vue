<template>
  <section id="th-home-promotions">
    <div class="section-title">
     <b-container class="position-relative">
       <h2>
         Promotions
       </h2>

       <router-link to="/all-promotions">
         See all promotions
       </router-link>
     </b-container>
    </div>
    <b-container>
      <div class="swiper-container" id="home_promotions">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">

          <div class="swiper-slide" v-for="promotion in [1,2,3,4,5]" :key="promotion">
            <b-card class="service_card promotion-card p-0">
              <router-link to="/promotion/single-page">
                <div class="service_image">
                  <img :src="`/images/services/s${promotion}.png`"/>
                  <div class="promotion-percent">
                    20%
                  </div>
                </div>
                <b-card-text>
                  <div class="comp_name">
                    RF computer services
                  </div>
                  <div class="service_title">
                    Computer, Laptop, Mobile Phone, Repairs, Sales and Service
                  </div>
                  <div class="offer-valid">
                    Offer valid till <br>
                    Jan 26 2021

                  </div>
                </b-card-text>
              </router-link>
          </b-card>
          </div>


        </div>
        <div class="swiper-pagination"></div>
<!--        &lt;!&ndash; If we need navigation buttons &ndash;&gt;-->
<!--        <div class="swiper-button-prev sp2"></div>-->
<!--        <div class="swiper-button-next sn2"></div>-->

      </div>
    </b-container>
  </section>
</template>


<script>


import Swiper from 'swiper';
export default {
  name:'HomePromotions',
  components: {

  },
  mounted(){
    new Swiper('#home_promotions', {
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
          slidesPerView: 2,
          spaceBetween: 12
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 12
        },
        768: {
          slidesPerView: 3,
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



