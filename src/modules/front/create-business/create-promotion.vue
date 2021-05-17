<template>

  <AuthLayout>
    <b-container>
      <b-row>
        <b-col md="8" class="create-post-container">
          <b-row>
            <b-col>
              <div class="auth-page-title">
                <h1>
                  Create a promotion <br>

                </h1>
                <h3>
                  Please provide below information to create a promotional post
                </h3>

              </div>
            </b-col>
          </b-row>
          <b-form>
            <b-row no-gutters>
              <b-col md="5">
                <b-form-datepicker placeholder="Start date" id="example-datepicker-start"></b-form-datepicker>
              </b-col>
              <b-col md="5">
                <b-form-datepicker placeholder="End date" id="example-datepicker-end"></b-form-datepicker>
              </b-col>
            </b-row>

            <b-row>
              <b-col>
                <b-form-input type="text" placeholder="Post Title" v-model="post_title"></b-form-input>
              </b-col>
            </b-row>

            <b-row>
              <b-col md="6">
                <b-form-input v-model="business_categories" type="text"
                              placeholder="Business Categories"></b-form-input>
              </b-col>
              <b-col md="6">
                <b-form-input v-model="sub_categories" type="text" placeholder="Sub Categories"></b-form-input>
              </b-col>
            </b-row>

            <b-row>
              <b-col>
                <label>
                  <strong> Upload images <small class="text-mute">(Used in single service page)</small></strong>
                </label>

                <div class="d-flex">
                  <div class="input-image-upload"
                       v-for="(input, index) in [1,2,3,4,5]" :key="index">
                    <svg width="46px" height="32px" viewBox="0 0 46 32" version="1.1" xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink">
                      <title>916762</title>
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Create-post" transform="translate(-208.000000, -645.000000)">
                          <rect id="Rectangle" fill="#F2F2F2" x="159" y="589" width="144" height="144"></rect>
                          <g id="916762" transform="translate(208.000000, 645.000000)" fill="#000000"
                             fill-rule="nonzero">
                            <path
                                d="M42.1666476,0 L3.8333316,0 C1.71733256,0.00247618625 0.00249166554,1.70666375 0,3.8095173 L0,28.190428 C0.00249166554,30.2932816 1.71733256,31.9974692 3.8333316,31.9999736 L42.1666476,31.9999736 C42.3817933,32.0008025 42.5965557,31.9821358 42.8083473,31.9443264 C44.6530423,31.6374698 46.003525,30.0491868 45.9999861,28.190428 L45.9999861,3.8095173 C45.9974875,1.70656851 44.2826466,0.00247618625 42.1666476,0 Z M3.8333316,30.4761384 C2.64164464,30.4759479 1.64737425,29.5712828 1.54253264,28.3915705 L16.8283257,18.459397 L32.373252,30.4761384 L3.8333316,30.4761384 Z M44.466648,28.190428 C44.4678924,29.3087118 43.6528302,30.2629007 42.5423141,30.4433766 C42.4183058,30.465567 42.2925725,30.4765194 42.1666476,30.476148 L34.8702842,30.476148 L24.7127221,22.6201518 L33.7961847,15.4018785 L44.466648,21.7645342 L44.466648,28.190428 Z M44.4666465,19.9877754 L34.1281512,13.8232145 C33.8533013,13.658929 33.5046598,13.6820719 33.2541516,13.8811191 L23.4661227,21.6601535 L17.3366255,16.9226378 C17.0783548,16.7232095 16.7212799,16.7084476 16.4472926,16.8860664 L1.53333264,26.5767165 L1.53333264,3.8095173 C1.53333264,2.54713851 2.56306134,1.52380692 3.8333316,1.52380692 L42.1666476,1.52380692 C43.4369178,1.52380692 44.4666465,2.54713851 44.4666465,3.8095173 L44.4666465,19.9877754 Z"
                                id="Shape"></path>
                            <path
                                d="M23.5,5 C21.0146875,5 19,7.0146875 19,9.5 C19.0024375,11.9842812 21.0157188,13.9975625 23.5,14 C25.9853125,14 28,11.9853125 28,9.5 C28,7.0146875 25.9853125,5 23.5,5 Z M23.5,12.5 C21.8431562,12.5 20.5,11.1568438 20.5,9.5 C20.5,7.84315625 21.8431562,6.5 23.5,6.5 C25.1568438,6.5 26.5,7.84315625 26.5,9.5 C26.5,11.1568438 25.1568438,12.5 23.5,12.5 Z"
                                id="Shape"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <input type="file">
                  </div>
                </div>

              </b-col>
            </b-row>

            <b-row>
              <b-col>
                <label>
                  <strong>Upload Videos <small class="text-mute">
                    (Used in single service page)
                  </small> </strong>
                </label>
                <div class="d-flex">
                  <div class="input-image-upload" v-for="(input, index) in [1,2,3,4,5]" :key="index">
                    <svg width="46px" height="32px" viewBox="0 0 46 32" version="1.1" xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink">
                      <title>916762</title>
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Create-post" transform="translate(-208.000000, -645.000000)">
                          <rect id="Rectangle" fill="#F2F2F2" x="159" y="589" width="144" height="144"></rect>
                          <g id="916762" transform="translate(208.000000, 645.000000)" fill="#000000"
                             fill-rule="nonzero">
                            <path
                                d="M42.1666476,0 L3.8333316,0 C1.71733256,0.00247618625 0.00249166554,1.70666375 0,3.8095173 L0,28.190428 C0.00249166554,30.2932816 1.71733256,31.9974692 3.8333316,31.9999736 L42.1666476,31.9999736 C42.3817933,32.0008025 42.5965557,31.9821358 42.8083473,31.9443264 C44.6530423,31.6374698 46.003525,30.0491868 45.9999861,28.190428 L45.9999861,3.8095173 C45.9974875,1.70656851 44.2826466,0.00247618625 42.1666476,0 Z M3.8333316,30.4761384 C2.64164464,30.4759479 1.64737425,29.5712828 1.54253264,28.3915705 L16.8283257,18.459397 L32.373252,30.4761384 L3.8333316,30.4761384 Z M44.466648,28.190428 C44.4678924,29.3087118 43.6528302,30.2629007 42.5423141,30.4433766 C42.4183058,30.465567 42.2925725,30.4765194 42.1666476,30.476148 L34.8702842,30.476148 L24.7127221,22.6201518 L33.7961847,15.4018785 L44.466648,21.7645342 L44.466648,28.190428 Z M44.4666465,19.9877754 L34.1281512,13.8232145 C33.8533013,13.658929 33.5046598,13.6820719 33.2541516,13.8811191 L23.4661227,21.6601535 L17.3366255,16.9226378 C17.0783548,16.7232095 16.7212799,16.7084476 16.4472926,16.8860664 L1.53333264,26.5767165 L1.53333264,3.8095173 C1.53333264,2.54713851 2.56306134,1.52380692 3.8333316,1.52380692 L42.1666476,1.52380692 C43.4369178,1.52380692 44.4666465,2.54713851 44.4666465,3.8095173 L44.4666465,19.9877754 Z"
                                id="Shape"></path>
                            <path
                                d="M23.5,5 C21.0146875,5 19,7.0146875 19,9.5 C19.0024375,11.9842812 21.0157188,13.9975625 23.5,14 C25.9853125,14 28,11.9853125 28,9.5 C28,7.0146875 25.9853125,5 23.5,5 Z M23.5,12.5 C21.8431562,12.5 20.5,11.1568438 20.5,9.5 C20.5,7.84315625 21.8431562,6.5 23.5,6.5 C25.1568438,6.5 26.5,7.84315625 26.5,9.5 C26.5,11.1568438 25.1568438,12.5 23.5,12.5 Z"
                                id="Shape"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <input type="file">
                  </div>
                </div>
              </b-col>
            </b-row>

            <b-row>
              <b-col>
                <div class="enable-promotion-wrapper">
                  <b-form-checkbox class="mb-4"><strong>Enable Promotion</strong></b-form-checkbox>

                  <b-form-input v-model="actual_price" placeholder="Actual price"></b-form-input>

                  <b-form-input v-model="promotion_price" placeholder="Promotional price"></b-form-input>

                  <b-form-input v-model="percentage" placeholder="Promotional percentage"></b-form-input>

                  <b-row no-gutters>
                    <b-col md="6">
                      <b-form-datepicker v-model="promo_start_date" placeholder="Promo start-date"
                                         id="promo-datepicker-start"></b-form-datepicker>
                    </b-col>
                    <b-col md="6">
                      <b-form-datepicker v-model="promo_end_date" placeholder="Promo end date"
                                         id="promo-datepicker-end"></b-form-datepicker>
                    </b-col>
                  </b-row>
                </div>
              </b-col>
            </b-row>

            <b-row>
              <b-col>
                <div class="dropdown-divider mb-4"></div>
              </b-col>
            </b-row>

            <b-row>
              <b-col>
                <label>
                  <strong> Pricing information</strong>
                </label>
                <b-row>
                  <b-col md="6">
                    <b-form-input v-model="price" placeholder="Price"></b-form-input>
                  </b-col>

                </b-row>
              </b-col>
            </b-row>

            <b-row>
              <b-col>
                <label>
                  <strong> Contact Information</strong>
                </label>
                <b-row>
                  <b-col md="6">
                    <b-form-input placeholder="Phone number"></b-form-input>
                  </b-col>
                  <b-col md="6">
                    <b-form-input placeholder="Email address"></b-form-input>
                  </b-col>
                  <b-col md="6">
                    <b-form-input placeholder="Mobile number"></b-form-input>
                  </b-col>
                  <b-col md="6">
                    <b-form-checkbox placeholder="Contact Information">
                      <strong> Use same email in the profile</strong>
                    </b-form-checkbox>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>

            <b-row>
              <b-col md="12">
                <label>
                  <strong>Post description</strong>
                </label>
                <b-textarea></b-textarea>
              </b-col>
            </b-row>

            <b-row>
              <b-col md="12">
                <b-card>


                </b-card>
              </b-col>
            </b-row>

            <b-row>
              <b-col md="12" class="mt-4">
                <b-button variant="primary">
                  Create Promotion
                </b-button>
              </b-col>
            </b-row>
          </b-form>
        </b-col>
        <b-col md="4" class="preview-containers">
          <h4 class="mt-4">
            <strong> Promotion preview</strong>
          </h4>
          <b-card class="service_card promotion-card p-0">
            <div class="service_image">
              <img :src="`/images/services/s1.png`"/>
              <div class="promotion-percent">

                {{
                  (percentage) ? percentage : caculated_percentage}}%

              </div>
            </div>
            <b-card-text>
              <div class="comp_name">
                RF computer services
              </div>
              <div class="service_title">
                {{
                  post_title
                }}
              </div>
              <div class="offer-valid">
                Offer valid till <br>
                {{
                  promo_end_date
                }}

              </div>
            </b-card-text>


          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <footer-component></footer-component>

  </AuthLayout>
</template>
<script>
import AuthLayout from '@/components/layouts/AuthLayout'
import FooterComponent from '@/components/common/footer'

export default {
  name: 'PostAdvertisementComponent',

  data () {

    return {
      post_title: '',

      price: '',
      business_categories: '',
      sub_categories: '',

      actual_price: '',
      promotion_price: '',
      percentage: '',
      promo_start_date: '',
      promo_end_date: ''

    }
  },

  computed: {
    caculated_percentage(){
      return parseInt(  (parseFloat(this.promotion_price) - parseFloat(this.actual_price))/ parseFloat(this.actual_price)*100)
    }
  },
  components: { FooterComponent, AuthLayout }
}
</script>
