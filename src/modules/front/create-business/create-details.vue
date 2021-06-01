<template>
  <AuthLayout>
    <b-container class="auth-container">
      <form>
        <b-row no-gutters class="justify-content-center">
          <ul class="steps">
            <li class="active">
              Choose Subscription
            </li>

            <li class="active">
              Business Information
            </li>

            <li>
              Payment confirmation
            </li>

            <li>
              SMS Verification & Email Activation
            </li>

          </ul>
          <b-col md="9">
            <b-row>
              <b-col md="8">

                <p>
                  &nbsp;
                </p>

                <div class="auth-page-title">
                  <h1>
                    Get started by telling us <br>
                    how customers can reach you
                  </h1>
                </div>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6">
                <label class="mt-5">
                  <strong>
                    Please provide Business Contact Information
                  </strong>
                </label>
                <b-form-input type="text" required placeholder="Business Name"></b-form-input>
                <b-form-input type="text" required placeholder="Email Address"></b-form-input>
              </b-col>
              <b-col md="6">
                <label class="mt-5">
                  <strong>
                    &nbsp; <span class="text-white">.</span>
                  </strong>
                </label>
                <b-form-input type="text" required placeholder="Business category"></b-form-input>
                <b-form-input type="text" required placeholder="Sub categories"></b-form-input>
              </b-col>
              <b-col md="6">
                <label class="mt-5">
                  <strong>
                    Business Address
                  </strong>
                </label>
                <b-form-input type="text" required placeholder="Address Line 1"></b-form-input>
                <b-form-input type="text" required placeholder="Address Line 2"></b-form-input>
                <b-form-input type="text" required placeholder="City"></b-form-input>
              </b-col>
              <b-col md="6">
                <label class="mt-5">
                  <strong>
                    &nbsp; <span class="text-white">.</span>
                  </strong>
                </label>
                <b-form-input type="text" required placeholder="ZIP code"></b-form-input>
                <b-form-input type="text" required placeholder="Country"></b-form-input>
              </b-col>




          <b-col md="6">
            <label class="mt-5">
              <strong>
                Contact Number
              </strong>
            </label>
            <b-form-input type="text" required placeholder="Mobile Number"></b-form-input>
            <b-form-input type="text" required placeholder="Email Address"></b-form-input>
            <label class="mt-5">
              <strong>
                Social media links
              </strong>
            </label>
            <b-form-input type="text" required placeholder="Linked In URL"></b-form-input>
            <b-form-input type="text" required placeholder="Website URL"></b-form-input>

          </b-col>

        </b-row>
        <b-row>
          <b-col>
            <b-button class="btn mb-4" variant="primary" to="/business-documents">
              Create Business
            </b-button>
          </b-col>
        </b-row>
        </b-col>
        </b-row>
      </form>
    </b-container>
    <footer-component></footer-component>
  </AuthLayout>
</template>
<script>
import AuthLayout from '@/components/layouts/AuthLayout'
import FooterComponent from '@/components/common/footer'

export default {
  components: { FooterComponent, AuthLayout }
}
</script>
