var map = L.map('map').setView([40.722343, -73.948237], 13);

L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-i875mjb7/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);


function makeMarkers(feature, layer){
	//console.log(feature);
	layer.bindPopup(
		feature.properties.att_1
		+ "<br/> The name of the park is "
		+ feature.properties.att_1
	);
}


$.getJSON('/data/map.geojson', function(data){
	//console.log(data);
	L.geoJson(data.features, {  //use leaflet's functionality to grab geoJSON features
		onEachFeature: makeMarkers
	}).addTo(map);  //add to map
});