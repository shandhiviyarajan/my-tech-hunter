<template>


  <DefaultLayout>
    <b-container>
    <b-row>
      <b-col md="3">
<LeftSideBar/>
      </b-col>
      <b-col md="9">

      </b-col>
    </b-row>
    </b-container>
  </DefaultLayout>
</template>
<script>
import DefaultLayout from '@/components/layouts/DefaultLayout'

import LeftSideBar from '@/components/common/left-side-bar';

export default {
  name:'SettingsComponent',
  components: { DefaultLayout,
    LeftSideBar}
}
</script>
