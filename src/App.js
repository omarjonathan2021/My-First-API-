import React from 'react'

import IntroSection from './components/Intro'
import ContactSection from './components/ContactSection.js'
import MapSection from './components/Map' // import the map here
import DisclaimerSection from './components/Disclaimer'
import FooterSection from './components/Footer'

import './App.css'

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
} // our location object from earlier

const App = () => (
  <div className="App">
    <IntroSection />
    <ContactSection />
    <MapSection location={location} zoomLevel={17} /> {/* include it here */}
    <DisclaimerSection />
    <FooterSection />
  </div>
)

export default App;