/* ===================================================
:: INFO BOX CAROUSEL
 * ========================================================== */

      !function (jQuery) {
        jQuery(function(){
          // carousel demo
          jQuery('#ibc').carousel({ interval: 80000 })
        })
      }(window.jQuery)
      
          // circle sizer
      circleSizer = function () {
	  circleSize(".ibc-image-wrapper", ".ibc-circle1", .18);
	  circleSize(".ibc-image-wrapper", ".ibc-circle2", .10);
	  circleSize(".ibc-image-wrapper", ".ibc-circle3", .05);
	};
	function circleSize(wrapper, target, percentage) {
	    var fontSize = jQuery(wrapper).width() * percentage; // 10% of container width
	    jQuery(target).css('font-size', fontSize );
	}
	jQuery(window).resize(circleSizer);
	jQuery(document).ready(circleSizer);		


