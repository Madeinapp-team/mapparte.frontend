
var locations = [
    ['title', 33.890542, 151.274856],
    ['title', 33.923036, 151.259052],
    ['title', 34.028249, 151.157507],
    ['title', 33.80010128657071, 151.28747820854187],
    ['title', 33.950198, 151.259302]
];
function initialize() {
    var myOptions = {
        center: new google.maps.LatLng(33.890542, 151.274856),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("default"),
        myOptions);
    setMarkers(map, locations)
}
function setMarkers(map, locations) {
    var marker, i
    for (i = 0; i < locations.length; i++) {

        var loan = locations[i][0]
        var lat = locations[i][1]
        var long = locations[i][2]
        var maptitle = document.getElementsByClassName("map-title")[i].innerHTML;

        latlngset = new google.maps.LatLng(lat, long);

        var marker = new google.maps.Marker({
            map: map, title: maptitle, position: latlngset
        });
        map.setCenter(marker.getPosition())
        var content = document.getElementsByClassName("map-content")[i].innerHTML;
        var infowindow = new google.maps.InfoWindow()
        google.maps.event.addListener(marker, 'click', (function (marker, content, infowindow) {
            return function () {
                infowindow.setContent(content);
                infowindow.open(map, marker);
            };
        })(marker, content, infowindow));
    }
}