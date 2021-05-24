---
layout : default.html
title : My Tech Hunter - HTML version
---

  <section id="home-price-component">
    <div class="section-title">
      <h2>
        Choose a plan <br>
        Let the world know you are ready to help
      </h2>
      <p>
        Unlock the features and services or your business needs to scale with confidence.
      </p>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <b-tabs pills card>
            <b-tab  title="For Business" active>

                  <div  id="package_business">

                    <div style="display:flex;">
                      <div class="card" class="package-info">
                        <div class="package-wrapper">
                          <div class="popular">
                            Most Popular
                          </div>
                          <h3>
                            Diamond
                          </h3>
                          <p class="package-price">
                            from <br>
                            USD
                            <span> 9.99</span>
                            / mo
                          </p>

                        </div>

                        <div class="package-details">
                          <button variant="default" @click="toCreate('CreateBusiness','diamond','9.99')">
                            Create an account
                          </button>
                          <ul>

                            <li>Get unlimited customized technical help and answers via chat </li>
                            <li>
                              Every User can host up to 10 posts (services)
                            </li>
                            <li> Tech Hunters Members Group Access </li>
                            <li>Join our discussions </li>
                            <li>Tech Hunters Members "Get Tech Help" Page Access </li>
                            <li> Ask and find technical answers </li>
                            <li> Phone support not included </li>

                          </ul>
                        </div>
                     </div>
                      <div class="card" class="package-info">
                        <div class="package-wrapper platinum">
                          <h3>
                            Platinum
                          </h3>
                          <p class="package-price">
                            from <br>
                            USD
                            <span> 12.99</span>
                            / mo
                          </p>

                        </div>
                        <div class="package-details">

                            <button variant="default" @click="toCreate('CreateBusiness','platinum','12.99')">
                            Create an account
                          </button>
                          <ul>
                            <li>Get unlimited customized technical help and answers via chat </li>
                            <li>
                              Every User can host up to 10 posts (services)
                            </li>
                            <li> Tech Hunters Members Group Access </li>
                            <li>Join our discussions </li>
                            <li>Tech Hunters Members "Get Tech Help" Page Access </li>
                            <li> Ask and find technical answers </li>
                            <li> Phone support not included </li>
                          </ul>
                        </div>
                     </div>
                    </div>

                    </div>


            </b-tab>
            <b-tab title="For Professionals & Individuals" >

                <div  id="package_professional">
                  <div style="display:flex;">
                    <div class="card" class="package-info">
                      <div class="package-wrapper bronze">
                        <h3>
                          Bronze
                        </h3>
                        <p class="package-price">
                          from <br>
                          USD
                          <span> 9.99</span>
                          / mo
                        </p>

                      </div>

                      <div class="package-details">
                        <button variant="default" @click="toCreate('BecomeTechHunter','bronze','9.99')">
                          Create an account
                        </button>
                        <ul>
                          <li>Provide unlimited customized technical help and answers via chat </li>
                          <li>
                            Every User can host up to 10 posts (services)
                          </li>
                          <li> Tech Hunters Members Group Access </li>
                          <li>Join our discussions </li>
                          <li>Tech Hunters Members "Get Tech Help" Page Access </li>
                          <li> Ask and find technical answers </li>

                        </ul>
                      </div>
                   </div>
                    <div class="card" class="package-info">
                      <div class="package-wrapper silver">
                        <h3>
                          Silver
                        </h3>
                        <p class="package-price">
                          from <br>
                          USD
                          <span> 12.99</span>
                          / mo
                        </p>

                      </div>
                      <div class="package-details">
                        <button variant="default" @click="toCreate('BecomeTechHunter','silver','12.99')">
                          Create an account
                        </button>
                        <ul>
                          <li>Get unlimited customized technical help and answers via chat </li>
                          <li>
                            Every User can host up to 10 posts (services)
                          </li>
                          <li> Tech Hunters Members Group Access </li>
                          <li>Join our discussions </li>
                          <li>Tech Hunters Members "Get Tech Help" Page Access </li>
                          <li> Ask and find technical answers </li>

                        </ul>
                      </div>
                   </div>
                    <div class="card" class="package-info">
                      <div class="package-wrapper gold">
                        <h3>
                          Gold
                        </h3>
                        <p class="package-price">
                          from <br>
                          USD
                          <span> 15.99</span>
                          / mo
                        </p>

                      </div>
                      <div class="package-details">
                        <button variant="default" @click="toCreate('BecomeTechHunter','gold','15.99')">
                          Create an account
                        </button>
                        <ul>
                          <li>Get unlimited customized technical help and answers via chat </li>
                          <li>
                            Every User can host up to 10 posts (services)
                          </li>
                          <li> Tech Hunters Members Group Access </li>
                          <li>Join our discussions </li>
                          <li>Tech Hunters Members "Get Tech Help" Page Access </li>
                          <li> Ask and find technical answers </li>

                        </ul>
                      </div>
                   </div>
                  </div>
                </div>

            </b-tab>
          </b-tabs>
        </div>
      </div>
    </div>
  </section>
 