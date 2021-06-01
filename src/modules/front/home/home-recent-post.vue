<template>
 <div>
   <section class="home_tech_profiles">
     <div class="section-title">
       <b-container class="position-relative">
         <h2>
           We Make The Perfect Solutions
           <span>
           We are committed to providing our customers with exceptional service
         </span>
         </h2>
         <router-link to="/all-profiles">
           See all Profiles
         </router-link>
       </b-container>
     </div>
     <b-container>
       <div class="swiper-container" id="recent_post_pro">
         <!-- Additional required wrapper -->
         <div class="swiper-wrapper">
           <div class="swiper-slide" v-for="(recent_post, index) in pros" :key="index">
             <b-card class="service_card tech_profile p-0">
               <div class="service_image">
                 <img :src="`/images/team-${recent_post.id}.jpg`"/>
               </div>
               <b-card-text>
                 <router-link to="/single-page">
                   <div class="service_title">
                     {{recent_post.name}}
                   </div>
                   <div class="service_rating">
                     <svg width="80px" height="14px" viewBox="0 0 80 14" version="1.1" xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink">
                       <title>Group Copy 14</title>
                       <defs>
                         <rect id="path-1" x="377" y="903" width="261" height="371" rx="12"></rect>
                         <filter x="-7.5%" y="-4.4%" width="114.9%" height="110.5%" filterUnits="objectBoundingBox"
                                 id="filter-2">
                           <feOffset dx="0" dy="3" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                           <feGaussianBlur stdDeviation="6" in="shadowOffsetOuter1"
                                           result="shadowBlurOuter1"></feGaussianBlur>
                           <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out"
                                        result="shadowBlurOuter1"></feComposite>
                           <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.101617133 0" type="matrix"
                                          in="shadowBlurOuter1"></feColorMatrix>
                         </filter>
                       </defs>
                       <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                         <g id="Home" transform="translate(-402.000000, -1172.000000)">
                           <g id="Rectangle-Copy-60">
                             <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
                             <rect stroke="#EEEEEE" stroke-width="1" stroke-linejoin="square" fill="#FFFFFF"
                                   fill-rule="evenodd"
                                   x="377.5" y="903.5" width="260" height="370" rx="12"></rect>
                           </g>
                           <g id="Group-Copy-14" transform="translate(402.000000, 1172.000000)" fill-rule="nonzero">
                             <g id="148841" fill="#EFCE4A">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                             <g id="148841-copy" transform="translate(17.000000, 0.000000)" fill="#EFCE4A">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                             <g id="148841-copy-2" transform="translate(33.000000, 0.000000)" fill="#EFCE4A">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                             <g id="148841-copy-3" transform="translate(48.000000, 0.000000)" fill="#EFCE4A">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                             <g id="148841-copy-4" transform="translate(65.000000, 0.000000)" fill="#ACACAC">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                           </g>
                         </g>
                       </g>
                     </svg>
                   </div>
                 </router-link>
                 <div class="category-tags">
                   <router-link to="/">Designing</router-link>
                   <router-link to="/">UI / UX</router-link>
                 </div>
                 <div class="service_price">
                   <small>
                     Price
                   </small>
                   $$$ USD
                 </div>
               </b-card-text>
             </b-card>
           </div>

         </div>
         <div class="swiper-pagination-1"></div>
         <a class="btn btn-default btn_prev" @click="swiperPrev_1">
           <i class="fa fa-angle-left"></i>
         </a>
         <a class="btn btn-default btn_next" @click="swiperNext_1">
           <i class="fa fa-angle-right"></i>
         </a>
       </div>
     </b-container>
   </section>

   <section>
     <div class="section-title">
       <b-container class="position-relative">
         <h2>
           Recent posted services
         </h2>
         <router-link to="/all-profiles">
           See all services
         </router-link>
       </b-container>
     </div>
     <b-container>
       <div class="swiper-container" id="recent_post">
         <!-- Additional required wrapper -->
         <div class="swiper-wrapper">
           <div class="swiper-slide">
             <b-card class="service_card p-0">
               <div class="service_image">
                 <img :src="`/images/services/s1.png`"/>
               </div>
               <b-card-text>
                 <router-link to="/single-page"> <div class="comp_name">
                   <b-avatar size="64" :src="`/images/avatars/avatar-1.png`"></b-avatar>
                   RF computer services
                 </div>
                   <div class="service_title">
                     Computer, Laptop, Mobile Phone, Repairs, Sales and Service
                   </div>
                   <div class="service_rating">
                     <svg width="80px" height="14px" viewBox="0 0 80 14" version="1.1" xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink">
                       <title>Group Copy 14</title>
                       <defs>
                         <rect id="path-1" x="377" y="903" width="261" height="371" rx="12"></rect>
                         <filter x="-7.5%" y="-4.4%" width="114.9%" height="110.5%" filterUnits="objectBoundingBox"
                                 id="filter-2">
                           <feOffset dx="0" dy="3" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                           <feGaussianBlur stdDeviation="6" in="shadowOffsetOuter1"
                                           result="shadowBlurOuter1"></feGaussianBlur>
                           <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out"
                                        result="shadowBlurOuter1"></feComposite>
                           <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.101617133 0" type="matrix"
                                          in="shadowBlurOuter1"></feColorMatrix>
                         </filter>
                       </defs>
                       <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                         <g id="Home" transform="translate(-402.000000, -1172.000000)">
                           <g id="Rectangle-Copy-60">
                             <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
                             <rect stroke="#EEEEEE" stroke-width="1" stroke-linejoin="square" fill="#FFFFFF"
                                   fill-rule="evenodd"
                                   x="377.5" y="903.5" width="260" height="370" rx="12"></rect>
                           </g>
                           <g id="Group-Copy-14" transform="translate(402.000000, 1172.000000)" fill-rule="nonzero">
                             <g id="148841" fill="#EFCE4A">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                             <g id="148841-copy" transform="translate(17.000000, 0.000000)" fill="#EFCE4A">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                             <g id="148841-copy-2" transform="translate(33.000000, 0.000000)" fill="#EFCE4A">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                             <g id="148841-copy-3" transform="translate(48.000000, 0.000000)" fill="#EFCE4A">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                             <g id="148841-copy-4" transform="translate(65.000000, 0.000000)" fill="#ACACAC">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                           </g>
                         </g>
                       </g>
                     </svg>
                   </div>
                 </router-link>
                 <div class="category-tags">
                   <router-link to="/">Networking</router-link>
                   <router-link to="/">Repair</router-link>
                 </div>
                 <div class="service_price">
                   <small>
                     Price
                   </small>
                   $$$ USD
                 </div>
               </b-card-text>
             </b-card>
           </div>
           <div class="swiper-slide">
             <b-card class="service_card p-0">
               <div class="service_image">
                 <img :src="`/images/services/s2.png`"/>
               </div>
               <b-card-text>
                 <router-link to="/single-page"> <div class="comp_name">
                   <b-avatar size="64" :src="`/images/avatars/avatar-1.png`"></b-avatar>
                   RF computer services
                 </div>
                   <div class="service_title">
                     Computer, Laptop, Mobile Phone, Repairs, Sales and Service
                   </div>
                   <div class="service_rating">
                     <svg width="80px" height="14px" viewBox="0 0 80 14" version="1.1" xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink">
                       <title>Group Copy 14</title>
                       <defs>
                         <rect id="path-1" x="377" y="903" width="261" height="371" rx="12"></rect>
                         <filter x="-7.5%" y="-4.4%" width="114.9%" height="110.5%" filterUnits="objectBoundingBox"
                                 id="filter-2">
                           <feOffset dx="0" dy="3" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                           <feGaussianBlur stdDeviation="6" in="shadowOffsetOuter1"
                                           result="shadowBlurOuter1"></feGaussianBlur>
                           <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out"
                                        result="shadowBlurOuter1"></feComposite>
                           <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.101617133 0" type="matrix"
                                          in="shadowBlurOuter1"></feColorMatrix>
                         </filter>
                       </defs>
                       <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                         <g id="Home" transform="translate(-402.000000, -1172.000000)">
                           <g id="Rectangle-Copy-60">
                             <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
                             <rect stroke="#EEEEEE" stroke-width="1" stroke-linejoin="square" fill="#FFFFFF"
                                   fill-rule="evenodd"
                                   x="377.5" y="903.5" width="260" height="370" rx="12"></rect>
                           </g>
                           <g id="Group-Copy-14" transform="translate(402.000000, 1172.000000)" fill-rule="nonzero">
                             <g id="148841" fill="#EFCE4A">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                             <g id="148841-copy" transform="translate(17.000000, 0.000000)" fill="#EFCE4A">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                             <g id="148841-copy-2" transform="translate(33.000000, 0.000000)" fill="#EFCE4A">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                             <g id="148841-copy-3" transform="translate(48.000000, 0.000000)" fill="#EFCE4A">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                             <g id="148841-copy-4" transform="translate(65.000000, 0.000000)" fill="#ACACAC">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                           </g>
                         </g>
                       </g>
                     </svg>
                   </div>
                 </router-link>
                 <div class="category-tags">
                   <router-link to="/">Networking</router-link>
                   <router-link to="/">Repair</router-link>
                 </div>
                 <div class="service_price">
                   <small>
                     Price
                   </small>
                   $$$ USD
                 </div>
               </b-card-text>
             </b-card>
           </div>
           <div class="swiper-slide">
             <b-card class="service_card p-0">
               <div class="service_image">
                 <img :src="`/images/services/s3.png`"/>
               </div>
               <b-card-text>
                 <router-link to="/single-page"> <div class="comp_name">
                   <b-avatar size="64" :src="`/images/avatars/avatar-1.png`"></b-avatar>
                   RF computer services
                 </div>
                   <div class="service_title">
                     Computer, Laptop, Mobile Phone, Repairs, Sales and Service
                   </div>
                   <div class="service_rating">
                     <svg width="80px" height="14px" viewBox="0 0 80 14" version="1.1" xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink">
                       <title>Group Copy 14</title>
                       <defs>
                         <rect id="path-1" x="377" y="903" width="261" height="371" rx="12"></rect>
                         <filter x="-7.5%" y="-4.4%" width="114.9%" height="110.5%" filterUnits="objectBoundingBox"
                                 id="filter-2">
                           <feOffset dx="0" dy="3" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                           <feGaussianBlur stdDeviation="6" in="shadowOffsetOuter1"
                                           result="shadowBlurOuter1"></feGaussianBlur>
                           <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out"
                                        result="shadowBlurOuter1"></feComposite>
                           <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.101617133 0" type="matrix"
                                          in="shadowBlurOuter1"></feColorMatrix>
                         </filter>
                       </defs>
                       <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                         <g id="Home" transform="translate(-402.000000, -1172.000000)">
                           <g id="Rectangle-Copy-60">
                             <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
                             <rect stroke="#EEEEEE" stroke-width="1" stroke-linejoin="square" fill="#FFFFFF"
                                   fill-rule="evenodd"
                                   x="377.5" y="903.5" width="260" height="370" rx="12"></rect>
                           </g>
                           <g id="Group-Copy-14" transform="translate(402.000000, 1172.000000)" fill-rule="nonzero">
                             <g id="148841" fill="#EFCE4A">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                             <g id="148841-copy" transform="translate(17.000000, 0.000000)" fill="#EFCE4A">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                             <g id="148841-copy-2" transform="translate(33.000000, 0.000000)" fill="#EFCE4A">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                             <g id="148841-copy-3" transform="translate(48.000000, 0.000000)" fill="#EFCE4A">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                             <g id="148841-copy-4" transform="translate(65.000000, 0.000000)" fill="#ACACAC">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                           </g>
                         </g>
                       </g>
                     </svg>
                   </div>
                 </router-link>
                 <div class="category-tags">
                   <router-link to="/">Networking</router-link>
                   <router-link to="/">Repair</router-link>
                 </div>
                 <div class="service_price">
                   <small>
                     Price
                   </small>
                   $$$ USD
                 </div>
               </b-card-text>
             </b-card>
           </div>
           <div class="swiper-slide">
             <b-card class="service_card p-0">
               <div class="service_image">
                 <img :src="`/images/services/s4.png`"/>
               </div>
               <b-card-text>
                 <router-link to="/single-page"> <div class="comp_name">
                   <b-avatar size="64" :src="`/images/avatars/avatar-1.png`"></b-avatar>
                   RF computer services
                 </div>
                   <div class="service_title">
                     Computer, Laptop, Mobile Phone, Repairs, Sales and Service
                   </div>
                   <div class="service_rating">
                     <svg width="80px" height="14px" viewBox="0 0 80 14" version="1.1" xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink">
                       <title>Group Copy 14</title>
                       <defs>
                         <rect id="path-1" x="377" y="903" width="261" height="371" rx="12"></rect>
                         <filter x="-7.5%" y="-4.4%" width="114.9%" height="110.5%" filterUnits="objectBoundingBox"
                                 id="filter-2">
                           <feOffset dx="0" dy="3" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                           <feGaussianBlur stdDeviation="6" in="shadowOffsetOuter1"
                                           result="shadowBlurOuter1"></feGaussianBlur>
                           <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out"
                                        result="shadowBlurOuter1"></feComposite>
                           <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.101617133 0" type="matrix"
                                          in="shadowBlurOuter1"></feColorMatrix>
                         </filter>
                       </defs>
                       <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                         <g id="Home" transform="translate(-402.000000, -1172.000000)">
                           <g id="Rectangle-Copy-60">
                             <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
                             <rect stroke="#EEEEEE" stroke-width="1" stroke-linejoin="square" fill="#FFFFFF"
                                   fill-rule="evenodd"
                                   x="377.5" y="903.5" width="260" height="370" rx="12"></rect>
                           </g>
                           <g id="Group-Copy-14" transform="translate(402.000000, 1172.000000)" fill-rule="nonzero">
                             <g id="148841" fill="#EFCE4A">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                             <g id="148841-copy" transform="translate(17.000000, 0.000000)" fill="#EFCE4A">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                             <g id="148841-copy-2" transform="translate(33.000000, 0.000000)" fill="#EFCE4A">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                             <g id="148841-copy-3" transform="translate(48.000000, 0.000000)" fill="#EFCE4A">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                             <g id="148841-copy-4" transform="translate(65.000000, 0.000000)" fill="#ACACAC">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                           </g>
                         </g>
                       </g>
                     </svg>
                   </div>
                 </router-link>
                 <div class="category-tags">
                   <router-link to="/">Networking</router-link>
                   <router-link to="/">Repair</router-link>
                 </div>
                 <div class="service_price">
                   <small>
                     Price
                   </small>
                   $$$ USD
                 </div>
               </b-card-text>
             </b-card>
           </div>
           <div class="swiper-slide">
             <b-card class="service_card p-0">
               <div class="service_image">
                 <img :src="`/images/services/s1.png`"/>
               </div>
               <b-card-text>
                 <router-link to="/single-page"> <div class="comp_name">
                   <b-avatar size="64" :src="`/images/avatars/avatar-1.png`"></b-avatar>
                   RF computer services
                 </div>
                   <div class="service_title">
                     Computer, Laptop, Mobile Phone, Repairs, Sales and Service
                   </div>
                   <div class="service_rating">
                     <svg width="80px" height="14px" viewBox="0 0 80 14" version="1.1" xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink">
                       <title>Group Copy 14</title>
                       <defs>
                         <rect id="path-1" x="377" y="903" width="261" height="371" rx="12"></rect>
                         <filter x="-7.5%" y="-4.4%" width="114.9%" height="110.5%" filterUnits="objectBoundingBox"
                                 id="filter-2">
                           <feOffset dx="0" dy="3" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                           <feGaussianBlur stdDeviation="6" in="shadowOffsetOuter1"
                                           result="shadowBlurOuter1"></feGaussianBlur>
                           <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out"
                                        result="shadowBlurOuter1"></feComposite>
                           <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.101617133 0" type="matrix"
                                          in="shadowBlurOuter1"></feColorMatrix>
                         </filter>
                       </defs>
                       <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                         <g id="Home" transform="translate(-402.000000, -1172.000000)">
                           <g id="Rectangle-Copy-60">
                             <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
                             <rect stroke="#EEEEEE" stroke-width="1" stroke-linejoin="square" fill="#FFFFFF"
                                   fill-rule="evenodd"
                                   x="377.5" y="903.5" width="260" height="370" rx="12"></rect>
                           </g>
                           <g id="Group-Copy-14" transform="translate(402.000000, 1172.000000)" fill-rule="nonzero">
                             <g id="148841" fill="#EFCE4A">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                             <g id="148841-copy" transform="translate(17.000000, 0.000000)" fill="#EFCE4A">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                             <g id="148841-copy-2" transform="translate(33.000000, 0.000000)" fill="#EFCE4A">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                             <g id="148841-copy-3" transform="translate(48.000000, 0.000000)" fill="#EFCE4A">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                             <g id="148841-copy-4" transform="translate(65.000000, 0.000000)" fill="#ACACAC">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                           </g>
                         </g>
                       </g>
                     </svg>
                   </div>
                 </router-link>
                 <div class="category-tags">
                   <router-link to="/">Networking</router-link>
                   <router-link to="/">Repair</router-link>
                 </div>
                 <div class="service_price">
                   <small>
                     Price
                   </small>
                   $$$ USD
                 </div>
               </b-card-text>
             </b-card>
           </div>
           <div class="swiper-slide">
             <b-card class="service_card p-0">
               <div class="service_image">
                 <img :src="`/images/services/s2.png`"/>
               </div>
               <b-card-text>
                 <router-link to="/single-page"> <div class="comp_name">
                   <b-avatar size="64" :src="`/images/avatars/avatar-1.png`"></b-avatar>
                   RF computer services
                 </div>
                   <div class="service_title">
                     Computer, Laptop, Mobile Phone, Repairs, Sales and Service
                   </div>
                   <div class="service_rating">
                     <svg width="80px" height="14px" viewBox="0 0 80 14" version="1.1" xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink">
                       <title>Group Copy 14</title>
                       <defs>
                         <rect id="path-1" x="377" y="903" width="261" height="371" rx="12"></rect>
                         <filter x="-7.5%" y="-4.4%" width="114.9%" height="110.5%" filterUnits="objectBoundingBox"
                                 id="filter-2">
                           <feOffset dx="0" dy="3" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                           <feGaussianBlur stdDeviation="6" in="shadowOffsetOuter1"
                                           result="shadowBlurOuter1"></feGaussianBlur>
                           <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out"
                                        result="shadowBlurOuter1"></feComposite>
                           <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.101617133 0" type="matrix"
                                          in="shadowBlurOuter1"></feColorMatrix>
                         </filter>
                       </defs>
                       <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                         <g id="Home" transform="translate(-402.000000, -1172.000000)">
                           <g id="Rectangle-Copy-60">
                             <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
                             <rect stroke="#EEEEEE" stroke-width="1" stroke-linejoin="square" fill="#FFFFFF"
                                   fill-rule="evenodd"
                                   x="377.5" y="903.5" width="260" height="370" rx="12"></rect>
                           </g>
                           <g id="Group-Copy-14" transform="translate(402.000000, 1172.000000)" fill-rule="nonzero">
                             <g id="148841" fill="#EFCE4A">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                             <g id="148841-copy" transform="translate(17.000000, 0.000000)" fill="#EFCE4A">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                             <g id="148841-copy-2" transform="translate(33.000000, 0.000000)" fill="#EFCE4A">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                             <g id="148841-copy-3" transform="translate(48.000000, 0.000000)" fill="#EFCE4A">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                             <g id="148841-copy-4" transform="translate(65.000000, 0.000000)" fill="#ACACAC">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                           </g>
                         </g>
                       </g>
                     </svg>
                   </div>
                 </router-link>
                 <div class="category-tags">
                   <router-link to="/">Networking</router-link>
                   <router-link to="/">Repair</router-link>
                 </div>
                 <div class="service_price">
                   <small>
                     Price
                   </small>
                   $$$ USD
                 </div>
               </b-card-text>
             </b-card>
           </div>
           <div class="swiper-slide">
             <b-card class="service_card p-0">
               <div class="service_image">
                 <img :src="`/images/services/s3.png`"/>
               </div>
               <b-card-text>
                 <router-link to="/single-page"> <div class="comp_name">
                   <b-avatar size="64" :src="`/images/avatars/avatar-1.png`"></b-avatar>
                   RF computer services
                 </div>
                   <div class="service_title">
                     Computer, Laptop, Mobile Phone, Repairs, Sales and Service
                   </div>
                   <div class="service_rating">
                     <svg width="80px" height="14px" viewBox="0 0 80 14" version="1.1" xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink">
                       <title>Group Copy 14</title>
                       <defs>
                         <rect id="path-1" x="377" y="903" width="261" height="371" rx="12"></rect>
                         <filter x="-7.5%" y="-4.4%" width="114.9%" height="110.5%" filterUnits="objectBoundingBox"
                                 id="filter-2">
                           <feOffset dx="0" dy="3" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                           <feGaussianBlur stdDeviation="6" in="shadowOffsetOuter1"
                                           result="shadowBlurOuter1"></feGaussianBlur>
                           <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out"
                                        result="shadowBlurOuter1"></feComposite>
                           <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.101617133 0" type="matrix"
                                          in="shadowBlurOuter1"></feColorMatrix>
                         </filter>
                       </defs>
                       <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                         <g id="Home" transform="translate(-402.000000, -1172.000000)">
                           <g id="Rectangle-Copy-60">
                             <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
                             <rect stroke="#EEEEEE" stroke-width="1" stroke-linejoin="square" fill="#FFFFFF"
                                   fill-rule="evenodd"
                                   x="377.5" y="903.5" width="260" height="370" rx="12"></rect>
                           </g>
                           <g id="Group-Copy-14" transform="translate(402.000000, 1172.000000)" fill-rule="nonzero">
                             <g id="148841" fill="#EFCE4A">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                             <g id="148841-copy" transform="translate(17.000000, 0.000000)" fill="#EFCE4A">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                             <g id="148841-copy-2" transform="translate(33.000000, 0.000000)" fill="#EFCE4A">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                             <g id="148841-copy-3" transform="translate(48.000000, 0.000000)" fill="#EFCE4A">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                             <g id="148841-copy-4" transform="translate(65.000000, 0.000000)" fill="#ACACAC">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                           </g>
                         </g>
                       </g>
                     </svg>
                   </div>
                 </router-link>
                 <div class="category-tags">
                   <router-link to="/">Networking</router-link>
                   <router-link to="/">Repair</router-link>
                 </div>
                 <div class="service_price">
                   <small>
                     Price
                   </small>
                   $$$ USD
                 </div>
               </b-card-text>
             </b-card>
           </div>
           <div class="swiper-slide">
             <b-card class="service_card p-0">
               <div class="service_image">
                 <img :src="`/images/services/s4.png`"/>
               </div>
               <b-card-text>
                 <router-link to="/single-page"> <div class="comp_name">
                   <b-avatar size="64" :src="`/images/avatars/avatar-1.png`"></b-avatar>
                   RF computer services
                 </div>
                   <div class="service_title">
                     Computer, Laptop, Mobile Phone, Repairs, Sales and Service
                   </div>
                   <div class="service_rating">
                     <svg width="80px" height="14px" viewBox="0 0 80 14" version="1.1" xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink">
                       <title>Group Copy 14</title>
                       <defs>
                         <rect id="path-1" x="377" y="903" width="261" height="371" rx="12"></rect>
                         <filter x="-7.5%" y="-4.4%" width="114.9%" height="110.5%" filterUnits="objectBoundingBox"
                                 id="filter-2">
                           <feOffset dx="0" dy="3" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                           <feGaussianBlur stdDeviation="6" in="shadowOffsetOuter1"
                                           result="shadowBlurOuter1"></feGaussianBlur>
                           <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out"
                                        result="shadowBlurOuter1"></feComposite>
                           <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.101617133 0" type="matrix"
                                          in="shadowBlurOuter1"></feColorMatrix>
                         </filter>
                       </defs>
                       <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                         <g id="Home" transform="translate(-402.000000, -1172.000000)">
                           <g id="Rectangle-Copy-60">
                             <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
                             <rect stroke="#EEEEEE" stroke-width="1" stroke-linejoin="square" fill="#FFFFFF"
                                   fill-rule="evenodd"
                                   x="377.5" y="903.5" width="260" height="370" rx="12"></rect>
                           </g>
                           <g id="Group-Copy-14" transform="translate(402.000000, 1172.000000)" fill-rule="nonzero">
                             <g id="148841" fill="#EFCE4A">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                             <g id="148841-copy" transform="translate(17.000000, 0.000000)" fill="#EFCE4A">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                             <g id="148841-copy-2" transform="translate(33.000000, 0.000000)" fill="#EFCE4A">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                             <g id="148841-copy-3" transform="translate(48.000000, 0.000000)" fill="#EFCE4A">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                             <g id="148841-copy-4" transform="translate(65.000000, 0.000000)" fill="#ACACAC">
                               <polygon id="Path"
                                        points="7.50013923 0 9.81751351 4.60845972 15 5.3476606 11.2499304 8.93462942 12.1351662 14 7.50013923 11.6085964 2.86483376 14 3.75006962 8.93462942 0 5.3476606 5.18248649 4.60845972"></polygon>
                             </g>
                           </g>
                         </g>
                       </g>
                     </svg>
                   </div>
                 </router-link>
                 <div class="category-tags">
                   <router-link to="/">Networking</router-link>
                   <router-link to="/">Repair</router-link>
                 </div>
                 <div class="service_price">
                   <small>
                     Price
                   </small>
                   $$$ USD
                 </div>
               </b-card-text>
             </b-card>
           </div>

         </div>
         <div class="swiper-pagination"></div>
                 <a class="btn btn-default btn_prev" @click="swiperPrev">
                   <i class="fa fa-angle-left"></i>
                 </a>
                 <a class="btn btn-default btn_next" @click="swiperNext">
                 <i class="fa fa-angle-right"></i>
                 </a>
       </div>
     </b-container>
   </section>
 </div>
