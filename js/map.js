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
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']
        }
    });

    function googleError() {
        alert("Failed to download Google Maps data.");
    }
    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
    //   console.log("initMap executed");
    viewModel.google(!!window.google);
    myInfowindow = new google.maps.InfoWindow();
}
var initialBars = [{
    title: 'EMA espresso bar',
    location: {
        lat: 50.088707,
        lng: 14.433490
    },
    types: 'coffee',
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
    types: 'coffee',
    VENUE_ID: "52ebad76498e4a552733fc62"
}, {
    title: 'Café jen',
    location: {
        lat: 50.071433,
        lng: 14.455954
    },
    types: 'coffee',
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
}, {
    title: 'Stromovka',
    location: {
        lat: 50.104557,
        lng: 14.4229697
    },
    types: 'see',
    VENUE_ID: "4adcda9ff964a520654d21e3"
}, {
    title: 'Kampa',
    location: {
        lat: 50.0839813,
        lng: 14.407711
    },
    types: 'see',
    VENUE_ID: "4b464feef964a520451d26e3"
}, {
    title: 'Prague Castle',
    location: {
        lat: 50.0898815,
        lng: 14.398848
    },
    types: 'see',
    VENUE_ID: "4b1434a6f964a5202b9f23e3"
}, {
    title: 'Pražská náplavka',
    location: {
        lat: 50.0714088,
        lng: 14.4141436
    },
    types: 'bar',
    VENUE_ID: "4d73979bd976236a3fbc1679"
}, {
    title: 'Naše maso',
    location: {
        lat: 50.0906722,
        lng: 14.4269406
    },
    types: 'food',
    VENUE_ID: "5311ae7311d2b14c76832d24"
}, {
    title: 'Lokál Dlouhá',
    location: {
        lat: 50.0907283,
        lng: 14.4255148
    },
    types: 'food',
    VENUE_ID: "4af5389cf964a5209af821e3"
},{
    title: 'U Kroka',
    location: {
        lat: 50.0668403,
        lng: 14.4179499
    },
    types: 'food',
    VENUE_ID: "5311ae7311d2b14c76832d24"
},{
    title: 'Ambiente Pasta Fresca',
    location: {
        lat: 50.0872134,
        lng: 14.4238377
    },
    types: 'food',
    VENUE_ID: "4b6c0951f964a520bb202ce3"
}, {
    title: 'Bokovka',
    location: {
        lat: 50.0908306,
        lng: 14.4265674
    },
    types: 'bar',
    VENUE_ID: "56447ad4498eee9ca211cc65"
},{
    title: 'Hemingway Bar',
    location: {
        lat: 50.0839686,
        lng: 14.4142602
    },
    types: 'bar',
    VENUE_ID: "4b9fc06ef964a5204e3b37e3"
}];
//Setting up Foursquare for infowindow
var CLIENT_ID = 'YGBWYBRYGYG42BAT3E3HL0A5LKYITIYNUR52BQDBXQPUI15D';
var CLIENT_SECRET = 'WKKZFEP52VDBGCBPTP0DE4W44GFNMK0G5RT0ETOH3Y1ZYQ0T';
var version = new Date().toISOString().slice(0, new Date().toISOString().indexOf("T")).replace(/-/g, "");
//console.log(version);
var Bar = function(data, vm) {
    var self = this;
    this.title = data.title;
    this.location = data.location;
    this.types = data.types,
    this.lat = data.location.lat;
    this.lng = data.location.lng;
    this.VENUE_ID = data.VENUE_ID;
    self.address = self.address;
    this.name = self.name;
    this.urlBar = self.urlBar;
    this.phone = self.phone;
    this.tips = self.tips;
    this.photo = self.photo;
    this.icon = self.icon;
    self.clickHandler = function(data) {
        google.maps.event.trigger(this.marker, 'click');
       // console.log(data); // should log clicked object
    };
    var url = 'https://api.foursquare.com/v2/venues/' + self.VENUE_ID;
    var urlPhoto = 'https://api.foursquare.com/v2/venues/' + self.VENUE_ID + '/photos';
    var dt = 'json';
    var contentString;
    self.makeMarker = ko.computed(function() {
        //    console.log(vm.google());
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
                    url: url,
                    dataType: dt,
                    data: {
                        client_id: CLIENT_ID,
                        client_secret: CLIENT_SECRET,
                        v: version,
                        async: true
                    }
                }).then(function(response) {
                    self.name = response.response.venue.name;
                    self.address = response.response.venue.location.formattedAddress;
                    self.urlBar = response.response.venue.url;
                    self.phone = response.response.venue.contact.formattedPhone;
                    console.log("first success");
                }).then(function(response) {
                    return $.ajax({
                        url: urlPhoto,
                        dataType: dt,
                        data: {
                            limit: 1,
                            client_id: CLIENT_ID,
                            client_secret: CLIENT_SECRET,
                            v: version,
                            async: true
                        }
                    }).then(function(response) {
                        self.photo = response.response.photos.items[0];
                        self.prefix = response.response.photos.items[0].prefix;
                        self.suffix = response.response.photos.items[0].suffix;
                        self.width = response.response.photos.items.width;
                        myInfowindow.setContent('<div>' + '<img class="img-thumbnail" width="150" src="' + self.prefix + '300' + self.photo.width + self.suffix + '">' + '<h4>' + self.name + '</h1>' + '<br>' + self.address[0] + '<br>' + self.address[1] + '<br>' + '<br>' + self.phone + '<br><br>' + 'Website: <a href="' + self.urlBar + '">' + self.urlBar + '</a></div>');
                        populateInfoWindow(self.marker, myInfowindow);
                        self.toggleBounce();
                        console.log("second success");
                        map.setCenter(self.marker.getPosition());
                    }).fail(function(jqXHR, textStatus, errorThrown) {
                        console.log('Status code: ' + jqXHR.status);
                        console.log('Text status: ' + textStatus);
                        console.log('Error thrown: ' + errorThrown);
                        window.alert('Cannot retrieve data from Foursquare at the moment!');
                    });

                }).fail(function(jqXHR, textStatus, errorThrown) {
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
                var markerImage = new google.maps.MarkerImage('http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|' + markerColor + '|40|_|%E2%80%A2', new google.maps.Size(21, 34), new google.maps.Point(0, 0), new google.maps.Point(10, 34), new google.maps.Size(21, 34));
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
            //make sure map markers always fit on screen as user resizes their browser window
            function populateInfoWindow(marker, infowindow) {
                // Check to make sure the infowindow is not already opened on this marker.
                if (infowindow.marker != marker) {
                    infowindow.marker = marker;
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
    //  console.log("ViewModel instantiated");
    var self = this; //Self means it belongs to the ViewModel scope.
    this.google = ko.observable(!!window.google); // false
    this.barList = ko.observableArray([]);
    //   console.log(self.barList());
    initialBars.forEach(function(barItem) {
        self.barList.push(new Bar(barItem, self));
    });
    self.Query = ko.observable('');

    self.searchResults = ko.computed(function() {
        var filter = self.Query().toLowerCase();
        if (!filter) {
            return self.barList();
        } else {
            //the ko.utils.arrayFilter() method iterates of the barList observableArray's items bar item by bar item.
            return ko.utils.arrayFilter(self.barList(), function(bar) {
                var title = bar.title.toLowerCase();
                var match = title.indexOf(filter) > -1;
                bar.marker.setVisible(match);
                //          console.log(title, filter, match);
                //the variable `match` holds either `true` or `false`
                //when we return 'match' to the arrayFilter() method, the bar item will be part of a subset of items which will be returned to the view.
                return match;
            });
        }
    });
};
var viewModel = new ViewModel(); // create a new object and store it in a variable
ko.applyBindings(viewModel); // activate knockout