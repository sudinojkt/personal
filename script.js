var map = L.map('map').setView([1.352083, 103.819836], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//add marker 
L.marker([1.352083, 103.819836]).addTo(map);
.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
.openPopup();

//bind marker popup
var circle = L.circle([1.352083, 103.819836], {
    color: 'yellow',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

var popup = L.popup()
    .setLatLng([1.352083, 103.819836])
    .setContent("I am at the center of Singapore.")
    .openOn(map);