google.maps.event.addDomListener(window, 'load', initialise);

var map;
var mentorMarkers = [];
var suburbMarkers = [];

function initialise () {
    var mapOptions = {
        scrollwheel: false,
        zoom: 14,
        center: { lat: -41.294980, lng: 174.783642 }
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (pos) {
            // console.log(pos.coords);
            var myLocationAccuracy = new google.maps.Circle({
                'map': map,
                'center': new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                'radius': pos.coords.accuracy,
                'fillColor': '#E95C42',
                'fillOpacity': 0.7,
                'strokeColor': '#FFFFFF', 
                'strokeOpacity': 0.7,
                'strokeWeight': 1
            });
            var myLocation = new google.maps.Marker({
                'map': map,
                'position': new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude)
            });

            map.setCenter(myLocation.getPosition());
            map.setZoom(14);
        });
    }

    loadSuburbs();
    loadMentors();
}

// ------------------------
// Load and Process SUBURBS
// ------------------------

function loadSuburbs() {
    var request = new XMLHttpRequest();
    request.open('GET', 'js/suburbs.json', true);

    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            var data = JSON.parse(request.responseText);
            processSuburbs(data);
        } else {
            // We reached our target server, but it returned an error

        }
    };

    request.onerror = function() {
        // There was a connection error of some sort
    };

    request.send();
}

function processSuburbs(suburbs) {
    var i;
    for (i = 0; i < suburbs.length; i += 1) {
        addSuburbMarker(suburbs[i]);
    }

    var bounds = new google.maps.LatLngBounds();
    for (i = 0; i < suburbMarkers.length; i += 1) {
        bounds.extend(suburbMarkers[i].getPosition());
    }
    map.fitBounds(bounds);
}

function addSuburbMarker(suburb) {
    var marker = new google.maps.Marker({
        'map': map,
        'position': new google.maps.LatLng(suburb.lat, suburb.lng),
        'title': suburb.name,
        // 'icon': 'images/mentor.png'
    });

    suburbMarkers.push(marker);

    var suburbsList = document.querySelector("#suburbs-list");

    var listItem = document.createElement('li');
    listItem.innerHTML = "<a href='#'>" + suburb.name + "</a>";
    
    suburbsList.appendChild(listItem);

    listItem.addEventListener('click', function(evt) { 
        evt.preventDefault();
        selectSuburbMarker(marker, listItem);
    });

    google.maps.event.addDomListener(marker, 'click', function() {
        selectSuburbMarker(marker, listItem);
    });
}

function selectSuburbMarker(marker, listItem) {
    // deselectAllSuburbMarkers();
    listItem.className = "active";
    marker.setIcon('images/suburb.png');
    marker.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
    map.setZoom(14);
    map.panTo(marker.getPosition());
}

// function deselectAllSuburbMarkers() {
//     var i;
//     for (i = 0; i < suburbMarkers.length; i += 1) {
//         suburbMarkers[i].setIcon('images/mentor.png');
//         suburbMarkers[i].setZIndex(null);
//     }
//     var listItems = document.querySelectorAll("#suburbs-list li");
//     for (i = 0; i < listItems.length; i += 1) {
//         listItems[i].className = "";
//     }
// }


// ------------------------
// Load and Process MENTORS
// ------------------------

function loadMentors() {
    var request = new XMLHttpRequest();
    request.open('GET', 'js/mentors.json', true);

    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            var data = JSON.parse(request.responseText);
            processMentors(data);
        } else {
            // We reached our target server, but it returned an error

        }
    };

    request.onerror = function() {
        // There was a connection error of some sort
    };

    request.send();
}

function processMentors(mentors) {
    var i;
    for (i = 0; i < mentors.length; i += 1) {
        addMentorMarker(mentors[i]);
    }

    var bounds = new google.maps.LatLngBounds();
    for (i = 0; i < mentorMarkers.length; i += 1) {
        bounds.extend(mentorMarkers[i].getPosition());
    }
    map.fitBounds(bounds);
}

function addMentorMarker(mentor) {
    var marker = new google.maps.Marker({
        'map': map,
        'position': new google.maps.LatLng(mentor.lat, mentor.lng),
        'title': mentor.name,
        'icon': 'images/mentor.png'
    });

    mentorMarkers.push(marker);

    var mentorsList = document.querySelector("#mentors-list");

    var listItem = document.createElement('li');
    listItem.innerHTML = "<a href='#'>" + "<span class='mentor-name'>" + mentor.name + "</span>" + "<br>" + mentor.company + "<br>" + "<p class='mentor-email'>" + mentor.email + "</p>" + "<br>" + "<p>" + mentor.description + "</p>" + "</a>";
    
    mentorsList.appendChild(listItem);

    listItem.addEventListener('click', function(evt) { 
        evt.preventDefault();
        selectMentorMarker(marker, listItem);
    });

    google.maps.event.addDomListener(marker, 'click', function() {
        selectMentorMarker(marker, listItem);
    });
}

function selectMentorMarker(marker, listItem) {
    deselectAllMarkers();
    listItem.className = "active";
    marker.setIcon('images/mentor-select.png');
    marker.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
    map.setZoom(14);
    map.panTo(marker.getPosition());
    // window.scrollTo('#map-canvas');
}

function deselectAllMarkers() {
    var i;  
    for (i = 0; i < mentorMarkers.length; i += 1) {
        mentorMarkers[i].setIcon('images/mentor.png');
        mentorMarkers[i].setZIndex(null);
    }
    var listItems = document.querySelectorAll("#mentors-list li");
    for (i = 0; i < listItems.length; i += 1) {
        listItems[i].className = "";
    }
}
