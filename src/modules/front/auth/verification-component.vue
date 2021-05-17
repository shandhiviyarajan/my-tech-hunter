<template>
  <AuthLayout>

    <b-container class="auth-container">

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

          <li class="active">
            SMS Verification & Email Activation
          </li>

        </ul>
        <b-col md="10">
          <b-row>
            <b-col md="12">
              <div class="auth-page-title text-center py-5">
                <h1>
                  Your account created successfully !

                </h1>
                <h3>
                  Please check you email address and<br>
                  verify your account to proceed.
                </h3>


                <p>
                  <i class="fa fa-spinner fa-spin  fa-fw"></i>
                  Verification pending…
                </p>
              </div>
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
  name:'VerifyComponent',
  components: { AuthLayout },
  mounted(){
    setTimeout(()=>{

      this.$router.push({
        name:'MobileNumber'
      })
    },3000)
  }
}
</script>
