<template>

  <AuthLayout>

    <b-container class="auth-container">

      <b-row no-gutters class="justify-content-center">
        <b-col md="10">
          <b-row>
            <b-col md="12">
              <div class="auth-page-title">
                <h1>
                  Create a free account
                </h1>
                <h3>
                  Creating an account in <span>MyTechHunter</span> will help you<br>
                  to post ads, post services & maintain your Business Information.
                </h3>
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="6" class="pr-md-5">
              <div class="form-title">
               Register

                <div>
                  All ready have an account ? <router-link to="/login">Login here</router-link>
                </div>
              </div>
              <b-form>
                <b-form-input type="text" required placeholder="Firstname"></b-form-input>
                <b-form-input type="email" required placeholder="Email Address"></b-form-input>
                <b-form-input type="password" required placeholder="Choose a password"></b-form-input>
                <b-button class="btn mb-4" variant="primary" to="/verify-sms">
                  Create Account
                </b-button>

                <div class="mt-4">
                  Don’t you have an account ?
                  <router-link to="/verify-sms" >
                    Create an account
                  </router-link>
                </div>
              </b-form>
            </b-col>
            <b-col md="6" class="pl-4">
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

  </AuthLayout>

</template>
<script>
import AuthLayout from '@/components/layouts/AuthLayout'

export default {
  name: 'Register',
  components: { AuthLayout },
  methods:{

  }
}
</script>
