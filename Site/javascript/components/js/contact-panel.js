/* ===================================================
:: CONTACT PANEL TOGGLE
* ================================================= */

jQuery(document).ready(function() {
	// Expand contact-panel
// Expand contact-panel
	jQuery("#open").click(function(){
		jQuery("div#contact-panel").slideDown("slow");
		if (jQuery("div#contact-panel .googlemap-widget")) {
		  if (typeof(loadWidgetMap) != 'undefined') {
			  loadWidgetMap("div#contact-panel .googlemap-widget");
		  }
		}

	});

	// Collapse contact-panel
	jQuery("#contact-close").click(function(){
		jQuery("div#contact-panel").slideUp("slow");
	});

	// Switch buttons from "Log In | Register" to "Close contact-panel" on click
	jQuery("#toggle a").click(function () {
		jQuery("#toggle a").toggle();
	});
	
	jQuery("div#contact-panel form.form-horizontal").parent("div").addClass("form-2");
	
	jQuery("div#contact-panel form.form-horizontal div.form-group").each(function() {
		var icon = jQuery(this).find("i");
		//alert(icon.attr("class"));
		jQuery(this).parent().find(".regular-label").html("<i class='" + icon.attr("class") + "'></i> " + jQuery(this).parent().find(".regular-label").html());
		jQuery(jQuery(this).find("div").html()).insertAfter(jQuery(this).parent().find(".regular-label"));
		jQuery(this).html("");
																				  
	
	});
});