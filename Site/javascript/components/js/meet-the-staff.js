/* ===================================================
:: ISOTOPE
 * ========================================================== */

			(function(jQuery) {
			    var $container = jQuery('#isotope-container');
			    if ($container.length) {
			        $container.waitForImages(function() {
			            // initialize isotope
			            $container.isotope({
			                itemSelector: '.thumb',
			                layoutMode: 'fitRows'
			            });
			            // filter items when filter link is clicked
			            jQuery('#isotope-buttons a').click(function() {
			                var selector = jQuery(this).attr(
			                    'data-filter');
			                $container.isotope({
			                    filter: selector
			                });
			                jQuery(this).removeClass('active').addClass(
			                    'active').siblings().removeClass(
			                    'active all');
			                return false;
			            });
			        }, null, true);
			    }
			})(jQuery);
			
			
          // circle sizer
	  circleSizer = function () {
	  circleSize(".mts-item-bottom", ".mts-circle1", .18);
	  circleSize(".mts-item-bottom", ".mts-circle2", .10);
	  circleSize(".mts-item-bottom", ".mts-circle3", .05);
	};
	function circleSize(wrapper, target, percentage) {
	    var fontSize = jQuery(wrapper).width() * percentage; // 10% of container width
	    jQuery(target).css('font-size', fontSize );
	}
	jQuery(window).resize(circleSizer);
	jQuery(document).ready(circleSizer);		


