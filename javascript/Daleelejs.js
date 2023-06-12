/*jslint browser: true*/
/*global $, jQuery*/

var myButton = document.querySelector('button');

window.onscroll = function () {
    
    'use strict';
    
    if (window.pageYOffset >= 2300) {
        
        myButton.style.display = 'block';
        
    } else {
        
        myButton.style.display = 'none';
        
    }
    
};

myButton.onclick = function () {
    
    'use strict';
    
    window.scrollTo(0, 0);
    
};

// =============================================================================


function initMap() {
    
    'use strict';
    
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}