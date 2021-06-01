<template>

  <AuthLayout>

    <b-container class="auth-container">
      <b-overlay :show="show" rounded="sm">
        <b-row no-gutters class="justify-content-center">
          <ul class="steps">
            <li class="active">
              Choose Subscription
            </li>

            <li class="active">
              Business Information
            </li>

            <li class="active">
              Payment confirmation
            </li>

            <li>
              SMS Verification & Email Activation
            </li>

          </ul>
          <b-col md="9">

            <b-row>
              <b-col md="12">
                <div class="auth-page-title">
                  <h1>
                    Payment Process

                  </h1>

                </div>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="8" class="pr-5">
                <div class="form-title">
                  Please fill the below information
                </div>
                <form>
                  <b-form-input type="email" required placeholder="Card Holder Name"></b-form-input>
                  <b-form-input type="email" required placeholder="Card Number"></b-form-input>
                  <b-form-input type="date" required placeholder="Expire date"></b-form-input>
                  <b-form-input type="text" required placeholder="CVV Number "></b-form-input>


                </form>
              </b-col>
              <b-col md="4" class="pl-4">

                <div class="form-title">
                  &nbsp;
                </div>
                <div class="package-selected">

                  <svg width="179px" height="157px" viewBox="0 0 179 157" version="1.1"
                       xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <title>Group</title>
                    <defs>
                      <circle id="path-1" cx="157.5" cy="17.5" r="17.5"></circle>
                      <filter x="-20.0%" y="-14.3%" width="140.0%" height="140.0%" filterUnits="objectBoundingBox"
                              id="filter-2">
                        <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                        <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1"
                                        result="shadowBlurOuter1"></feGaussianBlur>
                        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out"
                                     result="shadowBlurOuter1"></feComposite>
                        <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.180343094 0" type="matrix"
                                       in="shadowBlurOuter1"></feColorMatrix>
                      </filter>
                    </defs>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="Create-Business-step-04-Copy" transform="translate(-995.000000, -187.000000)">
                        <g id="Group" transform="translate(995.000000, 189.000000)">
                          <rect id="Rectangle" fill="#26D38C" x="0" y="14" width="164" height="141" rx="13"></rect>
                          <text id="BRONZE" font-family="Inter-SemiBold, Inter" font-size="12" font-weight="500"
                                fill="#FFFFFF">
                            <tspan x="57.4971591" y="45">BRONZE</tspan>
                          </text>
                          <text id="Billed-Monthly" font-family="Inter-SemiBold, Inter" font-size="12" font-weight="500"
                                fill="#FFFFFF">
                            <tspan x="45.8117898" y="131">Billed Monthly</tspan>
                          </text>
                          <text id="$29" font-family="Inter-Regular_Bold, Inter" font-size="14" font-weight="bold"
                                fill="#FFFFFF">
                            <tspan x="49.035003" y="71">$</tspan>
                            <tspan x="58.2026069" y="71" font-size="44">29</tspan>
                          </text>
                          <g id="Oval">
                            <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
                            <circle stroke="#FFFFFF" stroke-width="4" stroke-linejoin="square" fill="#0068FF"
                                    fill-rule="evenodd" cx="157.5" cy="17.5" r="15.5"></circle>
                          </g>
                          <g id="860798-copy" transform="translate(150.000000, 11.000000)" fill="#FFFFFF"
                             fill-rule="nonzero">
                            <path
                                d="M15.8203525,0.192702764 C15.5748024,-0.058040861 15.1696524,-0.0649936341 14.9154023,0.177169973 C14.9100773,0.182236621 14.9048273,0.187414218 14.8996523,0.192702764 L4.4721382,10.4764459 L1.08461267,7.1356384 C0.83036263,6.8934748 0.425212566,6.90042757 0.179662528,7.15117119 C-0.0598875094,7.39577567 -0.0598875094,7.7835407 0.179662528,8.02814517 L4.01966313,11.8151875 C4.26960067,12.0616042 4.67471323,12.0616042 4.92461327,11.8151875 L15.8046025,1.08520953 C16.0588525,0.843008943 16.0659025,0.443446388 15.8203525,0.192702764 Z"
                                id="Path"></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="11">


                <b-button class="btn my-4" variant="primary" to="/">
                  Complete the Business Creation
                </b-button>


                <div class="alert alert-success mt-5">
                  <strong> After submission our TECH HUNTER TEAM will verify your Business Registration. <br>
                    PAYMENT Confirmation & REGISTRATOIN Confirmation will be sent on Email Address.
                  </strong>
                </div>

              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-overlay>
    </b-container>
    <footer-component></footer-component>
  </AuthLayout>

</template>
<script>
import AuthLayout from '@/components/layouts/AuthLayout'
import FooterComponent from '@/components/common/footer'

export default {
  name: 'PaymentProcess',
  data () {
    return {
      show: false,
      formData: {
        username: '',
        password: ''
      }
    }
  },
  components: { FooterComponent, AuthLayout },
  methods: {
    Login (e) {
      e.preventDefault()
      alert(0)

      // eslint-disable-next-line no-empty
      if (this.username === 'admin@gmail.com' && this.password === '123456') {
        this.show = true
        setTimeout(() => {
          this.show = false
          this.$router.push({
            name: 'Profile'
          })
        }, 1500)
      }
    }
  }
}
</script>
