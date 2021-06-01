<template>

  <AuthLayout>
    <div class="section-title static-pages"
         style="background:url('/images/slide-3.jpg') center center repeat; background-size: cover;">
      <b-container class="position-relative">
        <h2>
          BECOME A TECH HUNTER PRO
          <span>
           They have now re-emerged and have come out with a ferocious will to provide technical expertise like no other.
We call them Tech Hunter Pros!
         </span>
        </h2>
      </b-container>
    </div>
    <b-container class="auth-container">

      <b-row no-gutters class="justify-content-center">
        <b-col md="10">

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


          <b-row>
            <b-col md="12">
              <div class="auth-page-title">


              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="6" class="pr-5">
              <div class="form-title">
                <strong>Become a Tech Hunter Pro - Fill the below details</strong>
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

                  <h5 class="text-center" style="text-transform: capitalize">
                    {{
                    pack.name
                    }}
                  </h5>

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
                <b-card v-if="monthly" class="package-info" >
                  <div class="package-wrapper" :class="pack.name">

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
<!--                      Continue-->
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

              <!--              <div class="to-become">-->
              <!--                <h2>-->
              <!--                  What do you need to become a Tech Hunter Professional?-->
              <!--                </h2>-->
              <!--                <ul>-->

              <!--                  <li>Great customer service skills</li>-->

              <!--                  <li> Exceptional Technical Skills</li>-->

              <!--                  <li>Up to date LinkedIn profile</li>-->

              <!--                  <li> Up to date resume</li>-->

              <!--                  <li> Be legally able to work in the US</li>-->

              <!--                  <li>3 Professional references</li>-->
              <!--                </ul>-->


              <!--                <h2>-->
              <!--                  What do you get once you are a Tech Hunter Pro?-->
              <!--                </h2>-->
              <!--                <ul>-->
              <!--                  <li>Booked on your own schedule</li>-->

              <!--                  <li>Remote support tools</li>-->

              <!--                  <li>My Tech Hunter Teams account</li>-->

              <!--                  <li>A network of Tech Hunter Pros</li>-->

              <!--                  <li>Independent contractor pay ranging from $30-$50/hour depending on your experience</li>-->

              <!--                  <li>Your own My Tech Hunter account profile</li>-->

              <!--                  <li>Ability to promote yourself as a Tech Hunter Pro and get booked online</li>-->
              <!--                </ul>-->
              <!--              </div>-->

            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>

  </AuthLayout>

</template>
<script>
import AuthLayout from '@/components/layouts/AuthLayout'

export default {
  name: 'BecomeTechHunter',
  data () {
    return {
      monthly: true,
      pack:{
        name:'',
        price:'',
      }
    }
  },
  components: { AuthLayout },
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
