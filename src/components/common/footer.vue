<template>

  <footer>

    <b-container>
      <b-row>
        <b-col md="3" sm="6">
          <ul class="list-group">
            <li>
              <a href="#">
                <strong> Business </strong>
              </a>
            </li>
            <li>
              <a href="#">
                Become a member
              </a>
            </li>

            <li>
              <a href="#">
                Become a Tech Pro
              </a>
            </li>
            <li>
              <a href="#">
                Create a Business
              </a>
            </li>
            <li>
              <a href="#">
                Post an advertisement
              </a>
            </li>
            <li>
              <a href="#">
                Post promotions
              </a>
            </li>
          </ul>
        </b-col>
        <b-col md="3" sm="6">
          <ul class="list-group">
            <li>
              <a href="#">
                <strong> Network & security </strong>
              </a>
            </li>
            <li>
              <a href="#">
                Become a member
              </a>
            </li>

            <li>
              <a href="#">
                Become a Tech Pro
              </a>
            </li>
            <li>
              <a href="#">
                Create a Business
              </a>
            </li>
            <li>
              <a href="#">
                Post an advertisement
              </a>
            </li>
            <li>
              <a href="#">
                Post promotions
              </a>
            </li>
          </ul>
        </b-col>
        <b-col md="3" sm="6">
          <ul class="list-group">
            <li>
              <a href="#">
                <strong> Remote Support </strong>
              </a>
            </li>
            <li>
              <a href="#">
                Become a member
              </a>
            </li>

            <li>
              <a href="#">
                Become a Tech Pro
              </a>
            </li>
            <li>
              <a href="#">
                Create a Business
              </a>
            </li>
            <li>
              <a href="#">
                Post an advertisement
              </a>
            </li>
            <li>
              <a href="#">
                Post promotions
              </a>
            </li>
          </ul>
        </b-col>
        <b-col md="3" sm="6">
          <ul class="list-group">
            <li>
              <a href="#">
                <strong> Repair & Services </strong>
              </a>
            </li>
            <li>
              <a href="#">
                Become a member
              </a>
            </li>

            <li>
              <a href="#">
                Become a Tech Pro
              </a>
            </li>
            <li>
              <a href="#">
                Create a Business
              </a>
            </li>
            <li>
              <a href="#">
                Post an advertisement
              </a>
            </li>
            <li>
              <a href="#">
                Post promotions
              </a>
            </li>
          </ul>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="3" sm="6">
          <ul class="list-group">
            <li>
              <a href="#">
                <strong> Development </strong>
              </a>
            </li>
            <li>
              <a href="#">
                Become a member
              </a>
            </li>

            <li>
              <a href="#">
                Become a Tech Pro
              </a>
            </li>
            <li>
              <a href="#">
                Create a Business
              </a>
            </li>
            <li>
              <a href="#">
                Post an advertisement
              </a>
            </li>
            <li>
              <a href="#">
                Post promotions
              </a>
            </li>
          </ul>
        </b-col>
        <b-col md="3" sm="6">
          <ul class="list-group">
            <li>
              <a href="#">
                <strong> About TechHunter </strong>
              </a>
            </li>
            <li>
              <a href="/about-us">
                About Us
              </a>
            </li>

            <li>
              <a href="/contact-us">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/ads">
                Advertisements
              </a>
            </li>
            <li>
              <a href="/why">
                Why My Tech Hunter ?
              </a>
            </li>

            <li>
              <a href="/faq">
                FAQ
              </a>
            </li>

          </ul>
        </b-col>
        <b-col md="3" sm="6">
          <ul class="list-group">
            <li>
              <a href="/">
                <strong> Become a Member </strong>
              </a>
            </li>
            <li>
              <a href="/get-tech-hunter">
                Get a Tech Hunter Pro
              </a>
            </li>

            <li>
              <a href="/become-tech-hunter">
                Become a Tech Hunter Pro
              </a>
            </li>

            <li>
              <a href="/create-business">
                Create a Business
              </a>
            </li>
            <li>
              <a href="/create-promotion">
                Post Promotions
              </a>
            </li>
            <li>
              <a href="/create-post">
             Create Post (services)
              </a>
            </li>


          </ul>
        </b-col>

      </b-row>
      <b-row>
        <b-col md="6">

          <form class="form-subscription">
            <h2>
              Subscribe for Newsletter
            </h2>
            <p>
              Sign up for our latest news & articles. We
              won’t give you spam mails.
            </p>
            <b-form-group >
              <b-form-input type="email" required/>
              <b-button  variant="primary" @click="subscribe">
                <i class="fa fa-envelope"></i>
                Email
              </b-button>
            </b-form-group>
          </form>
        </b-col>
        <b-col md="6">
        <p class="text-white">
          <strong>
            My Tech Hunters
            Headquarters<br>
          </strong>
          1859 SE Port St Lucie Blvd.<br>
          Port St Lucie, FL 34952<br>

          info@mytechhunter.com<br>

          772.249.3796
          <br><br>
        </p>



           <div class="social-network-icons">
             <a href="#" class="social-network fb">
               <i class="fa fa-facebook"/>
             </a>


             <a class="social-network tw">
               <i class="fa fa-twitter"/>
             </a>


             <a class="social-network in">
               <i class="fa fa-linkedin"/>

             </a>
           </div>

        </b-col>
      </b-row>



    </b-container>
  </footer>
</template>


<script>
export default {
  name: 'FooterComponent',
  methods:{
    subscribe(){



    }
  }
}
</script>
