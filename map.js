mapboxgl.accessToken = 'pk.eyJ1Ijoic2luZGh1MTkiLCJhIjoiY2t2NDBicWh0MzlheDJwcDZ2Z2hpa3ZrdSJ9.BgVB8bAe1BieSBUm47d2Zg';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [50.09583036227829, 9.050960740284873],
    zoom: 1
});

const countries = {
    'germany': {
        center: [9.050960740284873, 50.09583036227829], //germany
        zoom: 5
    },
    'russia': {
        center: [37.53970042515579,55.7509083952502], //Russia
        zoom: 5
    },
    'china': {
        center: [103.3829085038708, 34.785875541974406],//china
        zoom: 5
    },
    'africa': {
        center: [27.218846895602617,-25.622416124377214],//africa
        zoom: 5
    },
    'canada': {
        center: [-73.56771348315796, 45.49649550157406],//Canada
        zoom: 5
    },
    'china1': {
        center:  [103.3829085038708,  34.785875541974406],//production
        zoom: 5
    }
};

for (const country in countries) {
    let marker = new mapboxgl.Marker()
    marker.setLngLat(countries[country].center)
    marker.addTo(map)

    // let popup = new mapboxgl.Popup()
    // popup.setHTML(d.content)
    // marker.setPopup(popup)
}

function onClickDiv(country) {
  map.flyTo(countries[country]);
  document.getElementById(country).classList.add('active');
}
