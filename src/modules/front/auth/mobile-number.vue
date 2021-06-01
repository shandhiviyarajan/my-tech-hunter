<template>

  <AuthLayout>


    <b-container>

      <b-row no-gutters class="justify-content-center ">
        <b-col md="10">

          <div class="auth-page-title text-center py-5">
            <h1>
              Hello Angel ! <br>
              your email is successfully verified !
            </h1>
            <h3>
              Please verify your mobile number
            </h3>
          </div>

          <b-row no-gutters class="justify-content-center">
            <b-col md="6">
              <form class="text-center">
                <b-form-input class="text-center" type="text" placeholder="Mobile number"></b-form-input>
                <b-button class="btn" variant="primary" to="/verify-code">
                  Send SMS verification
                </b-button>
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
  name: 'MobileNumber',
  components: { AuthLayout }
}
</script>
