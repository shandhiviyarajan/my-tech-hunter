/**
 * @copyright  --
 * @category   Javascript / jQuery 
 * MIT License
 * @license    http://www.opensource.org/licenses/mit-license.php  MIT License
 * @version - 1.0.0
 * @author - Shan Dhiviyarajan <prashasoft@gmail.com>
 * @production
 */
(function ($, window) {
    'use strict';
    var App = App || {},
        body = $("body")
    /**
     * jQuery functions
     */
    App = function () {

        /**
         * Header
         */
        function Header() {

            function _navigation() {
             
                    $('.toggle-menu').click(function () {
                        $('.tech-hunter-menu, #tech-hunter-menu-wrapper').toggleClass('display');
                    });
            
            }

            return {
                init: function () {
                    _navigation();
                }
            }
        }

        /**
         * Hompage 
         * @returns 
         */
        function Home() {

            function _searchAutocomplete() {
                $(function () {
                    var projects = [
                        {
                            value: "Thunder Mac - Mac specialist & Repairs",
                            label: "Thunder Mac",
                            desc: "Mac specialist & Repairs",
                            icon: "jquery_32x32.png",
                            sponsored:true
                        },
                        {
                            value: "BT Options",
                            label: "BT Options",
                            desc: "Apple dealer and Apple products repair",
                            icon: "jqueryui_32x32.png",
                            sponsored:"Sponsored"
                        },
                        {
                            value: "Future World ",
                            label: "Future World",
                            desc: "Apple service center",
                            icon: "sizzlejs_32x32.png"
                        },
                        {
                            value: "Mac screen repairing",
                            label: "Future World",
                            desc: "Apple service center",
                            icon: "sizzlejs_32x32.png"
                        }, {
                            value: 'Mac trouble shooting',
                            label: "Future World",
                            desc: "Apple service center",
                            icon: "sizzlejs_32x32.png"
                        }
                    ];

                    $("#home-search-autocomplete").autocomplete({
                        minLength: 0,
                        source: projects,
                        focus: function (event, ui) {
                            $("#home-search-autocomplete").val(ui.item.label);
                            return false;
                        },
                        select: function (event, ui) {
                            $("#home-search-autocomplete").val(ui.item.label);

                            return false;
                        }
                    })
                        .autocomplete("instance")._renderItem = function (ul, item) {
                            return $("<li>")
                                .append("<div class='serch-item'><div class='label-content'>" + item.label + "<span>"+item.desc+"</span></div><div class='sponsored'>"+ item.sponsored +"</div></div>")
                                .appendTo(ul);
                        };
                });
            }
            function _home_customers() {
                new Swiper('#home_customers', {
                    // Optional parameters
                    loop: false,
                    spaceBetween: 0,
                    slidesPerView: 3,

                    centeredSlides: false,
                    breakpoints: {
                        // when window width is >= 320px
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 12
                        },
                        // when window width is >= 480px
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 12
                        },
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 12
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 12
                        },
                        900: {
                            slidesPerView: 3,
                            spaceBetween: 12
                        }

                    }
                })
            }

            function _home_slides() {
                var home_slides = new Swiper('#home_slides', {

                    loop: true,
                    autoHeight: true,
                    spaceBetween: 0,
                    slidesPerView: 1,
                    centeredSlides: false,
                    autoplay: {
                        delay: 6000,
                        disableOnInteraction: false,
                    },
                    speed: 1200,
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                })

            }

            function _recent_post() {
                new Swiper('#recent_post', {
                    // Optional parameters
                    loop: false,
                    spaceBetween: 0,
                    slidesPerView: 'auto',
                    centeredSlides: false,
                    navigation: {
                        nextEl: ".btn_prev",
                        prevEl: ".btn_next",
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                    },
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
                            spaceBetween: 12
                        }
                    }


                })
            }

            function _recent_post_pro() {
                new Swiper('#recent_post_pro', {
                    // Optional parameters
                    loop: false,
                    spaceBetween: 0,
                    slidesPerView: 'auto',
                    centeredSlides: false,
                    navigation: {
                        nextEl: ".btn_prev",
                        prevEl: ".btn_next",
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                    },
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
                            spaceBetween: 12
                        }
                    }
                });
            }

            function _home_promotions() {
                new Swiper('#home_promotions', {
                    // Optional parameters
                    loop: false,
                    spaceBetween: 0,
                    slidesPerView: 4,
                    centeredSlides: false,
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
                            spaceBetween: 12
                        }


                    }
                })
            }

            function _home_categories() {
                new Swiper('#home_categories', {
                    // Optional parameters
                    loop: false,
                    spaceBetween: 0,
                    slidesPerView: 4,
                    centeredSlides: false,
                    breakpoints: {
                        // when window width is >= 320px
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 12
                        },
                        // when window width is >= 480px
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 12
                        },
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 12
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 12
                        },
                        900: {
                            slidesPerView: 4,
                            spaceBetween: 12
                        }


                    }

                })
            }

            return {
                init: function () {
                    _recent_post_pro();
                    _home_slides();
                    _recent_post();
                    _home_promotions();
                    _home_customers();
                    _home_categories();
                    _searchAutocomplete();
                }
            }
        }

        /**
       * User Profile
       */
        function UserProfile() {

            function _initCharts() {
                if (document.getElementById('sales-view')) {
                    var salesView = new Chart(
                        document.getElementById('sales-view'),
                        {
                            type: 'bar',
                            data: {
                                labels: [
                                    'January',
                                    'February',
                                    'March',
                                    'April',
                                    'May',
                                    'June',
                                    'July',
                                    'August',
                                    'Septtember',
                                    'October',
                                    'November',
                                    'December'
                                ],
                                datasets: [{
                                    label: 'Post engagements',
                                    data: [5, 9, 0, 20, 25, 55, 70, 80, 20, 10, 5, 6],
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(255, 159, 64, 1)',
                                        'rgba(255, 205, 86, 1)',
                                        'rgba(75, 192, 192, 1)',
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(153, 102, 255, 1)',
                                        'rgba(201, 203, 207, 1)'
                                    ],
                                    borderColor: [
                                        'rgb(255, 99, 132)',
                                        'rgb(255, 159, 64)',
                                        'rgb(255, 205, 86)',
                                        'rgb(75, 192, 192)',
                                        'rgb(54, 162, 235)',
                                        'rgb(153, 102, 255)',
                                        'rgb(201, 203, 207)'
                                    ],
                                    borderWidth: 1
                                }]
                            }
                        }
                    );
                }


                if (document.getElementById('post-types')) {
                    var postTypes = new Chart(
                        document.getElementById('post-types'),
                        {
                            type: 'doughnut',
                            data: {
                                labels: [
                                    'Services post',
                                    'Promotions',
                                    'Others'
                                ],
                                datasets: [{
                                    label: 'Type of posts',
                                    data: [70, 30, 10],
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(255, 159, 64, 1)',
                                        'rgba(255, 205, 86, 1)'

                                    ],


                                }]
                            }
                        }
                    )
                }

            }



            return {
                init: function () {
                    _initCharts();
                }
            }
        }


        function SinglePage() {

            function _single_page_gallery() {
                var single_gallery = new Swiper('#single_gallery', {
                    loop: false,
                    spaceBetween: 0,
                    slidesPerView: 1,
                    centeredSlides: false,
                    autoHeight: true
                });

                var gallery_thumbs = $("#gallery-thumbs");


                gallery_thumbs && gallery_thumbs.find("a").on('click', function (e) {
                    e.preventDefault();
                    gallery_thumbs.find("a").removeClass("active");
                    $(this).addClass("active");
                    single_gallery.slideTo($(this).index());
                })
            }

            function _selectStarRatings() {
                var emoji = ['😡', '😕', '🙂', '😃', '🥳'];
                var arr = 0;
                $(".select-stars").find("i.fa").on('mouseenter', function () {
                    $(".select-stars").find("i.fa").removeClass("selected");
                    arr = $(this).index();
                    for (var i = 0; arr >= i; i++) {
                        $(".select-stars").find("i.fa").eq(i).addClass("selected");
                    }

                    $(".emoji").text(emoji[$(this).index()]);
                });

                $(".select-stars").find("i.fa").on('click', function () {
                    $(".select-stars").find("i.fa").removeClass("selected");
                    arr = $(this).index();
                    for (var i = 0; arr >= i; i++) {
                        $(".select-stars").find("i.fa").eq(i).addClass("selected");

                    }
                    $(".emoji").text(emoji[$(this).index()]);
                });





            }

            function _address_map() {

                var map_style = [
                    {
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.land_parcel",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.neighborhood",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    }
                ];
                const location = { lat: -25.344, lng: 131.036 };
                // The map, centered at Uluru
                const map = new google.maps.Map(document.getElementById("address-map"), {
                    zoom: 8,
                    center: location,
                    scaleControl: false,
                    navigationControl: false,
                });
                // The marker, positioned at Uluru
                const marker = new google.maps.Marker({
                    position: location,
                    // icon:'../svg/mapMarker.svg',
                    map: map
                });


            }

            function _show_hide_number() {
                $("#show-hide-contact-number").on('click', function (e) {
                    e.preventDefault();
                    var show = true;

                    if (show) {
                        $(this).find(".contact-number").text("+1 009 8976 876");
                        $(this).find("a").attr('href', "tel:+1 009 8976 876");
                        show = false;
                    } else {
                        $(this).find(".contact-number").text("Show contact number");
                        show = ture;
                    }
                })
            }

            return {
                init: function () {
                    _single_page_gallery();
                    _selectStarRatings();
                    _address_map();
                    _show_hide_number();
                }
            }

        }

        //init pace js
        return {
            init: function () {
                Pace.options = {
                    elements: false,
                    document: false,
                    ajax: true,
                    restartOnRequestAfter: false
                };

                Pace.on('done', function () {
                    new Header().init();
                    new Home().init();
                    new UserProfile().init();
                    new SinglePage().init();
                });

            }
        };
    };

    App().init();

})(jQuery, window);
