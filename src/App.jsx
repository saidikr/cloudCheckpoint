import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Map } from './components/map/Map'

function App() {
  const location = {
  address: 'Alger, Hydra',
  lat: 36.753232,
  lng: 3.034976,
  }
  return (
  
  <div className="App">
      <Map  location={location} zoomLevel={17} />
    </div>
  )
}

export default App
