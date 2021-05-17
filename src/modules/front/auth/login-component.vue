<template>

  <AuthLayout>

    <b-container class="auth-container">
      <b-overlay :show="show" rounded="sm">
        <b-row no-gutters class="justify-content-center">
          <b-col md="10">
            <b-row>
              <b-col md="12">
                <div class="auth-page-title">
                  <h1>
                    Great to have you back!
                  </h1>
                  <h3>
                    You can sign in to <span>MyTechHunter</span> using your existing
                    account or Your Social Media
                  </h3>
                </div>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6" class="pr-md-5">
                <div class="form-title">
                  Sign in
                </div>
                <b-overlay
                    :show="busy"
                    rounded
                    opacity="0.6"
                    spinner-small
                    spinner-variant="primary"
                    class="d-block">
                <form @submit="Login">
                  <b-form-input type="email" required placeholder="Username"></b-form-input>
                  <b-form-input type="password" required placeholder="Password"></b-form-input>

                    <b-button @click="Login" class="btn mb-4 btn-block" variant="primary">
                      Login
                    </b-button>

                  <div class="d-flex">
                    <b-checkbox value="1" class="mr-4">
                      Remember Me
                    </b-checkbox>
                    <router-link to="/forgot-password">Forgot Password</router-link>
                  </div>
                  <div class="mt-4">
                    Don’t you have an account ?
                    <router-link to="/">
                      Create an account
                    </router-link>
                  </div>
                </form>
                </b-overlay>
              </b-col>
              <b-col md="6" class="pl-md-4 social-logins">
                <div class="form-title">
                  &nbsp;
                </div>
                <b-button class="btn btn-fb">
                  <i class="fa fa-facebook"></i>
                  <span> Facebook</span>
                </b-button>
                <b-button class="btn btn-google">

                  <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
                       xmlns:xlink="http://www.w3.org/1999/xlink">
                    <title>281764</title>
                    <defs>
                      <rect id="path-1" x="761" y="498" width="403" height="48" rx="8"></rect>
                      <filter x="-4.0%" y="-29.2%" width="107.9%" height="166.7%" filterUnits="objectBoundingBox"
                              id="filter-2">
                        <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                        <feGaussianBlur stdDeviation="5" in="shadowOffsetOuter1"
                                        result="shadowBlurOuter1"></feGaussianBlur>
                        <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.05 0" type="matrix"
                                       in="shadowBlurOuter1"></feColorMatrix>
                      </filter>
                    </defs>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="Sign-in" transform="translate(-910.000000, -512.000000)">
                        <polygon id="Mask" fill-opacity="0.05" fill="#848484"
                                 points="0 180 1440 180 1440 860 0 860"></polygon>
                        <g id="Rectangle-Copy-3">
                          <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
                          <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-1"></use>
                        </g>
                        <g id="281764" transform="translate(910.000000, 512.000000)" fill-rule="nonzero">
                          <path
                              d="M6,14.8750889 L5.05761875,17.9365907 L1.61323698,18 C0.583872389,16.3385191 0,14.4375737 0,12.4174942 C0,10.4640912 0.545906407,8.62199958 1.51356306,7 L1.51430334,7 L4.58077025,7.48923656 L5.92406804,10.1417528 C5.64291883,10.8550387 5.48968009,11.6207362 5.48968009,12.4174942 C5.48978585,13.2822171 5.66978056,14.1107258 6,14.8750889 Z"
                              id="Path" fill="#FBBB00"></path>
                          <path
                              d="M23.785615,10 C23.9265253,10.6883724 24,11.3992815 24,12.1258375 C24,12.9405404 23.9076414,13.7352402 23.7316952,14.5018023 C23.134408,17.1103361 21.5737063,19.3881081 19.4116914,21 L19.4110204,20.9993777 L15.9101177,20.8337078 L15.414631,17.9650451 C16.8492323,17.1847476 17.9703801,15.9636267 18.5609573,14.5018023 L12,14.5018023 L12,10 L18.6566709,10 L23.785615,10 L23.785615,10 Z"
                              id="Path" fill="#518EF8"></path>
                          <path
                              d="M18.9993467,21.2172505 L19,21.2179416 C16.9529187,22.9585421 14.3524801,24 11.5217209,24 C6.97265643,24 3.01759134,21.3102951 1,17.3520739 L4.87107461,14 C5.87984695,16.8480041 8.47697261,18.8753893 11.5217209,18.8753893 C12.8304326,18.8753893 14.0565069,18.5011378 15.108581,17.8478017 L18.9993467,21.2172505 Z"
                              id="Path" fill="#28B446"></path>
                          <path
                              d="M19,2.85343559 L15.1799632,6.14067705 C14.1051129,5.43448369 12.8345463,5.02653188 11.4733303,5.02653188 C8.39967757,5.02653188 5.78797789,7.10633085 4.84205435,10 L1.00064486,6.69436052 L1,6.69436052 C2.96250576,2.71724185 6.91598342,0 11.4733303,0 C14.3344542,0 16.9578075,1.07124874 19,2.85343559 Z"
                              id="Path" fill="#F14336"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <span>
              Google
            </span></b-button>
                <b-button class="btn btn-linked-in">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                  <span>
              Linked In
            </span>
                </b-button>
                <b-button class="btn btn-apple">
                  <i class="fa fa-apple"></i>
                 <span> Apple Sign in</span>
                </b-button>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-overlay>
    </b-container>
  </AuthLayout>

</template>
<script>
import AuthLayout from '@/components/layouts/AuthLayout'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      show: false,
      busy: false,
      formData: {
        username: '',
        password: ''
      }
    }
  },
  components: { AuthLayout },
  computed: {
    ...mapGetters('auth', ['isAuthenticated'])
  },
  methods: {
    ...mapActions('auth', ['AuthLogin']),
    Login (e) {
      this.busy = true
      e.preventDefault()
      setTimeout(() => {
        this.AuthLogin()
        this.busy = false
      }, 1500)

    }
  }
}
</script>
