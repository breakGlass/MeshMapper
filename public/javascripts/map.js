console.log('map connected');

mapboxgl.accessToken = MAPBOX_API_KEY;

// NOTE: mapbox coord format is LNG,LAT
const startingCoords = [-74.0052372, 40.7337857];

const map = new mapboxgl.Map({
  container: 'map',
  center: startingCoords,
  zoom: 14, //starting zoom (0-16)
  style: 'mapbox://styles/mapbox/dark-v9'
});
