/* ===================================================
:: FULLSCREEN PORTFOLIO
* ================================================= */
jQuery(function() {


    //lmlc-fullscreen-portfolio filters
    jQuery('#lmlc-fullscreen-portfolio .fsp-wrapper .fsp-content').waitForImages(function() {
        jQuery('#lmlc-fullscreen-portfolio .fsp-content-inner ul').isotope({
            layoutMode: 'fitRows',
            itemSelector: 'li'
        });
    });

    jQuery('#lmlc-fullscreen-portfolio .filters a').click(function() {
        jQuery(this).closest('li').addClass('active').siblings().removeClass('active');
        var selector = jQuery(this).attr('data-filter');
        jQuery('#lmlc-fullscreen-portfolio .fsp-content-inner ul').isotope({
            filter: selector
        });
        return false;
    });

    //Change lmlc-fullscreen-portfolio action
    jQuery('#lmlc-fullscreen-portfolio .fsp-action a').click(function() {
        if (!jQuery(this).hasClass('active')) {
            var currentHeight = jQuery('.fsp-container').height();
            var link = jQuery(this).attr('href');
            
            jQuery(this).addClass('active').siblings().removeClass('active');
            jQuery('.fsp-container').height(currentHeight);
            jQuery('.fsp-container').addClass('fsp-hide');
            
            var scaleDownTimeout = setTimeout(function() {
                jQuery('#lmlc-fullscreen-portfolio .fsp-wrapper .fsp-content').load(link + ' #ajax_page', function(xhr, statusText, request) {
                    if (statusText == 'success') {
                        portfolioGrid = jQuery('.fsp-wrapper .projects'),
                            projectContainer = jQuery('#project_content'),
                            portfolioGrid.find('li a[href$="#!' + url + '"]').closest('li').addClass('current');
                        jQuery('#lmlc-fullscreen-portfolio .fsp-wrapper .fsp-content').waitForImages(function() {
                            jQuery('#lmlc-fullscreen-portfolio .fsp-content-inner ul').isotope({
                                layoutMode: 'fitRows',
                                itemSelector: 'li',
                                filter: jQuery('#lmlc-fullscreen-portfolio .filters li.active a').attr('data-filter')
                            }, function() {
                                var heightAnimationTimeout = setTimeout(function() {
                                    var newHeight = jQuery('#lmlc-fullscreen-portfolio .fsp-wrapper .fsp-content').height();
                                    jQuery('.fsp-container').removeClass('fsp-hide').animate({
                                        height: newHeight
                                    }, 250, function() {
                                        var newHeight = jQuery('#lmlc-fullscreen-portfolio .fsp-wrapper .fsp-content').height();
                                        jQuery('.fsp-container').animate({
                                            height: newHeight
                                        }, 250, function() {
                                            jQuery('.fsp-container').css('height', 'auto');
                                        });
                                    });
                                    clearTimeout(heightAnimationTimeout);
                                }, 500);
                            });
                        });
                    }
                    if (statusText == 'error') {
                        //Show error
                    }
                });
                clearTimeout(scaleDownTimeout);
            }, 400);
        }
        return false;
    });

});