</template>


<script>


import Swiper from 'swiper'

export default {
  name: 'HomeRecentPosts',
  data() {
    return {
      swiper: '',
      pros:[
          { id:1, name:'Kevin' },
        {
          id:2,
          name:'Kevin'
        },
        {
          id:3,
          name:'Dubran'
        },
        {
          id:1,
          name:'Emiliiya'
        },
      {
          id:4,
          name:'Rosanda Hytt'
        }
        ,{
          id:1,
          name:'Mihi Hype'
        }
        ,{
          id:2,
          name:'Kevin'
        }]
    }
  },
  components: {},

  methods: {
    swiperPrev () {
      this.swiper_recent.slidePrev()
    },
    swiperNext () {
      this.swiper_recent.slideNext()
    }
    ,
    swiperPrev_1 () {
      this.swiper_pro.slidePrev()
    },
    swiperNext_1 () {
      this.swiper_pro.slideNext()
    }
  },
  mounted () {
    this.swiper_pro = new Swiper('#recent_post_pro', {
      // Optional parameters
      loop: false,
      spaceBetween: 0,
      slidesPerView: 'auto',
      centeredSlides:false,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 12
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 12
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 12
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 12
        },
        900: {
          slidesPerView: 4,
          spaceBetween:12
        }


      }


    })
    this.swiper_recent = new Swiper('#recent_post', {
      // Optional parameters
      loop: false,
      spaceBetween: 0,
      slidesPerView: 'auto',
      centeredSlides:false,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 12
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 12
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 12
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 12
        },
        900: {
          slidesPerView: 4,
          spaceBetween:12
        }
      }


    })

  }
}
</script>
