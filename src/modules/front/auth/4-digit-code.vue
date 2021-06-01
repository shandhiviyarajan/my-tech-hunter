<template>

  <AuthLayout>


    <b-container>

      <b-row no-gutters class="justify-content-center ">
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

          <li class="active">
            SMS Verification & Email Activation
          </li>

        </ul>
        <b-col md="10">

          <div class="auth-page-title text-center py-5">
            <h1>
              Enter your
              4 Digit verification code <br>
              to verify your business contact
            </h1>

          </div>

          <b-row no-gutters class="justify-content-center">
            <b-col md="6">
              <form class="text-center">

                <div class="verification-code-inputs d-flex">
                  <b-form-input maxlength="1"  type="text"></b-form-input>
                  <b-form-input maxlength="1"  type="text"></b-form-input>
                  <b-form-input maxlength="1"  type="text"></b-form-input>
                  <b-form-input maxlength="1"  type="text"></b-form-input>
                </div>
                <b-button class="btn" variant="primary" to="/">
                  Verify
                </b-button>
                <div class="my-4">
              Didn't receive the SMS Code ?
                  <router-link to="/">    Please send it again</router-link>
                </div>
              </form>
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
  name: 'VerificationCode',
  components: { AuthLayout }
}
</script>
