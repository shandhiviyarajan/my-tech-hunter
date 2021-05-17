<template>
  <DefaultLayout>
    <section id="all-posts">
      <p>
        &nbsp;
      </p>
      <div class="section-title">
        <h2>
          All Posts
        </h2>
      </div>
      <b-container>

        <b-row class="mb-4">
          <b-col md="2">
           24 Posts available
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

          <b-col v-for="(recent_post, index) in [1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]" :key="index" lg="3" sm="6">
            <b-card class="service_card p-0">
              <div class="service_image">
                <img :src="`/images/services/s${recent_post}.png`"/>
              </div>
              <b-card-text>
                <router-link to="/single-page"> <div class="comp_name">
                  <b-avatar size="64" :src="`/images/avatars/avatar-${recent_post}.png`"></b-avatar>
                  RF computer services
                </div>
                  <div class="service_title">
                    Computer, Laptop, Mobile Phone, Repairs, Sales and Service
                  </div>
                  <div class="service_rating">
                    <svg width="80px" height="14px" viewBox="0 0 80 14" version="1.1" xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink">
                      <title>Group Copy 14</title>
                      <defs>
                        <rect id="path-1" x="377" y="903" width="261" height="371" rx="12"></rect>
                        <filter x="-7.5%" y="-4.4%" width="114.9%" height="110.5%" filterUnits="objectBoundingBox"
                                id="filter-2">
                          <feOffset dx="0" dy="3" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                          <feGaussianBlur stdDeviation="6" in="shadowOffsetOuter1"
                                          result="shadowBlurOuter1"></feGaussianBlur>
                          <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out"
                                       result="shadowBlurOuter1"></feComposite>
                          <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.101617133 0" type="matrix"
                                         in="shadowBlurOuter1"></feColorMatrix>
                        </filter>
                      </defs>
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Home" transform="translate(-402.000000, -1172.000000)">
                          <g id="Rectangle-Copy-60">
                            <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
                            <rect stroke="#EEEEEE" stroke-width="1" stroke-linejoin="square" fill="#FFFFFF"
                                  fill-rule="evenodd"
                                  x="377.5" y="903.5" width="260" height="370" rx="12"></rect>
                          </g>
                          <g id="Group-Copy-14" transform="translate(402.000000, 1172.000000)" fill-rule="nonzero">
                            <g id="148841" fill="#EFCE4A">
                              <polygon id="Path"
                                       points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                            </g>
                            <g id="148841-copy" transform="translate(17.000000, 0.000000)" fill="#EFCE4A">
                              <polygon id="Path"
                                       points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                            </g>
                            <g id="148841-copy-2" transform="translate(33.000000, 0.000000)" fill="#EFCE4A">
                              <polygon id="Path"
                                       points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                            </g>
                            <g id="148841-copy-3" transform="translate(48.000000, 0.000000)" fill="#EFCE4A">
                              <polygon id="Path"
                                       points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                            </g>
                            <g id="148841-copy-4" transform="translate(65.000000, 0.000000)" fill="#ACACAC">
                              <polygon id="Path"
                                       points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </router-link>
                <div class="category-tags">
                  <router-link to="/">Networking</router-link>
                  <router-link to="/">Repair</router-link>
                </div>
                <div class="service_price">
                  <small>
                    Price
                  </small>
                  $$$ USD
                </div>
              </b-card-text>
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



