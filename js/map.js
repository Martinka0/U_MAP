
var viewModel;
var map;
var markers = [];
var myInfowindow;

function initMap() {

  // Create a new StyledMapType object, passing it an array of styles,
  // and the name to be displayed on the map type control.
  var styledMapType = new google.maps.StyledMapType(
      [
        {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
        {
          featureType: 'administrative',
          elementType: 'geometry.stroke',
          stylers: [{color: '#c9b2a6'}]
        },
        {
          featureType: 'administrative.land_parcel',
          elementType: 'geometry.stroke',
          stylers: [{color: '#dcd2be'}]
        },
        {
          featureType: 'administrative.land_parcel',
          elementType: 'labels.text.fill',
          stylers: [{color: '#ae9e90'}]
        },
        {
          featureType: 'landscape.natural',
          elementType: 'geometry',
          stylers: [{color: '#dfd2ae'}]
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [{color: '#dfd2ae'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#93817c'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry.fill',
          stylers: [{color: '#a5b076'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#447530'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#f5f1e6'}]
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry',
          stylers: [{color: '#fdfcf8'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#f8c967'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#e9bc62'}]
        },
        {
          featureType: 'road.highway.controlled_access',
          elementType: 'geometry',
          stylers: [{color: '#e98d58'}]
        },
        {
          featureType: 'road.highway.controlled_access',
          elementType: 'geometry.stroke',
          stylers: [{color: '#db8555'}]
        },
        {
          featureType: 'road.local',
          elementType: 'labels.text.fill',
          stylers: [{color: '#806b63'}]
        },
        {
          featureType: 'transit.line',
          elementType: 'geometry',
          stylers: [{color: '#dfd2ae'}]
        },
        {
          featureType: 'transit.line',
          elementType: 'labels.text.fill',
          stylers: [{color: '#8f7d77'}]
        },
        {
          featureType: 'transit.line',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#ebe3cd'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'geometry',
          stylers: [{color: '#dfd2ae'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry.fill',
          stylers: [{color: '#b9d3c2'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#92998d'}]
        }
      ],
      {name: 'Styled Map'});
          map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 50.08804, lng: 14.42076},
          zoom: 14,
          zoomControl: true,
          zoomControlOptions: {
          position: google.maps.ControlPosition.LEFT_CENTER
    },

        mapTypeControlOptions: {
        mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
              'styled_map']
    }


  });
  function googleError() {
    alert("Failed to download Google Maps data.");
}
  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');
  console.log("initMap executed");
  viewModel.google(!!window.google);
  myInfowindow = new google.maps.InfoWindow();
}


var initialBars = [
          {title: 'EMA espresso bar', location: {lat: 50.088707, lng: 14.433490}, types: 'bar'},
          {title: 'Onesip coffee', location: {lat: 50.091282, lng: 14.425393}, types: 'coffee'},
          {title: 'Styl&Interier', location: {lat: 50.081620, lng: 14.424524}, types: 'bar'},
          {title: 'Café jen', location: {lat: 50.071433, lng: 14.455954}, types: 'bar'},
          {title: 'Místo', location: {lat: 50.099013, lng: 14.404463}, types: 'coffee'},
          {title: 'Kavárna co hledá jméno', location: {lat: 50.069659, lng: 14.403759}, types: 'coffee', id: "56c9fc28cd104596fc266354"}
        ];
  //Setting up Foursquare for infowindow
var CLIENT_ID = 'YGBWYBRYGYG42BAT3E3HL0A5LKYITIYNUR52BQDBXQPUI15D';
var CLIENT_SECRET = 'YGBWYBRYGYG42BAT3E3HL0A5LKYITIYNUR52BQDBXQPUI15D';




var Bar = function(data, vm) {
    var self = this;
    this.title = data.title;
    this.location = data.location;
    this.lat = data.location.lat;
    this.lng = data.location.lng;
    this.types = data.types;
    this.id = data.id;
    this.address = data.location.formattedAddress || "Sorry we don't have the info at the time";
    this.visible = ko.observable(true);
    this.address = data.location.address || 'No address provided';

// function ajaxRequestData(data) {
//       $.ajax({
//         method: "GET",
//         url: "https://api.foursquare.com/v2/venues/
//         dataType: 'jsonp',
//prefix + "100x100" + suffix

//     }).done (function (response) {
 //        location.phone = results.phone;
//         location.website = results.weburl;
//         location.review = results.review;
//         var result = response.response.venues;
//         result.forEach (function (item) {
//             dataArray.push(new Bar(item));
//         });
//         //extend map bounds to include all markers on the screen
//         var bounds = new google.maps.LatLngBounds();
//         dataArray().forEach (function (venue) {
//             bounds.extend(venue.marker.position);
//         });
//
//         google.maps.event.addDomListener(window, 'resize', function() {
//             map.fitBounds(bounds);
//         });
//     }).fail (function(jqXHR, textStatus, errorThrown) {
//         console.log ('Status code: ' + jqXHR.status);
//         console.log ('Text status: ' + textStatus);
//         console.log ('Error thrown: ' + errorThrown);
//         window.alert ('Cannot retrieve data from Foursquare at the moment!');
//     });
  //}
    self.clickHandler = function(data) {
      google.maps.event.trigger(this.marker, 'click');
    console.log(data); // should log clicked object
};
    self.makeMarker = ko.computed(function() {
      console.log(vm.google());
      if (vm.google()) { // if (vm.google() === true) {
         // create marker
        self.marker = new google.maps.Marker({
        title: data.title,
        position: data.location,
        map: map,
        animation: google.maps.Animation.DROP

    });

        self.marker.addListener('click', function() {
            populateInfoWindow(this, myInfowindow);
            self.toggleBounce();
          });
           // This function takes in a COLOR, and then creates a new marker
      // icon of that color. The icon will be 21 px wide by 34 high, have an origin
      // of 0, 0 and be anchored at 10, 34).
      function makeMarkerIcon(markerColor) {
        var markerImage = new google.maps.MarkerImage(
          'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
          '|40|_|%E2%80%A2',
          new google.maps.Size(21, 34),
          new google.maps.Point(0, 0),
          new google.maps.Point(10, 34),
          new google.maps.Size(21,34));
        return markerImage;
      }
           // Style the markers a bit. This will be our listing marker icon.
    var defaultIcon = makeMarkerIcon('0091ff');

        // Create a "highlighted location" marker color for when the user
        // mouses over the marker.
    var highlightedIcon = makeMarkerIcon('FFFF24');

       self.marker.addListener('mouseover', function() {
            this.setIcon(highlightedIcon);
          });
        self.marker.addListener('mouseout', function() {
            this.setIcon(defaultIcon);
          });
       function populateInfoWindow(marker, infowindow) {
        // Check to make sure the infowindow is not already opened on this marker.
        if (infowindow.marker != marker) {
          infowindow.marker = marker;
          infowindow.setContent('<div>' + marker.title + '</div>');
          infowindow.open(map, marker);
          // Make sure the marker property is cleared if the infowindow is closed.
          infowindow.addListener('closeclick', function() {
            infowindow.marker = null;
          });
        }
      }
        self.toggleBounce = function() {
        self.marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function () {
            self.marker.setAnimation(null);
        }, 1200);
      };



}
});
};



var ViewModel = function() {
   console.log("ViewModel instantiated");
    var self = this; //Self means it belongs to the ViewModel scope.

    this.google = ko.observable(!!window.google); // false

    this.barList = ko.observableArray([]);
    console.log(self.barList());
    initialBars.forEach(function(barItem) {
    self.barList.push(new Bar(barItem, self) );
    });


    self.Query = ko.observable('');
    this.searchResults = ko.observableArray([]);
    self.searchResults = ko.computed(function() {
       var filter = self.Query().toLowerCase();
      if (!filter) {
      return ko.utils.arrayFilter(self.barList(), function(filter) {
      return ko.utils.stringStartsWith(self.filter().toLowerCase(), filter);
           });


}
});
  };


  //      //self.Item.marker.visible(true);














var viewModel = new ViewModel(); // create a new object and store it in a variable

ko.applyBindings(viewModel); // activate knockout
