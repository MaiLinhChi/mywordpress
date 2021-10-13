(function (e) {
    "use strict";
    var n = window.TWP_JS || {};
    n.navigation = function() {
        e("#search").on("click",function(){
            e(".twp-search-field-section").addClass("show");
            e('body').css("overflow-y","hidden");
        });
        
        e("#twp-search-close").on("click",function(){
            e(".twp-search-field-section").removeClass("show");
            e('body').css("overflow-y","scroll");
        });
    };

    n.stickyHeader = function () {
        var header = document.getElementById("site-navigation");
        var banner = document.getElementById("sticky-nav-height");
        var scrollTop = document.getElementById("scroll-top");
        var sticky = banner.offsetTop;
        var headerClass = e("#masthead").hasClass('no-overlay');
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
            scrollTop.classList.add("show");
            e("#masthead").removeClass("twp-overlay");
        } else {
            header.classList.remove("sticky");
            scrollTop.classList.remove("show");
            if( headerClass != ''){
                e("#masthead").removeClass("twp-overlay");
            }else{
                e("#masthead").addClass("twp-overlay");
            }
        }
       
    };
     // SCROLL UP //
     n.scroll_up = function () {
        e("#scroll-top").on("click", function () {
            e("html, body").animate({
                scrollTop: 0
            }, 700);
            return false;
        });
    }; 
  
    n.slider = function () {
        var rtlStatus = false;
        if( e('body').hasClass('rtl') ){
            rtlStatus = true;
        }
        e(".twp-banner-slider").slick({
            autoplay: true,
            infinite: true,
            speed: 300,
            arrow: false,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.twp-banner-pagination'
        });
        
        e(".wp-block-gallery.columns-1,.wp-block-gallery.columns-1 .blocks-gallery-grid,.gallery-columns-1").slick({
            autoplay: true,
            infinite: true,
            speed: 300,
            arrow: false,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            rtl: rtlStatus
        });

        
        e('.twp-banner-pagination').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.twp-banner-slider',
            dots: false,
            arrows: false,
            vertical: true,
            focusOnSelect: true,
        });
    };
    n.mobileMenu = function () {
        e("#twp-menu-icon").on("click",function(){
            e(".twp-mobile-menu-section").addClass("show");
            e("#primary-nav-menu,#primary-menu").clone().appendTo(".twp-mobile-menu");
            e(".twp-mobile-menu ul li").has('ul').addClass("down-arrow");
            e('body').css("overflow-y","hidden");
        });
        
        e("#twp-mobile-close").on("click",function(){
            e(".twp-mobile-menu-section").removeClass("show twp-nav-mobile-menu");
            e(".twp-mobile-menu #primary-nav-menu,.twp-mobile-menu #primary-menu,.twp-mobile-menu #social-menu").remove();
            e(".twp-mobile-menu ul li").has('ul').removeClass("down-arrow");
            e('body').css("overflow-y","scroll");
        });
        e("#twp-social-icon-menu").on("click",function(){
            e(".twp-mobile-menu-section").addClass("show twp-nav-mobile-menu");
            e(".navigation-social-icon #social-menu").clone().appendTo(".twp-mobile-menu");
        });
        
    };
    
    n.DataBackground = function () {
        var pageSection = e(".data-bg");
        pageSection.each(function (indx) {

            if (e(this).attr("data-background")) {
                e(this).css("background-image", "url(" + e(this).data("background") + ")");
            }
        });

        e('.bg-image').each(function () {
            var src = e(this).children('img').attr('src');
            e(this).css('background-image', 'url(' + src + ')').children('img').hide();
        });
    };
    n.galleryMagnificPopUp = function () {
        e('.gallery,.wp-block-gallery').each(function () {
            e(this).magnificPopup({
                delegate: 'a',
                type: 'image',
                closeOnContentClick: false,
                closeBtnInside: false,
                mainClass: 'mfp-with-zoom mfp-img-mobile',
                image: {
                    verticalFit: true,
                    titleSrc: function (item) {
                        return item.el.attr('title');
                    }
                },
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true,
                    duration: 300,
                    opener: function (element) {
                        return element.find('img');
                    }
                }
            });
        });
    };

    n.twp_sticky_banner_slider = function () {
      e('.widget-area').theiaStickySidebar({
          additionalMarginTop: 30
      });
    }; 

    n.twp_aos = function () {
     AOS.init();
    };
    n.progressBar = function () {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("progressbar").style.width = scrolled + "%";
     };

    e(window).on('load', function () { 
        e('#status').fadeOut(); 
        e('#preloader').delay(350).fadeOut('slow');  
        e('body').delay(350).css({ 'overflow': 'visible' });
     });
    
    e(document).ready(function () {
        n.mobileMenu();
        n.DataBackground();
        n.slider();
        n.navigation();
        n.twp_sticky_banner_slider();
        n.galleryMagnificPopUp();
        n.twp_aos();
        n.scroll_up();
        
    });
    e(window).scroll(function () {
        n.stickyHeader();n.progressBar();
    });
    e(window).resize(function(){
    });

})(jQuery);