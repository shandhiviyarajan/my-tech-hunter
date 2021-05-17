<template>

  <AuthLayout>

    <b-container class="auth-container">

      <b-row no-gutters class="justify-content-center">
        <b-col md="10">
          <b-row>
            <b-col md="12">

              <ul class="steps">
                <li class="active">
                  Choose Subscription
                </li>

                <li>
                  Business Information
                </li>

                <li>
                  Payment confirmation
                </li>

                <li>
                  SMS Verification & Email Activation
                </li>

              </ul>

              <div class="auth-page-title">
                <h1>
                  Create your Business profile
                </h1>
                <h3>
                  Make it visible to Tech Hunters
                </h3>
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="6" class="pr-5">
              <div class="form-title">
                Fill the below details
              </div>
              <b-form>
                <b-form-input type="text" placeholder="Business Name"></b-form-input>
                <b-form-input type="email" placeholder="Email Address"></b-form-input>
                <b-form-input type="text" placeholder="Country"></b-form-input>
                <div class="my-4">
                  <p class="text-muted">
                    By continuing, you agree to MyTechHunter’s Business Terms and acknowledge our Privacy Policy. We may
                    email you about products, services and local events. You can unsubscribe at any time.
                  </p>
                </div>

                <b-button class="btn mb-4" variant="primary" to="/create-details">
                  Continue
                </b-button>
              </b-form>
            </b-col>
            <b-col md="6" class="pl-4">
              <div id="become-a-member">
                <ul class="monthly-annually">
                  <li :class="(monthly) ?'active' :''" @click="switchPricing">
                    <a>
                      Monthly
                    </a>
                  </li>
                  <li :class="(monthly) ?'' :'active'" @click="switchPricing">
                    <a>
                      Annually
                    </a>
                  </li>
                </ul>
                <b-card v-if="monthly" class="package-info">
                  <div class="package-wrapper" :class="pack.name">
                    <h3 style="text-transform: capitalize">
                    {{
                      pack.name}}
                    </h3>
                    <p class="package-price">
                      from <br>
                      USD
                      <span> {{
                        pack.price}}</span>
                      / mo
                    </p>

                  </div>

                  <div class="package-details">
<!--                    <b-button variant="default">-->
<!--                      Create an account-->
<!--                    </b-button>-->

                    <ul>
                      <li>Get unlimited customized technical help and answers via chat </li>
                      <li>
                        Every User can host up to 10 posts (services)
                      </li>
                      <li> Tech Hunters Members Group Access </li>
                      <li>Join our discussions </li>
                      <li>Tech Hunters Members "Get Tech Help" Page Access </li>
                      <li> Ask and find technical answers </li>

                    </ul>

                  </div>
                </b-card>
                <b-card v-else class="package-info">
                  <div class="package-wrapper" :class="pack.name">
                    <h3 style="text-transform: capitalize">
                      {{
                        pack.name}}
                    </h3>
                    <p class="package-price">
                      from <br>
                      USD
                      <span> {{
                        pack.price *12
                        }}</span>
                      / yr
                    </p>

                  </div>

                  <div class="package-details">
<!--                    <b-button variant="default">-->
<!--                      Create an account-->
<!--                    </b-button>-->
                    <ul>
                      <li>Get unlimited customized technical help and answers via chat </li>
                      <li>
                        Every User can host up to 10 posts (services)
                      </li>
                      <li> Tech Hunters Members Group Access </li>
                      <li>Join our discussions </li>
                      <li>Tech Hunters Members "Get Tech Help" Page Access </li>
                      <li> Ask and find technical answers </li>

                    </ul>

                  </div>
                </b-card>
              </div>
              <b-card class="register-info-card">
                <b-card-text>
                  After registration you have to<br>
                  convert your account into professional account<br>
                  to post services & to maintain a business profile
                </b-card-text>
              </b-card>
            </b-col>
          </b-row>
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
  name: 'CreateBusiness',
  components: { FooterComponent, AuthLayout },
  data () {
    return {
      monthly: false,
      pack:{
        name:'',
        price:''
      }
    }
  },
  methods: {
    switchPricing () {
      this.monthly = !this.monthly
    }
  },
  mounted(){
    this.pack = JSON.parse(localStorage.getItem('package'));
  }
}
</script>
