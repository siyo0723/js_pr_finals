
//scroll header change
$(document).ready(function () {
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 49) {
            $('body').addClass('header-fixed');
        } else {
            $('body').removeClass('header-fixed');
        }
    });
});

// 맨 위로 이동 버튼
let moveToTop = function () {
    document.body.scrollIntoView({ behavior: "smooth" });
};

//scroll to top
var display_backtotop = 200; // Scrolled pixels from top until the link appears

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > display_backtotop) {
            $(".btn-moveTop").fadeIn();
        } else {
            $(".btn-moveTop").fadeOut();
        }
    });

    $(document).on("click", ".btn-moveTop", function (e) {
        $("html, body").animate({ scrollTop: 0 });

        e.preventDefault();
    });
});

//diagonal_graph animation
$(document).ready(function () {
    var chartBox = $('.diagonal_box');
    var chart = $('.diagonal_bg');

    var isChartVisible = false;
    var isScrollingUp = false;
    var lastScrollTop = $(window).scrollTop();

    $(window).scroll(function () {
        var chartBoxTop = chartBox.offset().top;
        var chartBoxBottom = chartBoxTop + chartBox.outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        if (chartBoxTop < viewportBottom && chartBoxBottom > viewportTop) {
            if (!isChartVisible || isScrollingUp) {
                chart.addClass('up');
                isChartVisible = true;
            }
        } else {
            if (isChartVisible) {
                chart.removeClass('up');
                isChartVisible = false;
            }
        }

        // 현재 스크롤 방향 확인
        isScrollingUp = viewportTop < lastScrollTop;
        lastScrollTop = viewportTop;
    });
});

// 네비게이션 특정 스크롤 위치 이동
$(document).ready(function () {
    $('#nav-link1').on('click', function (e) {
        e.preventDefault();
        var targetSelector = '.parallax_background1';
        var targetOffsetTop = $(targetSelector).offset().top;
        $('html, body').animate({
            scrollTop: targetOffsetTop
        }, 'slow');
    });

    $('#nav-link2').on('click', function (e) {
        e.preventDefault();
        var targetSelector = '.overview';
        var targetOffsetTop = $(targetSelector).offset().top;
        $('html, body').animate({
            scrollTop: targetOffsetTop
        }, 'slow');
    });

    $('#nav-link3').on('click', function (e) {
        e.preventDefault();
        var targetSelector = '.main_Service';
        var targetOffsetTop = $(targetSelector).offset().top;
        $('html, body').animate({
            scrollTop: targetOffsetTop
        }, 'slow');
    });

    $('#nav-link4').on('click', function (e) {
        e.preventDefault();
        var targetSelector = '.branding';
        var targetOffsetTop = $(targetSelector).offset().top;
        $('html, body').animate({
            scrollTop: targetOffsetTop
        }, 'slow');
    });

    $('#nav-link5').on('click', function (e) {
        e.preventDefault();
        var targetSelector = '.footer_logo';
        var targetOffsetTop = $(targetSelector).offset().top;
        $('html, body').animate({
            scrollTop: targetOffsetTop
        }, 'slow');
    });

    $('.logo').on('click', function (e) {
        e.preventDefault();
        var targetSelector = '.parallax_background1';
        var targetOffsetTop = $(targetSelector).offset().top;
        $('html, body').animate({
            scrollTop: targetOffsetTop
        }, 'slow');
    });
});

// badge-root scroll animation
window.addEventListener('scroll', function () {
    var imageContainers = document.querySelectorAll('.badge-container');
    var windowHeight = window.innerHeight;

    imageContainers.forEach(function (container) {
        var containerTop = container.getBoundingClientRect().top;

        if (containerTop < windowHeight) {
            container.style.opacity = '1';
        } else {
            container.style.opacity = '0';
        }
    });
});

//test
// window.addEventListener('scroll', function(){
//     console.log(window.scrollY)
// });

