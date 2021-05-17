<template>
  <AuthLayout>
   <b-container>
     <h4 class="my-5">
       Logging out...
     </h4>
   </b-container>
  </AuthLayout>
</template>
<script>
import AuthLayout from '@/components/layouts/AuthLayout'
import { mapActions } from 'vuex'

export default {
  components: { AuthLayout },
  methods: {
    ...mapActions('auth', ["AuthLogout"])
  },
  mounted () {
    setTimeout(()=>{
      this.AuthLogout()
      this.$router.push({
        name:'Home'
      })
    },1000)
  }
}
</script>
