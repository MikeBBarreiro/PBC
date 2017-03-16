/* ===================================================
 * THEME INITIALIZATION SCRIPTS
 * ========================================================== */
 
	var isMobile = {
	    Android: function() {
	        return navigator.userAgent.match(/Android/i) ? true : false;
	    },
	    BlackBerry: function() {
	        return navigator.userAgent.match(/BlackBerry/i) ? true : false;
	    },
	    iOS: function() {
	        return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true :
	            false;
	    },
	    Windows: function() {
	        return navigator.userAgent.match(/IEMobile/i) ? true : false;
	    },
	    any: function() {
	        return (isMobile.Android() || isMobile.BlackBerry() || isMobile
	            .iOS() || isMobile.Windows());
	    }
	};
	
	$(function() {
	    if (!isMobile.any()) {
	        var s = skrollr.init({
	                forceHeight: false
	            }
	            //
	            //	{
	            //    	render: function(data) {
	            //       	 //Log the current scroll position.
	            //        	//console.log(data.curTop);
	            //        	$('#offset').text(data.curTop);
	            //    	}
	            //	}
	        );

	    }
	});

/* ===================================================
 * WOW INIT
 * ========================================================== */
 
 new WOW().init();