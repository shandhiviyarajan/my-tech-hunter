<template>

  <AuthLayout>
    <div class="section-title static-pages"
         style="background:url('/images/slide-4.jpg') top center repeat; background-size: cover;">
      <b-container class="position-relative">
        <h2>
          Technology Frustration ? Get a Tech Hunter Pro
          <span>
          They have now re-emerged and have come out with a ferocious will to provide technical expertise like
                  no other.
                  <br> We call them Tech Hunter Pros!
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
                Fill the below details - Free for members
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
    <footer-component></footer-component>
  </AuthLayout>

</template>
<script>
import AuthLayout from '@/components/layouts/AuthLayout'
import FooterComponent from '@/components/common/footer'

export default {
  name: 'GetTechHunter',
  data () {
    return {
      monthly: false
    }
  },
  components: { FooterComponent, AuthLayout },
  methods: {
    switchPricing () {
      this.monthly = !this.monthly
    }
  }
}
</script>
