(function ($) {
    "use strict";
    $(document).ready(function () {
        var movingAd = $("#global_header").find(".layout_cadenasadverts_advert_right");
        if (movingAd.length > 0) {
            var headerMargin = movingAd.offset().top;

            // add css class fixed to advert-right so it stays visible if user scrolls down the page
            // remove css class if user scrolls up to have a distance to the page header
            // classIsAdded is used to reduce browser's redraw calls to a minimum
            var classIsAdded = false;
            $(window).scroll(function () {
                var currentTop = $(this).scrollTop();
                if (currentTop >= headerMargin && classIsAdded === false) {
                    movingAd.addClass("layout_cadenasadverts_advert_right_fixed");
                    classIsAdded = true;
                } else if (currentTop < headerMargin && classIsAdded === true) {
                    movingAd.removeClass("layout_cadenasadverts_advert_right_fixed");
                    classIsAdded = false;
                }
            });
        }
    });
}(jQuery));
