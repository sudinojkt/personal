////////////////////////////////////////////////////////////////////////////////////////////
function initMap() {   

    let map = L.map('map').setView([1.3521, 103.8198], 12);
    
    // tile layer
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 19,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
    }).addTo(map);

    //add maker and popup
    // var marker = L.marker([1.3521, 103.8198]).addTo(map);
    // marker.bindPopup("<b>Hello world!</b><br>Greetings from Singapore.").openPopup();

    //add LatLng popup
    var popup = L.popup();
    function onMapClick(e) {
        popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
    }
    map.on('click', onMapClick);

/////////////////////////////////////////////////////////////////////////////////////////  
    let searchResultLayer = L.markerClusterGroup();
    //searchResultLayer.addTo(map);
///////////////////////////////////////////////////////////////////////////////
    let carparkLayer = L.markerClusterGroup();
    // carparkLayer.addTo(map)
///////////////////////////////////////////////////////////////////////////////
    let taxiLayer = L.markerClusterGroup();  
    // taxiLayer.addTo(map)
///////////////////////////////////////////////////////////////////////////////
    let weatherLayer = L.markerClusterGroup();  
        weatherLayer.addTo(map)
///////////////////////////////////////////////////////////////////////////////

    let baseLayers = {
        'Food': searchResultLayer,
        'Carpark': carparkLayer,
        'Taxi': taxiLayer,
        'Weather': weatherLayer,
    }

    L.control.layers(baseLayers, {}).addTo(map);
    return map;
}
