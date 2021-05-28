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

        function ContactPage() {

            function _contact_google_map() {
                if ($("#contact-google-map").length > 0) {
                    const map = new google.maps.Map(document.getElementById("settings-google-map"), {
                        zoom: 8,
                        center: location,
                        scaleControl: false,
                        navigationControl: false,
                    });
                    // The marker, positioned at Uluru
                    const marker = new google.maps.Marker({
                        position: location,

                        icon: '../svg/mapMarker.svg',
                        map: map
                    });
                }

            }

            return {
                init: function () {
                    _contact_google_map();
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
                            sponsored: true
                        },
                        {
                            value: "BT Options",
                            label: "BT Options",
                            desc: "Apple dealer and Apple products repair",
                            icon: "jqueryui_32x32.png",
                            sponsored: "Sponsored"
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

                    if ($("#home-search-autocomplete").length > 0) {
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
                                    .append("<div class='serch-item'><div class='label-content'>" + item.label + "<span>" + item.desc + "</span></div><div class='sponsored'>" + item.sponsored + "</div></div>")
                                    .appendTo(ul);
                            };
                    }

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
                            slidesPerView: "auto",
                        },
                        // when window width is >= 480px
                        480: {
                            slidesPerView: 1,
                            slidesPerView: "auto",
                        },
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 2,
                            slidesPerView: "auto",
                        },
                        768: {
                            slidesPerView: 2,
                            slidesPerView: "auto",
                        },
                        900: {
                            slidesPerView: 3,
                            slidesPerView: "auto",
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
                    slidesPerView:4,
                    centeredSlides: false,
                    navigation: {
                        nextEl: ".recent_post_next",
                        prevEl: ".recent_post_prev",
                    },
                    pagination: {
                        el: '.recent_post_swiper-pagination',
                        type: 'bullets',
                    },
                    breakpoints: {
                        // when window width is >= 320px
                        320: {
                            slidesPerView: "auto",
                            spaceBetween: 12
                        },
                        // when window width is >= 480px
                        480: {
                            slidesPerView: "auto",
                            spaceBetween: 12
                        },
                        // when window width is >= 640px
                        640: {
                            slidesPerView: "auto",
                            spaceBetween: 12
                        },
                        768: {
                            slidesPerView: "auto",
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
                    slidesPerView: 4,
                    loop: false,
                    spaceBetween: 0,
                    slidesPerView: 'auto',
                    centeredSlides: false,
                    navigation: {
                        nextEl: ".recent_post_pro_next",
                        prevEl: ".recent_post_pro_prev",
                    },
                    pagination: {
                        el: '.recent_post_pro_swiper-pagination',
                        type: 'bullets',
                    },
                    breakpoints: {
                        // when window width is >= 320px
                        320: {
                            slidesPerView: "auto",
                            spaceBetween: 12
                        },
                        // when window width is >= 480px
                        480: {
                            slidesPerView: "auto",
                            spaceBetween: 12
                        },
                        // when window width is >= 640px
                        640: {
                            slidesPerView: "auto",
                            spaceBetween: 12
                        },
                        768: {
                            slidesPerView: "auto",
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
                    navigation: {
                        nextEl: ".home_promotions_next",
                        prevEl: ".home_promotions_prev",
                    },
                    pagination: {
                        el: '.home_promotions_swiper-pagination',
                        type: 'bullets',
                    },
                    breakpoints: {
                        // when window width is >= 320px
                        320: {
                            slidesPerView: "auto",
                            spaceBetween: 12
                        },
                        // when window width is >= 480px
                        480: {
                            slidesPerView: "auto",
                            spaceBetween: 12
                        },
                        // when window width is >= 640px
                        640: {
                            slidesPerView: "auto",
                            spaceBetween: 12
                        },
                        768: {
                            slidesPerView: "auto",
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
                    navigation: {
                        nextEl: ".home_categories_next",
                        prevEl: ".home_categories_prev",
                    },
                    pagination: {
                        el: '.home_categories_swiper-pagination',
                        type: 'bullets',
                    },
                    breakpoints: {
                        // when window width is >= 320px
                        320: {
                            slidesPerView: "auto",
                            spaceBetween: 12
                        },
                        // when window width is >= 480px
                        480: {
                            slidesPerView: "auto",
                            spaceBetween: 12
                        },
                        // when window width is >= 640px
                        640: {
                            slidesPerView: "auto",
                            spaceBetween: 12
                        },
                        768: {
                            slidesPerView: "auto",
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

            function _CKEditor() {

                if ($("#post-editor").length > 0) {
                    ClassicEditor
                        .create(document.querySelector('#post-editor'))
                       
                }

            }

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

            function _settings_google_map() {
                if ($("#settings-google-map").length > 0) {
                    const map = new google.maps.Map(document.getElementById("settings-google-map"), {
                        zoom: 8,
                        center: location,
                        scaleControl: false,
                        navigationControl: false,
                    });
                    // The marker, positioned at Uluru
                    const marker = new google.maps.Marker({
                        position: location,
                        drag: true,
                        icon: '../svg/mapMarker.svg',
                        map: map
                    });

                }
            }

            //https://notifyjs.jpillora.com/
            function _notify() {
                $(".notify-warning").on('click', function () {
                    $.notify("Warning Notification", "warning", {
                        autoHide: false,

                    });
                })

                $(".notify-success").on('click', function () {
                    $.notify("Success Notification", "success", {
                        autoHide: false,

                    });
                })

                $(".notify-error").on('click', function () {
                    $.notify("Error Notification", "error", {
                        autoHide: false,
                    });
                })

                $(".notify-info").on('click', function () {
                    $.notify("Info Notification", "info", {
                        autoHide: false,

                    });
                })
            }



            return {
                init: function () {
                    _initCharts();
                    _notify();
                    _settings_google_map();
                    _CKEditor();
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

                if ($("#address-map").lenth > 0) {
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


        function SearchMap() {

            var markers = [

                {
                    name: 'RF Computer services',
                    position: { lat: 39.7594, lng: -99.4340 },
                    icon: '/current_location.png'
                },
                {
                    name: 'RF Computer services',
                    position: { lat: 37.7594, lng: -97.4340 }, icon: '/images/map_marker.png'
                },
                {
                    name: 'RF Computer services-2',
                    position: { lat: 36.7594, lng: -96.0040 }, icon: '/images/map_marker.png'
                },
                {
                    name: 'RF Computer services-3',
                    position: { lat: 35.7594, lng: -95.1140 }, icon: '/images/map_marker.png'
                },
                {
                    name: 'RF Computer services-4',
                    position: { lat: 34.7594, lng: -91.2240 }, icon: '/images/map_marker.png'
                },
                {
                    name: 'RF Computer services',
                    position: { lat: 37.7594, lng: -92.4340 }, icon: '/images/map_marker.png'
                },
                {
                    name: 'RF Computer services-2',
                    position: { lat: 36.0094, lng: -98.0040 }, icon: '/images/map_marker.png'
                },
                {
                    name: 'RF Computer services-3',
                    position: { lat: 30.7594, lng: -93.1140 }, icon: '/images/map_marker.png'
                },
                {
                    name: 'RF Computer services-4',
                    position: { lat: 34.7594, lng: -100.2240 }, icon: '/images/map_marker.png'
                }
            ]

            function _map_search() {
                if ($("#google-map-results").length > 0) {
                    const map = new google.maps.Map(document.getElementById("google-map-results"), {
                        zoom: 8,
                        center: location,
                        scaleControl: false,
                        navigationControl: false,
                    });
                    // The marker, positioned at Uluru
                    markers.forEach(function (v, i) {
                        const marker = new google.maps.Marker({
                            position: v.position,
                            icon: '../svg/mapMarker.svg',
                            map: map,
                            label: {
                                text: v.name
                            }
                        });
                    })
                }

            }

            return {
                init: function () {
                    _map_search();
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
                    new SearchMap().init();
                    new ContactPage().init();
                });

            }
        };
    };

    App().init();

})(jQuery, window);
