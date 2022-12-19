
import React from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css'
import { LocationPin } from './LocationPin'

export const Map = ({ location, zoomLevel }) => 

(
  <div className="map">
    <h2 className="map-h2">Come Visit Us At Our Campus</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }} //your API key here
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
)

