// Copyright Info
var map = L.map('map').setView([43.67, -96.99], 4);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Locations
var popup = L.popup();
var strike2 = L.marker([38.80547, -76.992188]).addTo(map);
var strike3 = L.marker([42.333169, -83.047028]).addTo(map);
var strike4 = L.marker([41.866493, -87.628326]).addTo(map);
var strike5 = L.marker([36.137875, -115.136719]).addTo(map);
var strike6 = L.marker([34.034453, -118.240356]).addTo(map);
var strike7 = L.marker([40.75558, -111.873779]).addTo(map);
var strike8 = L.marker([39.732538, -104.985352]).addTo(map);
var strike9 = L.marker([40.688969, -74.003906]).addTo(map);
var strike10 = L.marker([33.449777, -112.104492]).addTo(map);
var strike11 = L.marker([29.735762, -95.383301]).addTo(map);
var strike12 = L.marker([42.309815, -71.037598]).addTo(map);

// Popups
strike2.bindPopup("Washington, DC");
strike3.bindPopup("Detroit, MI");
strike4.bindPopup("Chicago, IL");
strike5.bindPopup("Las Vegas, NV");
strike6.bindPopup("Los Angeles, CA");
strike7.bindPopup("Salt Lake City, UT");
strike8.bindPopup("Denver, CO");
strike9.bindPopup("New York, NY");
strike10.bindPopup("Phoenix, AZ");
strike11.bindPopup("Houston, TX");
strike12.bindPopup("Boston, MA");

// Cords
var popup = L.popup();
function onMapClick(e) {
popup
.setLatLng(e.latlng)
.setContent("You clicked the map at " + e.latlng.toString())
.openOn(map);
}
map.on('click', onMapClick);