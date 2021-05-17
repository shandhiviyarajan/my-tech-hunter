<template>

  <DefaultLayout>
    <div id="page-contact">
      <div class="section-title static-pages"
           style="background:url('/images/contact-us.jpeg') center center no-repeat; background-size: cover;">
        <b-container class="position-relative">
          <h2>
            FAQ
            <span>
           Frequently asked questions
         </span>
          </h2>
        </b-container>
      </div>
      <b-container>

        <b-row class="justify-content-center">
          <b-col md="8">

            <div class="accordion" role="tablist">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.accordion-1 variant="primary">
                    Why My Tech Hunter ?
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>I start opened because</b-card-text>
                    <b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                      richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                      brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                      assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                      wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                      vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                      synth nesciunt you probably haven't heard of them accusamus labore VHS.</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.accordion-2 variant="primary"> How to Become a member ?
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                      richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                      brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                      assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                      wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                      vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                      synth nesciunt you probably haven't heard of them accusamus labore VHS.</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.accordion-3 variant="primary">Accordion 3</b-button>
                </b-card-header>
                <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                      richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                      brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                      assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                      wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                      vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                      synth nesciunt you probably haven't heard of them accusamus labore VHS.</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>

          </b-col>


        </b-row>


      </b-container>


    </div>

  </DefaultLayout>

</template>
<script>
import DefaultLayout from '@/components/layouts/DefaultLayout'

export default {
  components: { DefaultLayout }
}
</script>
