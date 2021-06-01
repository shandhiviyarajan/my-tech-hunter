<template>

  <main>
    <HeaderComponent/>
    <!-- view slots -->
    <slot/>
    <FooterComponent/>
  </main>
</template>


<script>
import HeaderComponent from '@/components/common/header'
import FooterComponent from '@/components/common/footer'

export default {
  name: 'DefaultLayout',
  components: {
    FooterComponent,
    HeaderComponent
  }
}
</script>
