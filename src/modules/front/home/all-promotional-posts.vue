<template>
  <DefaultLayout>
    <section id="all-promotions">
      <p>
        &nbsp;
      </p>
      <div class="section-title">
        <h2>
          All Promotions
        </h2>
      </div>
      <b-container>

        <b-row class="mb-4">
          <b-col md="2">
           24 Promotions found
          </b-col>
          <b-col md="4"></b-col>
          <b-col md="3">
            <b-dropdown block  text="Service categories" variant="secondary" class="m-2">
              <b-dropdown-item>
               Categories
              </b-dropdown-item>
              <b-dropdown-item> Networking</b-dropdown-item>
              <b-dropdown-item> Repair</b-dropdown-item>
              <b-dropdown-item> App Development</b-dropdown-item>
              <b-dropdown-item> Software Development</b-dropdown-item>
              <b-dropdown-item> Remote Assistance</b-dropdown-item>


            </b-dropdown>
          </b-col>
          <b-col md="3">
            <b-form-input type="date"></b-form-input>
          </b-col>
        </b-row>
        <b-row class="mb-4">

          <b-col v-for="promotion in [1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]" :key="promotion" lg="3" sm="6">
            <b-card class="service_card promotion-card p-0 mb-4">
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
          </b-col>

        </b-row>

        <b-row>
          <b-col md="12">
            <b-pagination v-model="currentPage" pills :total-rows="rows" size="md"></b-pagination>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </DefaultLayout>

</template>


<script>


import DefaultLayout from '@/components/layouts/DefaultLayout'

export default {
  name: 'AllPosts',
  data(){
    return {
      currentPage:1,
      rows:40
    }
  },
  components: {
    DefaultLayout

  },
  mounted () {

  }
}
</script>



