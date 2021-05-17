<template>
  <div id="th-home-slider">
    <div class="th-home-slider__item">

      <b-container>
        <b-row no-gutters class="justify-content-center">
          <b-col lg="12">

            <div class="text">
              <h3>
                What's your tech need? <br>
                Hunt it down and get it done!
              </h3>
              <b-form @submit="search">

                <div class="home-search-form">
                  <VueTypeaheadBootstrap
                      v-model="query"
                      @hit="hit"
                      :data="services"
                      :serializer="item => item.name"
                      placeholder="eg Tech Support, Cyber security, App Development"

                  >
                    <template slot="append">
                      <b-dropdown>
                        <template #button-content>

                          <i class="fa fa-dot-circle-o" aria-hidden="true"></i>
                          {{
                            place
                          }}
                        </template>
                        <li>
                          <p class="text-left">
                            Select your location
                          </p>
                          <gmap-autocomplete
                              autofocus
                              placeholder="Select your location"
                              @place_changed="setPlace">
                          </gmap-autocomplete>
                          <b-button block variant="primary" class="btn-sm">
                            Save
                          </b-button>
                        </li>
                      </b-dropdown>

                      <b-overlay
                          :show="busy"
                          rounded
                          opacity="0.6"
                          spinner-small
                          spinner-variant="primary"
                          class="d-inline-block"
                      >
                        <b-button variant="primary" class="search-btn" @click="search">
                          <i class="fa fa-search"></i> Search
                        </b-button>
                      </b-overlay>

                    </template>

                    <template slot="suggestion" slot-scope="{ data }">


                      <div class="item-result">
                         <span>
                           <strong>
                              {{
                               data.name
                             }}
                           </strong>
                           <span v-if="data.desc">
                              - {{ data.desc }}
                           </span>
                         </span>
                        <img v-if="data.promotion" src="/svgs/sponsored.svg"/>
                      </div>


                    </template>

                  </VueTypeaheadBootstrap>
                </div>


              </b-form>

              <p>
                Get help, get support, bring your ideas to life with professional services
              </p>

              <div class="search-tags">

                <p>
                  Most popular
                </p>

                <ul>
                  <li>
                    <a href="/">
                      Repair
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      App Development
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      Tech Support
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      Troubleshooting
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      Remote Support
                    </a>
                  </li>
                </ul>

              </div>
            </div>


          </b-col>
        </b-row>
      </b-container>

      <div class="swiper-container" id="home_slides">
        <div class="swiper-wrapper">
<!--          <div class="swiper-slide">-->
<!--            <div class="source"-->
<!--                 style="background:url('/images/tiger.jpg') center center no-repeat; background-size:cover;"></div>-->
<!--          </div>-->

          <div class="swiper-slide">
            <div class="source"
                 style="background:url('/images/tiger.jpg') center center no-repeat; background-size:cover;"></div>
          </div>
          <div class="swiper-slide">
            <div class="source source-3"
                 style="background:url('/images/slide-2.jpg') center center no-repeat; background-size:cover;"></div>
          </div>
          <div class="swiper-slide">
            <div class="source source-1"
                 style="background:url('/images/slide-4.jpg') center center no-repeat; background-size:cover;"></div>
          </div>
          <div class="swiper-slide">
            <div class="source source-2"
                 style="background:url('/images/slide-3.jpg') center center no-repeat; background-size:cover;"></div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

import VueTypeaheadBootstrap from 'vue-typeahead-bootstrap'
import Swiper from 'swiper'

export default {
  name: 'HomeSlider',
  components: {
    VueTypeaheadBootstrap
  },
  data () {
    return {
      busy: false,
      query: '',

      place: 'Choose Location',

      services: [
        {
          name: 'Little Mac Shop',
          desc: 'Mac specialist & Repairs Little Mac Shop - Apple dealer and Apple products repair',
          paid: true,
          promotion: true
        },
        {
          name: 'Thundar Mac ',
          desc: 'Mac specialist & Repairs Thundar Mac - Apple dealer and Apple products repair',
          paid: true,
          promotion: true
        },
        {
          name: 'Future World - Apple service center',
          desc: 'Mac specialist & Repair Future World - Apple dealer and Apple products repair',
          paid: true,
          promotion: true
        },
        {
          name: 'Future World - Apple service center',
          desc: 'Mac specialist & Repair Future World - Apple dealer and Apple products repair',
          paid: true,
          promotion: true
        },
        {
          name: 'Networking and Remort services - Apple service center',
          desc: 'Mac specialist & Repair Future World - Apple dealer and Apple products repair',
          paid: true,
          promotion: true
        },
        {
          name: 'Computer Services - Apple service center',
          desc: 'Mac specialist & Repair Future World - Apple dealer and Apple products repair',
          paid: true,
          promotion: true
        },
        {
          name: 'Repair House - Apple service center',
          desc: 'Mac specialist & Repair Future World - Apple dealer and Apple products repair',
          paid: true,
          promotion: true
        },
        { name: 'Mac Repair' },
        { name: 'Mac screen repairing' },
        { name: 'Mac trouble shooting' },
        { name: 'mac book service and troubleshooting' },
        { name: 'Mac pc reparing and service center' }
      ]
    }
  },
  methods: {
    searchUsers () {},
    handleEnter () {

    },
    hit (r) {
      console.log(r)
      this.search()
    },
    search () {

      this.busy = true
      setTimeout(() => {
        this.$router.push({
          name: 'SearchList'
        })
      }, 1000)
    },
    setPlace (place) {
      console.log(place)
      this.place = place.name
      localStorage.setItem('location_name', name)
    },


  },
  mounted () {
    let s = new Swiper('#home_slides', {
      // Optional parameters
      parallax:true,
      loop: true,
      effect:'fade',
      spaceBetween:0,
      slidesPerView:1,
      centeredSlides:false,
      autoplay: true,
      speed:1200

    })

    setInterval(()=>{
      s.slideNext();
    },12000)


let vm = this;

    if (localStorage.getItem('location_name')) {
      this.palce = localStorage.getItem('location_name')
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {

        let lat = position.coords.latitude;
        let lng = position.coords.longitude;


        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyCzATU_j6vWKfJth5gYzIXC_3XDXBrfFDY`)
        .then(response=> response.json())
        .then(data => {

          vm.place = data.results[0].address_components[2].short_name
        })
      })
    }
  }

}
</script>
