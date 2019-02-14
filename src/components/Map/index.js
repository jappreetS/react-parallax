import React, { Component } from 'react';

import Label from './../../elements/Label';

import './Map.scss';

class Map extends Component {
  constructor() {
    super();

    this.initMap = this.initMap.bind(this);
  }
  componentDidMount() {
    this.initMap();
  }

  initMap() {
    const myLatlng = { lat: 51.512501, lng: -0.127120 };

    const map = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: myLatlng,
      styles: [{ "featureType": "all", "elementType": "geometry.fill", "stylers": [{ "lightness": "-100" }, { "color": "#ffdac9" }] }, { "featureType": "poi", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#ffcab1" }] }, { "featureType": "poi", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{ "color": "#ffcab1" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "lightness": 100 }, { "visibility": "simplified" }] }, { "featureType": "road", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit.line", "elementType": "geometry", "stylers": [{ "visibility": "on" }, { "lightness": 700 }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#92e1dd" }] }]
    });

    const marker = new window.google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Click to zoom'
    });

    map.addListener('center_changed', () => {
      // 3 seconds after the center of the map has changed, pan back to the
      // marker.
      window.setTimeout(() => {
        map.panTo(marker.getPosition());
      }, 3000);
    });

    marker.addListener('click', () => {
      map.setZoom(8);
      map.setCenter(marker.getPosition());
    });
  }

  render() {
    return (
      <div className="map-container">
        <div id="map" className="map">
        </div>
        <div className="location">
          <Label
            classNames="location-title text-uppercase"
            text="Location"
          />
          <Label
            classNames="location-text"
            text="12 Upper St. Martin's Lane WC2H 9FB, London"
          />
        </div>
      </div>
    );
  }
}

export default Map;