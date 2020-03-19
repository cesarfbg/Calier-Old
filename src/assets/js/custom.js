'use strict';
(function($) {

    // Toggle style Submenu
    function submenuStyle() {
        var widthPage = $(window)["width"]();

        $("li.submenu").on("click", function() {
            if (widthPage < 1020) {
                //$(".submenu ul")["toggleClass"]("active");
                $(this).find("ul").toggleClass("active");
            }
        });
    }

    // Style navbar scroll
    function headerNavStyle() {
        var widthPage = $(window)["width"]();
        if (widthPage > 1019) {
            var size_top = $(window)["scrollTop"]();
            if (size_top >= 30) {
                $(".header-area")["addClass"]("header-sticky");
            } else {
                $(".header-area")["removeClass"]("header-sticky");
            }
        }
    }
    
    "use strict";

    $(window).on("load", function() {

        headerNavStyle();
        submenuStyle();
        window["sr"] = new scrollReveal;

        // Toggle Menu Mobile Version
        if ($(".menu-trigger")["length"]) {
            $(".menu-trigger")["on"]("click", function() {
                $(this)["toggleClass"]("active");
                $(".header-area .nav")["slideToggle"](200);
            });
        }

        // Scroll top
        $(".main-nav a.navLink")["on"]("click", function () {
            $(".menu-trigger")["removeClass"]("active");
            $(".header-area .nav")["slideUp"](200);
            $(window).scrollTop(0);
            window["sr"] = new scrollReveal;
        });


        // Scroll animate #link
        $("a[href*=\#]:not([href=\#])")["on"]("click", function() {
            if (location["pathname"]["replace"](/^\//, "") == this["pathname"]["replace"](/^\//, "") && location["hostname"] == this["hostname"]) {
                var hashUrl = $(this["hash"]);
                hashUrl = hashUrl["length"] ? hashUrl : $("[name=" + this["hash"]["slice"](1) + "]");
                if (hashUrl["length"]) {
                    var widthPage = $(window)["width"]();
                    if (widthPage < 1020) {
                        $(".menu-trigger")["removeClass"]("active");
                        $(".header-area .nav")["slideUp"](200);
                    }
                    $("html,body")["animate"]({
                        scrollTop: hashUrl["offset"]()["top"] - 30
                    }, 700);
                    return false;
                }
            }
        });

        // Goals counter animate
        if ($(".count-item")["length"]) {
            $(".count-item strong")["counterUp"]({
                delay: 10,
                time: 1E3
            });
        }

        // Image blog efects zoom
        if ($(".blog-post-thumb")["length"]) {
            $(".blog-post-thumb .img")["imgfix"]({
                scale: 1.1
            });
        }

        // Image about efects zoom
        if ($(".about-image")["length"]) {
            $(".about-image")["imgfix"]({
                scale: 1.1
            });
        }

        // Image testimonials efects
        $(".testimonials-wrapper")["find"](".hexagon-in2")["each"](function (index) {
            $(".hexagon-in2:eq(" + [index] + ")")["css"]("background-image", "url(" + $(".hexagon-in2:eq(" + [index] + ")")["data"]("profile-img") + ")");
        });

        // Image products efects zoom
        if ($(".page-gallery")["length"] && $(".page-gallery-wrapper")["length"]) {
            $(".page-gallery")["imgfix"]({
                scale: 1.1
            });
            $(".page-gallery")["magnificPopup"]({
                type: "image",
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true,
                    duration: 300,
                    easing: "ease-in-out"
                }
            });
        }
        
        $(".preloader-wrapper")["animate"]({
            "opacity": "0"
        }, 600, function () {
            setTimeout(function () {
                $(".preloader-wrapper")["css"]("visibility", "hidden")["fadeOut"]();
            }, 300);
        });
    });

    $(window)["on"]("scroll", function() {
        headerNavStyle();
    });

    $(window)["on"]("resize", function() {
        submenuStyle();
    });
})(window["jQuery"]);