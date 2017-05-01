var viewModel;
var map;
var markers = [];
var myInfowindow;

function initMap() {

    // Create a new StyledMapType object, passing it an array of styles,
    // and the name to be displayed on the map type control.
    var styledMapType = new google.maps.StyledMapType(
        [{
            elementType: 'geometry',
            stylers: [{
                color: '#ebe3cd'
            }]
        }, {
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#523735'
            }]
        }, {
            elementType: 'labels.text.stroke',
            stylers: [{
                color: '#f5f1e6'
            }]
        }, {
            featureType: 'administrative',
            elementType: 'geometry.stroke',
            stylers: [{
                color: '#c9b2a6'
            }]
        }, {
            featureType: 'administrative.land_parcel',
            elementType: 'geometry.stroke',
            stylers: [{
                color: '#dcd2be'
            }]
        }, {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#ae9e90'
            }]
        }, {
            featureType: 'landscape.natural',
            elementType: 'geometry',
            stylers: [{
                color: '#dfd2ae'
            }]
        }, {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{
                color: '#dfd2ae'
            }]
        }, {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#93817c'
            }]
        }, {
            featureType: 'poi.park',
            elementType: 'geometry.fill',
            stylers: [{
                color: '#a5b076'
            }]
        }, {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#447530'
            }]
        }, {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{
                color: '#f5f1e6'
            }]
        }, {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [{
                color: '#fdfcf8'
            }]
        }, {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{
                color: '#f8c967'
            }]
        }, {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{
                color: '#e9bc62'
            }]
        }, {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry',
            stylers: [{
                color: '#e98d58'
            }]
        }, {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry.stroke',
            stylers: [{
                color: '#db8555'
            }]
        }, {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#806b63'
            }]
        }, {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [{
                color: '#dfd2ae'
            }]
        }, {
            featureType: 'transit.line',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#8f7d77'
            }]
        }, {
            featureType: 'transit.line',
            elementType: 'labels.text.stroke',
            stylers: [{
                color: '#ebe3cd'
            }]
        }, {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [{
                color: '#dfd2ae'
            }]
        }, {
            featureType: 'water',
            elementType: 'geometry.fill',
            stylers: [{
                color: '#b9d3c2'
            }]
        }, {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#92998d'
            }]
        }], {
            name: 'Styled Map'
        });
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 50.08804,
            lng: 14.42076
        },
        zoom: 14,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER
        },

        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                'styled_map'
            ]
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


var initialBars = [{
    title: 'EMA espresso bar',
    location: {
        lat: 50.088707,
        lng: 14.433490
    },
    types: 'bar',
    VENUE_ID: "51c70cc3498e0d1d9e1a0087"
}, {
    title: 'Onesip coffee',
    location: {
        lat: 50.091282,
        lng: 14.425393
    },
    types: 'coffee',
    VENUE_ID: "662c71d498e4003dfb5de01"
}, {
    title: 'Styl&Interier',
    location: {
        lat: 50.081620,
        lng: 14.424524
    },
    types: 'bar',
    VENUE_ID: "52ebad76498e4a552733fc62"
}, {
    title: 'Café jen',
    location: {
        lat: 50.071433,
        lng: 14.455954
    },
    types: 'bar',
    VENUE_ID: "5192bda27dd298175ef01fd7"
}, {
    title: 'Místo',
    location: {
        lat: 50.099013,
        lng: 14.404463
    },
    types: 'coffee',
    VENUE_ID: "55a776ea498eddbd520275a7"
}, {
    title: 'Kavárna co hledá jméno',
    location: {
        lat: 50.069659,
        lng: 14.403759
    },
    types: 'coffee',
    VENUE_ID: "56c9fc28cd104596fc266354"
}];
//Setting up Foursquare for infowindow
var CLIENT_ID = 'YGBWYBRYGYG42BAT3E3HL0A5LKYITIYNUR52BQDBXQPUI15D';
var CLIENT_SECRET = 'WKKZFEP52VDBGCBPTP0DE4W44GFNMK0G5RT0ETOH3Y1ZYQ0T';

