<template>
  <header style="background:url('/images/tiger-header.jpg') center center no-repeat; background-size:cover;">

    <b-modal size="lg" id="become-a-member">

      <b-row>
        <b-col md="12">
          <div class="title">
           <h2>
            FREE Tech Hunter Advisors <br> for members
             <span>
             Find highly recommended Network Admins / Techs / IT/ MSP /Web Design/ Software
Developers / Dev Ops
            </span>
           </h2>
          </div>
        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col md="6">
          <h4>
            Free for members'
          </h4>
          <ul>
            <li>
              <i class="fa fa-check">

              </i>
              Get instant remote support on PC or phone
            </li>
            <li>
              <i class="fa fa-check"></i>
              Chat with Technician instantly
            </li>
            <li>
              <i class="fa fa-check"></i>
              Encrypted video meetings
            </li>
            <li><i class="fa fa-check"></i>Priority customer support</li>
            <li><i class="fa fa-check"></i>Remote support 24 X 7</li>
            <li><i class="fa fa-check"></i>Cancel your account at any time</li>

            <li>
              <i class="fa fa-check"></i> On-demand remote software
            </li>
            <li>
              <i class="fa fa-check"></i> Help to get customers like home advisor
            </li>
          </ul>

          <b-button variant="light" @click="toPackage">
            Become a Member
          </b-button>

        </b-col>

      </b-row>
    </b-modal>


    <div class="top-header">
      <b-container>

        <ul class="list-group list-group-horizontal">
          <li class="social-network fb">
            <a href="#">
              <i class="fa fa-facebook"/>
            </a>
          </li>

          <li class="social-network tw">
            <a href="#">
              <i class="fa fa-twitter"/>
            </a>
          </li>

          <li class="social-network in">
            <a href="#">
              <i class="fa fa-linkedin"/>
            </a>
          </li>

          <li>
            &nbsp;
          </li>
          <li>
            <router-link to="/ads">Advertisements</router-link>
          </li>
          <li>
            <router-link to="/why">Why us ?</router-link>
          </li>
          <li>
            <b-dropdown>
              <template #button-content>
                Languages
              </template>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">FR</b-dropdown-item>
            </b-dropdown>
          </li>
        </ul>
      </b-container>
    </div>
    <b-container>
      <b-row>
        <b-col md="4">
          <router-link to="/" id="logo">
            <img style="width:100%;" src="/images/logo-white.png"/>
          </router-link>
        </b-col>
        <b-col md="8" class="py-4 d-flex justify-content-end align-content-center section-sign-in">

          <b-button v-b-modal.become-a-member variant="primary" class="mr-4 become-a-member">
            <i class="fa fa-user" aria-hidden="true"></i>
            Become a Member
          </b-button>
          <b-dropdown class="mr-4 for-business" variant="primary">
            <template #button-content>
              <i class="fa fa-briefcase" aria-hidden="true"></i> Business
            </template>
            <b-dropdown-item to="/become-tech-hunter">
              <i class="fa fa-user-circle" aria-hidden="true"></i> Become a Tech Hunter Pro
            </b-dropdown-item>
            <b-dropdown-item to="/create-business">
              <i class="fa fa-briefcase" aria-hidden="true"></i>
              Create a Business
            </b-dropdown-item>
            <b-dropdown-item to="/create-post">
              <i class="fa fa-list" aria-hidden="true"></i> Post an advertisement
            </b-dropdown-item>
            <b-dropdown-item to="/create-promotion">
              <i class="fa fa-tag" aria-hidden="true"></i> Post promotions
            </b-dropdown-item>
          </b-dropdown>
          <b-dropdown class="profile-dropdown">
            <template #button-content>
              <span v-if="isAuthenticated">
                <b-avatar src="/images/avatars/avatar-5.png" size="36"></b-avatar>
                Account
              </span>
              <span v-else>
                <i class="fa fa-user"></i>
              Login
              </span>
            </template>

            <div class="logged-in-profile" v-if="isAuthenticated">
              <div class="dropdown-profile-info">
                <div class="d-flex">
                  <b-avatar src="/images/avatars/avatar-5.png" size="72"></b-avatar>
                  <div>
                    <h4>
                      Andrew Emiliya
                    </h4>
                    <a class="btn btn-link" href="mailto:andrewemilya@gmail.com">andrewemilya@gmail.com</a>
                    <span class="badge badge-warning">
                                Hunter Member
                              </span>
                    <router-link to="/profile" class="btn btn-link">View Profile</router-link>
                  </div>
                </div>

              </div>
              <ul>
                <li>
                  <router-link to="/"><i class="fa fa-comments-o" aria-hidden="true"></i> Give feedback improve
                    MyTechHunter
                  </router-link>
                </li>
                <li>
                  <router-link to="/">

                    <i class="fa fa-cogs" aria-hidden="true"></i>
                    Settings & Privacy
                  </router-link>
                </li>
                <li>
                  <router-link to="/">

                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                    Messages
                  </router-link>
                </li>
                <li>
                  <router-link to="/logout">
                    <i class="fa fa-power-off" aria-hidden="true"></i>
                    Log out
                  </router-link>
                </li>
              </ul>
            </div>

            <b-dropdown-form v-else>
              <b-overlay
                  :show="busy"
                  rounded
                  opacity="0.6"
                  spinner-small
                  spinner-variant="primary"
                  class="d-inline-block"
              >

                <p>
                  <strong>
                    User Registration
                  </strong>
                </p>
                <b-form-group label-for="dropdown-form-email" @submit.stop.prevent>
                  <b-form-input
                      id="dropdown-form-email"
                      size="sm"
                      placeholder="email@example.com"
                  ></b-form-input>
                </b-form-group>
                <b-form-group label-for="dropdown-form-password">
                  <b-form-input
                      id="dropdown-form-password"
                      type="password"
                      size="sm"
                      placeholder="Password"
                  ></b-form-input>
                </b-form-group>
                <b-form-checkbox class="mb-3">Remember me</b-form-checkbox>
                <div class="d-flex align-content-center">
                  <b-button variant="primary" class="btn-block" @click="Login">Login</b-button>
                </div>
              </b-overlay>
            </b-dropdown-form>
            <b-dropdown-item to="/register" v-if="!isAuthenticated">
              <i class="fa fa-user" aria-hidden="true"></i>
             Register

            </b-dropdown-item>
          </b-dropdown>
          <b-button class="btn btn-icon ml-4" v-if="isAuthenticated">
            <i class="fa fa-bell-o"></i>
            <span class="badge badge-danger">
                  03
                </span>
          </b-button>
        </b-col>
      </b-row>
    </b-container>
    <b-navbar toggleable="lg" variant="primary">
      <b-container>
        <div class="d-flex mobile-toggle justify-content-between">
          <b-navbar-toggle target="nav-collapse" class="mobile-menu">
            <img src="/svgs/menu.svg"/>
          </b-navbar-toggle>
          <router-link to="/">
            <img class="logo" src="/images/favicon.png"/>
          </router-link>
          <div>
            <b-dropdown class="mr-4 profile-dropdown">
              <template #button-content>
                <img src="/svgs/user.svg"/>
              </template>
              <div class="logged-in-profile" v-if="isAuthenticated">
                <div class="dropdown-profile-info">
                  <div class="d-flex">
                    <b-avatar src="/images/avatars/avatar-5.png" size="72"></b-avatar>
                    <div>
                      <h4>
                        Andrew Emiliya
                      </h4>
                      <a class="btn btn-link" href="mailto:andrewemilya@gmail.com">andrewemilya@gmail.com</a>
                      <span class="badge badge-warning">
                                Hunter Member
                              </span>
                      <router-link to="/profile" class="btn btn-link">View Profile</router-link>
                    </div>
                  </div>

                </div>
                <ul>

                  <li>
                    <router-link to="/"><i class="fa fa-comments-o" aria-hidden="true"></i> Give feedback improve
                      MyTechHunter
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/">

                      <i class="fa fa-cogs" aria-hidden="true"></i>
                      Settings & Privacy
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/">

                      <i class="fa fa-envelope-o" aria-hidden="true"></i>
                      Messages
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/logout">
                      <i class="fa fa-power-off" aria-hidden="true"></i>
                      Log out
                    </router-link>
                  </li>


                </ul>
              </div>

              <b-dropdown-form v-else>
                <b-overlay
                    :show="busy"
                    rounded
                    opacity="0.6"
                    spinner-small
                    spinner-variant="primary"
                    class="d-inline-block"
                >
                  <b-form-group label="Email" label-for="dropdown-form-email" @submit.stop.prevent>
                    <b-form-input
                        id="dropdown-form-email"
                        size="sm"
                        placeholder="email@example.com"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group label="Password" label-for="dropdown-form-password">
                    <b-form-input
                        id="dropdown-form-password"
                        type="password"
                        size="sm"
                        placeholder="Password"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-checkbox class="mb-3">Remember me</b-form-checkbox>
                  <div class="d-flex align-content-center">
                    <b-button variant="primary" class="btn-block" @click="Login">Sign In</b-button>


                  </div>
                </b-overlay>
              </b-dropdown-form>
              <b-dropdown-item to="/register" v-if="!isAuthenticated">
                <i class="fa fa-user" aria-hidden="true"></i>
                Create an account
              </b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <li>
              <b-button v-b-modal.become-a-member variant="primary" class="mr-4 become-a-member">
                <i class="fa fa-user" aria-hidden="true"></i>
                Become a Member
              </b-button>
              <b-dropdown class="for-business" variant="primary">
                <template #button-content>
                  <i class="fa fa-briefcase" aria-hidden="true"></i> Business
                </template>
                <b-dropdown-item to="/get-tech-hunter">
                  <i class="fa fa-user-circle" aria-hidden="true"></i> Become a Tech Hunter Pro
                </b-dropdown-item>
                <b-dropdown-item to="/create-business">
                  <i class="fa fa-briefcase" aria-hidden="true"></i>
                  Create a Business
                </b-dropdown-item>
                <b-dropdown-item to="/create-post">
                  <i class="fa fa-list" aria-hidden="true"></i> Post an advertisement
                </b-dropdown-item>
                <b-dropdown-item to="/create-promotion">
                  <i class="fa fa-tag" aria-hidden="true"></i> Post promotions
                </b-dropdown-item>
              </b-dropdown>
            </li>

            <li>
              <router-link to="/">Network & Security

                <i class="fa fa-caret-down"></i>
              </router-link>
              <b-container fluid>
                <div>
                  <b-row>
                    <b-col md="8">
                      <ul class="row">
                        <li class="col-md-6">
                          <router-link to="/">PC Repair</router-link>
                        </li>
                        <li class="col-md-6">
                          <router-link to="/">Printer Repair</router-link>
                        </li>
                        <li class="col-md-6">
                          <router-link to="/">Servers Repair</router-link>
                        </li>
                        <li class="col-md-6">
                          <router-link to="/">Routers & Switchers Repair</router-link>
                        </li>

                        <li class="col-md-6">
                          <router-link to="/">Corporate-LANs/WANs troubleshooting</router-link>
                        </li>
                        <li class="col-md-6">
                          <router-link to="/">Computer hardware/software troubleshooting</router-link>
                        </li>
                        <li class="col-md-6">
                          <router-link to="/">Network Security implementation</router-link>
                        </li>


                        <li class="col-md-6">
                          <router-link to="/">Mobile phone repair</router-link>
                        </li>
                        <li class="col-md-6">
                          <router-link to="/">Staff training</router-link>
                        </li>
                        <li class="col-md-6">
                          <router-link to="/">Network Security implementation</router-link>
                        </li>

                      </ul>
                    </b-col>
                    <b-col md="4">

                    </b-col>
                  </b-row>
                </div>
              </b-container>
            </li>
            <li>
              <router-link to="/">Tech Support</router-link>
            </li>
            <li>
              <router-link to="/">Remote Services</router-link>
            </li>
            <li>
              <router-link to="/">Repair & Services</router-link>
            </li>
            <li>
              <router-link to="/">Development</router-link>
            </li>
            <li>
              <router-link to="/">Network & Security</router-link>
            </li>
            <li>
              <router-link class="btn btn-success btn-sm" to="/all-promotions">
                  <span class="badge badge-danger">
24
                  </span>
                Show Promotions
              </router-link>
            </li>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </header>
</template>


<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'HeaderComponent',
  data () {
    return {
      busy: false,
      val: false,
      monthly: false
    }
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
    isSearch () {
      return this.$route.name === 'SearchList'
    }
  },
  methods: {

    toPackage(){
      this.$router.push('/get-tech-hunter')
    },
    switchPricing () {
      this.monthly = !this.monthly
    },
    filter () {
      this.$store.commit('auth/SET_FILTER', !this.val, true)
    },

    ...mapActions('auth', ['AuthLogin']),
    Login () {
      this.busy = true
      setTimeout(() => {
        this.AuthLogin()
      }, 1500)
    },
  }
}
</script>
