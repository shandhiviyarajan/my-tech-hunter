---
layout : default.html
title : My Tech Hunter - HTML version
---
    <section id="all-promotions">
      <p>
        &nbsp;
      </p>
      <div class="section-title">
        <h2>
          All Promotions
        </h2>
      </div>
      <div class="container">

        <div class="row mb-4">
          <div class="col-md-2">
           24 Promotions found
          </div>
          <div class="col-md-4"></div>
          <div class="col-md-3">
            <b-dropdown block  text="Service categories" variant="secondary" class="m-2">
              <b-dropdown-item>
               Categories
              </b-dropdown-item>
              <b-dropdown-item> Networking</b-dropdown-item>
              <b-dropdown-item> Repair</b-dropdown-item>
              <b-dropdown-item> App Development</b-dropdown-item>
              <b-dropdown-item> Software Development</b-dropdown-item>
              <b-dropdown-item> Remote Assistance</b-dropdown-item>


            </b-dropdown>
          </div>
          <div class="col-md-3">
            <input type="date"/>
          </div>
        </div>
        <div class="row mb-4">

          <b-col v-for="promotion in [1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]" :key="promotion" lg="3" sm="6">
            <div class="card service_card promotion-card p-0 mb-4">
              <a href="/promotion/single-page">
                <div class="service_image">
                  <img src="/images/services/s.png"/>
                  <div class="promotion-percent">
                    20%
                  </div>
                </div>
                <div class="card-text">
                  <div class="comp_name">
                    RF computer services
                  </div>
                  <div class="service_title">
                    Computer, Laptop, Mobile Phone, Repairs, Sales and Service
                  </div>
                  <div class="offer-valid">
                    Offer valid till <br>
                    Jan 26 2021

                  </div>
                </div>
              </a> 
           </div>
          </div>

        </div>

        <div class="row">
          <div class="col-md-12">
       <div class="paginations"></div>
          </div>
        </div>
      </div>
    </section>


 
