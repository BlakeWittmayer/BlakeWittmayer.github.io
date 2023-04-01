var map;
var lyrOSM;
var lyrData;

$(document).ready(function () {
    // create map object
    map = L.map('map');

    // add basemap layer
    lyrOSM = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');
    map.addLayer(lyrOSM);

    var options = {
        maxZoom: 16,
        tolerance: 3,
        debug: 0,
        style: {
          fillColor: "#1EB300",
          color: "#F2FF00",
        },
      };

    var vtLayer = L.geoJson.vt(geojson, options).addTo(map);
}