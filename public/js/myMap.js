var map = L.map('map').setView([32.7234498, -117.1601773], 13);


L.tileLayer('http://{s}.tiles.mapbox.com/v3/geogavgj.jj9bif4h/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 13
}).addTo(map);


var marker = L.marker([32.7234498, -117.1601773]).addTo(map)
    .bindPopup('Ardy @ Greater San Diego Area!')
    .openPopup();
