---
layout : default.html
title : My Tech Hunter - HTML version
---
 <div>
   <section class="home_tech_profiles">
     <div class="section-title">
       <div class="container position-relative">
         <h2>
           We Make The Perfect Solutions
           <span>
           We are committed to providing our customers with exceptional service
         </span>
         </h2>
         <a href="/all-profiles">
           See all Profiles
         </a> 
       </div>
     </div>
     <div class="container">
       <div class="swiper-container" id="recent_post_pro">
         <!-- Additional required wrapper -->
         <div class="swiper-wrapper">
           <div class="swiper-slide" v-for="(recent_post, index) in pros" :key="index">
             <div class="card service_card tech_profile p-0">
               <div class="service_image">
                 <img :src="`/images/team-${recent_post.id}.jpg`"/>
               </div>
               <div class="card-text">
                 <a href="/single-page">
                   <div class="service_title">
                     recent_post.name
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
                 </a> 
                 <div class="category-tags">
                   <a href="/">Designing</a> 
                   <a href="/">UI / UX</a> 
                 </div>
                 <div class="service_price">
                   <small>
                     Price
                   </small>
                   $$$ USD
                 </div>
               </div>
            </div>
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
     </div>
   </section>

   <section>
     <div class="section-title">
       <div class="container" class="position-relative">
         <h2>
           Recent posted services
         </h2>
         <a href="/all-profiles">
           See all services
         </a> 
       </div>
     </div>
     <div class="container">
       <div class="swiper-container" id="recent_post">
         <!-- Additional required wrapper -->
         <div class="swiper-wrapper">
           <div class="swiper-slide">
             <div class="card" class="service_card p-0">
               <div class="service_image">
                 <img :src="`/images/services/s1.png`"/>
               </div>
               <div class="card-text">
                 <a href="/single-page"> <div class="comp_name">
                   <div size="64" :src="`/images/avatars/avatar-1.png`"></div>
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
                 </a> 
                 <div class="category-tags">
                   <a href="/">Networking</a> 
                   <a href="/">Repair</a> 
                 </div>
                 <div class="service_price">
                   <small>
                     Price
                   </small>
                   $$$ USD
                 </div>
               </div>
            </div>
           </div>
           <div class="swiper-slide">
             <div class="card" class="service_card p-0">
               <div class="service_image">
                 <img :src="`/images/services/s2.png`"/>
               </div>
               <div class="card-text">
                 <a href="/single-page"> <div class="comp_name">
                   <div size="64" :src="`/images/avatars/avatar-1.png`"></div>
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
                 </a> 
                 <div class="category-tags">
                   <a href="/">Networking</a> 
                   <a href="/">Repair</a> 
                 </div>
                 <div class="service_price">
                   <small>
                     Price
                   </small>
                   $$$ USD
                 </div>
               </div>
            </div>
           </div>
           <div class="swiper-slide">
             <div class="card" class="service_card p-0">
               <div class="service_image">
                 <img :src="`/images/services/s3.png`"/>
               </div>
               <div class="card-text">
                 <a href="/single-page"> <div class="comp_name">
                   <div size="64" :src="`/images/avatars/avatar-1.png`"></div>
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
                 </a> 
                 <div class="category-tags">
                   <a href="/">Networking</a> 
                   <a href="/">Repair</a> 
                 </div>
                 <div class="service_price">
                   <small>
                     Price
                   </small>
                   $$$ USD
                 </div>
               </div>
            </div>
           </div>
           <div class="swiper-slide">
             <div class="card" class="service_card p-0">
               <div class="service_image">
                 <img :src="`/images/services/s4.png`"/>
               </div>
               <div class="card-text">
                 <a href="/single-page"> <div class="comp_name">
                   <div size="64" :src="`/images/avatars/avatar-1.png`"></div>
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
                 </a> 
                 <div class="category-tags">
                   <a href="/">Networking</a> 
                   <a href="/">Repair</a> 
                 </div>
                 <div class="service_price">
                   <small>
                     Price
                   </small>
                   $$$ USD
                 </div>
               </div>
            </div>
           </div>
           <div class="swiper-slide">
             <div class="card" class="service_card p-0">
               <div class="service_image">
                 <img :src="`/images/services/s1.png`"/>
               </div>
               <div class="card-text">
                 <a href="/single-page"> <div class="comp_name">
                   <div size="64" :src="`/images/avatars/avatar-1.png`"></div>
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
                 </a> 
                 <div class="category-tags">
                   <a href="/">Networking</a> 
                   <a href="/">Repair</a> 
                 </div>
                 <div class="service_price">
                   <small>
                     Price
                   </small>
                   $$$ USD
                 </div>
               </div>
            </div>
           </div>
           <div class="swiper-slide">
             <div class="card" class="service_card p-0">
               <div class="service_image">
                 <img :src="`/images/services/s2.png`"/>
               </div>
               <div class="card-text">
                 <a href="/single-page"> <div class="comp_name">
                   <div size="64" :src="`/images/avatars/avatar-1.png`"></div>
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
                 </a> 
                 <div class="category-tags">
                   <a href="/">Networking</a> 
                   <a href="/">Repair</a> 
                 </div>
                 <div class="service_price">
                   <small>
                     Price
                   </small>
                   $$$ USD
                 </div>
               </div>
            </div>
           </div>
           <div class="swiper-slide">
             <div class="card" class="service_card p-0">
               <div class="service_image">
                 <img :src="`/images/services/s3.png`"/>
               </div>
               <div class="card-text">
                 <a href="/single-page"> <div class="comp_name">
                   <div size="64" :src="`/images/avatars/avatar-1.png`"></div>
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
                 </a> 
                 <div class="category-tags">
                   <a href="/">Networking</a> 
                   <a href="/">Repair</a> 
                 </div>
                 <div class="service_price">
                   <small>
                     Price
                   </small>
                   $$$ USD
                 </div>
               </div>
            </div>
           </div>
           <div class="swiper-slide">
             <div class="card" class="service_card p-0">
               <div class="service_image">
                 <img :src="`/images/services/s4.png`"/>
               </div>
               <div class="card-text">
                 <a href="/single-page"> <div class="comp_name">
                   <div size="64" :src="`/images/avatars/avatar-1.png`"></div>
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
                 </a> 
                 <div class="category-tags">
                   <a href="/">Networking</a> 
                   <a href="/">Repair</a> 
                 </div>
                 <div class="service_price">
                   <small>
                     Price
                   </small>
                   $$$ USD
                 </div>
               </div>
            </div>
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
     </div>
   </section>
 </div>
 


