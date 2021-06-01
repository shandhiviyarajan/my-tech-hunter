<template>
  <main>
    <!-- view slots -->
    <HeaderComponent/>
    <slot/>
  </main>
</template>


<script>
import HeaderComponent from '@/components/common/header'

export default {
  name: 'AuthLayout',
  components: { HeaderComponent },
}
</script>
