/* ===================================================
:: GOOGLE MAP
* ================================================= */
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);
        
function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 10,
        disableDefaultUI: true,


        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(30.429738, -90.0537261), // 

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [	
        {		featureType:'water',			stylers:[{color:'#F37403'},{visibility:'on'}]	},
        {		featureType:'landscape',		stylers:[{color:'#FFD99F'}]	},
        {		featureType:'road',				stylers:[{saturation:0},{lightness:100}]	},
        {		featureType:'road.highway',		stylers:[{visibility:'simplified'}]	},
        {		featureType:'road.arterial',	elementType:'labels.icon',			stylers:[{visibility:'off'}] },
        {		featureType:'administrative',	elementType:'labels.text.fill',		stylers:[{color:'#370025'}]	},
        {		featureType:'transit',			stylers:[{visibility:'off'}]	},
        {		featureType:'poi',				stylers:[{visibility:'off'}]	}]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
}
