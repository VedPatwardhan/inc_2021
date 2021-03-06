(function($) {

    $(document).ready(function() {
        $('body').addClass('js');
        var $menu = $('#menu'),
            $menulink = $('.menu-link');

        $menulink.click(function() {
            $menulink.toggleClass('active');
            $menu.toggleClass('active');
            return false;
        });
    });


    videoPopup();


    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            550: {
                items: 2
            },
            750: {
                items: 3
            },
            1000: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    })

    $('.owl-carousel1').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            550: {
                items: 1
            },
            750: {
                items: 1
            },
            1000: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    })


    $(".Modern-Slider").slick({
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        dots: true,
        pauseOnDotsHover: true,
        cssEase: 'fade',
        // fade:true,
        draggable: false,
        prevArrow: '<button class="PrevArrow"></button>',
        nextArrow: '<button class="NextArrow"></button>',
    });


    $("div.features-post").hover(
        function() {
            $(this).find("div.content-hide").slideToggle("medium");
        },
        function() {
            $(this).find("div.content-hide").slideToggle("medium");
        }
    );


    $("#tabs").tabs();


    (function init() {
        function getTimeRemaining(endtime) {
            var t = Date.parse(endtime) - Date.parse(new Date());
            var seconds = Math.floor((t / 1000) % 60);
            var minutes = Math.floor((t / 1000 / 60) % 60);
            var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            var days = Math.floor(t / (1000 * 60 * 60 * 24));
            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        }

        function initializeClock(endtime) {
            var timeinterval = setInterval(function() {
                var t = getTimeRemaining(endtime);
                if (document.querySelector(".days > .value"))
                    document.querySelector(".days > .value").innerText = t.days;
                if (document.querySelector(".hours > .value"))
                    document.querySelector(".hours > .value").innerText = t.hours;
                if (document.querySelector(".minutes > .value"))
                    document.querySelector(".minutes > .value").innerText = t.minutes;
                if (document.querySelector(".seconds > .value"))
                    document.querySelector(".seconds > .value").innerText = t.seconds;
                if (t.total <= 0) {
                    clearInterval(timeinterval);
                }
            }, 1000);
        }
        initializeClock("2021/9/24")
            // ((new Date(2021, 9, 24)).getFullYear()+1) + 
    })()

})(jQuery);