<template>

  <DefaultLayout>
    <div id="page-contact">
      <div class="section-title static-pages"
           style="background:url('/images/404.jpeg') center center no-repeat; background-size: cover;">
        <b-container class="position-relative">
          <h2>
            Page Not Found !
            <span>
           This is is lost or not available !
         </span>
          </h2>
        </b-container>
      </div>
      <b-container>

        <b-row class="justify-content-center">
          <b-col md="6">
            <p class="text-center my-4">
              No personal technical questions will be answered here.
              This page is only for website related support requests.
            </p>
          </b-col>


        </b-row>


      </b-container>

      <b-container fluid>
        <b-row>
          <b-col md="12">
            <GmapMap
                :center="{lat:39.7594, lng:-100.4340}"
                :zoom="6"
                style="width: 100%; height: 400px"
            >
              <GmapMarker
                  icon="/images/map_marker.png"
                  :position="{lat:39.7594, lng:-100.4340}"
                  :clickable="true"
                  :draggable="false"
                  @click="center={lat:39.7594, lng:-100.4340}"
              />
            </GmapMap>
          </b-col>

        </b-row>
      </b-container>

      <b-container>
        <b-row class="justify-content-center">
          <b-col md="6">
            <div class="my-tech-contact">
              <h3>
                My Tech Hunters<br>Headquarters
              </h3>
              <p>

                <i class="fa fa-map-marker"></i> 1859 SE Port St Lucie Blvd. <br>
                Port St Lucie, FL 34952<br>
              </p>
              <p>
                <i class="fa fa-envelope-o"></i> <a href="maito:info@mytechhunter.com">info@mytechhunter.com</a><br>
              </p>
              <p>
                <i class="fa fa-phone"></i> <a href="tel:772.249.3796">
                772.249.3796
              </a>
              </p>
            </div>
          </b-col>
          <b-col md="6">
            <b-form class="my-tech-contact-form">
              <p>
                &nbsp;
              </p>
              <h3 class="text-center">
                Send us your Feedback / Inquiry
              </h3>
              <b-form-input type="text" placeholder="Full name" required></b-form-input>
              <b-form-input type="email" placeholder="Email address" required></b-form-input>
              <b-form-input type="number" placeholder="Contact"></b-form-input>
              <b-textarea rows="5" placeholder="Messages / Inquiry"></b-textarea>
              <b-button variant="primary">
                <i class="fa fa-envelope"></i> Send message
              </b-button>
            </b-form>
          </b-col>
        </b-row>
      </b-container>
    </div>

  </DefaultLayout>

</template>




<script>
export default {
  name:'NotFound'
}
</script>
