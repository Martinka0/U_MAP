<<<<<<< HEAD
var viewModel;
var map;
var marker;
||||||| merged common ancestors

=======

var viewModel;
var map;
var markers = [];
var myInfowindow;
>>>>>>> master

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
<<<<<<< HEAD
  console.log("initMap executed");
  viewModel.google(!!window.google);
||||||| merged common ancestors
=======
  console.log("initMap executed");
  viewModel.google(!!window.google);
  myInfowindow = new google.maps.InfoWindow();
>>>>>>> master
}


var initialBars = [
          {title: 'EMA espresso bar', location: {lat: 50.088707, lng: 14.433490}, types: 'bar'},
          {title: 'Onesip coffee', location: {lat: 50.091282, lng: 14.425393}, types: 'coffee'},
          {title: 'Styl&Interier', location: {lat: 50.081620, lng: 14.424524}, types: 'bar'},
          {title: 'Café jen', location: {lat: 50.071433, lng: 14.455954}, types: 'bar'},
          {title: 'Místo', location: {lat: 50.099013, lng: 14.404463}, types: 'coffee'},
          {title: 'Kavárna co hledá jméno', location: {lat: 50.069659, lng: 14.403759}, types: 'coffee', id: "56c9fc28cd104596fc266354"}
        ];
<<<<<<< HEAD
var Bar = function(data, vm) {
    this.title = data.title;
    this.location = data.location;
    this.lat = data.location.lat;
    this.lng = data.location.lng;
||||||| merged common ancestors
=======
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
        self.openInfoWindow();
        self.toggleBounce();
    });

        var contentString = "Hello";
        self.openInfoWindow = function(data) {
        self.myInfowindow.open(map, self.marker);
        self.myInfowindow.setContent(contentString);
        };
>>>>>>> master

<<<<<<< HEAD
    // http://knockoutjs.com/documentation/computedObservables.html
    self.makeMarker = ko.computed(function() {
      console.log(vm.google());
      if (map !== undefined) {
        this.marker = new google.maps.Marker({
        title: data.title,
        position: data.location,
        map: map,
        animation: google.maps.Animation.DROP
||||||| merged common ancestors
var Bar = function(data) {
    this.title = ko.observable(data.title);
=======
        self.toggleBounce = function() {
        self.marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function () {
            self.marker.setAnimation(null);
        }, 1200);
      };
>>>>>>> master

    })
  };
});
}
<<<<<<< HEAD

||||||| merged common ancestors
=======
});
};




>>>>>>> master
var ViewModel = function() {
<<<<<<< HEAD
   console.log("ViewModel instantiated");
       var self = this;

    this.google = ko.observable(!!window.google); // false
||||||| merged common ancestors
    var self = this;
=======
   console.log("ViewModel instantiated");
       var self = this;

    this.google = ko.observable(!!window.google); // false
    this.userQuery = ko.observable("");
    this.printoToConsole = ko.computed(function() {
    console.log(self.userQuery());
    });

    self.search = ko.computed (function () {
    var userQuery = self.userQuery().toLowerCase();

    console.log('userQuery: ', userQuery);

    });
>>>>>>> master
    this.barList = ko.observableArray([]);
    initialBars.forEach(function(barItem) {
    self.barList.push(new Bar(barItem, self) );
    });
    console.log (self.barList());
    this.currentBar = ko.observable(this.barList()[0]);
    this.setBar = function(clickedBar) {
        self.currentBar(clickedBar);
    };

};

var viewModel = new ViewModel(); // create a new object and store it in a variable

ko.applyBindings(viewModel); // activate knockout
