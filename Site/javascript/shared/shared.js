/* ===================================================
:: MENU TOP
 * ========================================================== */
// jQuery(function() {
jQuery(".menu-wrap").addClass("navbar");
jQuery(".menu").addClass("nav");
jQuery(".menu ul").addClass("dropdown-menu");

// on the first level li, make it a typical bootstrap top menu drop down
jQuery(".menu > li").each(function() {

    if (jQuery(this).children("ul").length > 0) {
        jQuery(this).addClass("dropdown");
        jQuery(this).children("a").addClass("dropdown-toggle");
        jQuery(this).children("a").attr("data-toggle", "dropdown");
        jQuery(this).children("a").html(jQuery(this).children("a").html() + '<strong class="caret"></strong>');

    }
});

// create sub-level drop downs
jQuery(".menu > li > ul li").each(function() {

    if (jQuery(this).children("ul").length > 0) {
        jQuery(this).addClass("dropdown-submenu");
        jQuery(this).children("a").addClass("dropdown-toggle");
        jQuery(this).children("ul").addClass("dropdown-menu");
    }

});



jQuery(document).ready(function() {
    //H andles menu drop down
    jQuery('.dropdown-menu').find('form').click(function(e) {
        e.stopPropagation();
    });
    jQuery('.dropdown-menu').on('touchstart.dropdown.data-api').click(function(e) {
        e.stopPropagation();
    });
});


// ADD SLIDEDOWN ANIMATION TO DROPDOWN //
jQuery('.dropdown').on('show.bs.dropdown', function(e) {
    jQuery(this).find('.dropdown-menu').first().stop(true, true).slideDown();
});

// ADD SLIDEUP ANIMATION TO DROPDOWN //
jQuery('.dropdown').on('hide.bs.dropdown', function(e) {
    jQuery(this).find('.dropdown-menu').first().stop(true, true).slideUp();
});



/* ===================================================
:: MENU SIDE
 * ========================================================== */
jQuery(function() {

    var menuside_ul = jQuery('.menuside > li > ul'),
        menuside_a = jQuery('.menuside > li > a');

    menuside_ul.hide();

    menuside_a.click(function(e) {
        if (jQuery(this).attr("href") == "#") {

            e.preventDefault();
            if (!jQuery(this).hasClass('active')) {
                menuside_a.removeClass('active');
                menuside_ul.filter(':visible').slideUp('normal');
                jQuery(this).addClass('active').next().stop(true, true).slideDown('normal');
            } else {
                jQuery(this).removeClass('active');
                jQuery(this).next().stop(true, true).slideUp('normal');
            }
        }
    });

});