var version = new Date().toISOString().slice(0, new Date().toISOString().indexOf("T")).replace(/-/g, "");
console.log(version);

var Bar = function(data, vm) {
    var self = this;
    this.title = data.title;
    this.location = data.location;
    this.lat = data.location.lat;
    this.lng = data.location.lng;
    this.types = data.types;
    this.VENUE_ID = data.VENUE_ID;
    this.address = data.location.formattedAddress || "Sorry we don't have the info at the time";
    this.visible = ko.observable(true);
    this.name = data.name;
    this.tips = data.tips;
    this.photo = data.photo; //prefix + "100x100" + suffix




    self.clickHandler = function(data) {
        google.maps.event.trigger(this.marker, 'click');
        console.log(data); // should log clicked object
    };

    var url = 'https://api.foursquare.com/v2/venues/' + self.VENUE_ID;
    var urlPhoto = 'https://api.foursquare.com/v2/venues/' + self.VENUE_ID + '/photos';
 //   var img = photo.prefix + 'width' + photo.width + photo.suffix;
    var dt = 'json';

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

                $.ajax({

                        url: url, urlPhoto,
                        dataType: dt,
                        data: {
                            client_id: CLIENT_ID,
                            client_secret: CLIENT_SECRET,
                           // venue: self.VENUE_ID,
                           // name: self.name,
                          //  photo: self.photo,
                           // formattedAddress: self.address,
                            prefix: self.photoPrefix,
                            suffix: self.photoSuffix,
                            v: version,
                            async: true
                            //  more key-value pairs with venues search request parameters here
                        }
                    })

                    .done(function(response) {
                        var results = response.response.venue.name;
                       // self.barList.push ({
                            name: self.name,

                     //   })
                        // results.forEach(function(venueItem) {
                        // self.barList.push(new Bar(venueItem, self));
                        console.log(results);

                       //});
                       // var item = response.response.photo;
                        //var resultsad = response.response.formattedAddress;
                        console.log("second success");
                        console.log(results);
                        console.log(barList());


                    })
                    .fail(function(jqXHR, textStatus, errorThrown) {
                        console.log('Status code: ' + jqXHR.status);
                        console.log('Text status: ' + textStatus);
                        console.log('Error thrown: ' + errorThrown);
                        window.alert('Cannot retrieve data from Foursquare at the moment!');
                    });
            });


            // This function takes in a COLOR, and then creates a new marker
            // icon of that color. The icon will be 21 px wide by 34 high, have an origin
            // of 0, 0 and be anchored at 10, 34).
            function makeMarkerIcon(markerColor) {
                var markerImage = new google.maps.MarkerImage(
                    'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|' + markerColor +
                    '|40|_|%E2%80%A2',
                    new google.maps.Size(21, 34),
                    new google.maps.Point(0, 0),
                    new google.maps.Point(10, 34),
                    new google.maps.Size(21, 34));
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
                    infowindow.setContent (date.name);


                    infowindow.open(map, marker);
                    // Make sure the marker property is cleared if the infowindow is closed.
                    infowindow.addListener('closeclick', function() {
                        infowindow.marker = null;
                    });
                }
            }
            self.toggleBounce = function() {
                self.marker.setAnimation(google.maps.Animation.BOUNCE);
                setTimeout(function() {
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
        self.barList.push(new Bar(barItem, self));
    });

    self.Query = ko.observable('');
    console.log(self.Query);

    self.searchResults = ko.computed(function() {
        var filter = self.Query().toLowerCase();
        if (!filter) {
            return self.barList();
        } else {
            //the ko.utils.arrayFilter() method iterates of the barList observableArray's items bar item by bar item.
            return ko.utils.arrayFilter(self.barList(), function(bar) {
                var title = bar.title.toLowerCase();
                var match = title.indexOf(filter) > -1;
                console.log(title, filter, match);
                //the variable `match` holds either `true` or `false`
                //when we return 'match' to the arrayFilter() method, the bar item will be part of a subset of items which will be returned to the view.
                return match;
            });
        }
    });
};




var viewModel = new ViewModel(); // create a new object and store it in a variable

ko.applyBindings(viewModel); // activate knockout