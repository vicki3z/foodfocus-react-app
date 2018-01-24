import React from 'react';
import Header from './Header.js'
import Main from './Main.js'
import Banners from './Banners/Banners.js'
import './assets/styles/libs.css';
import './assets/styles/style.css';

const App = () => (
  <div>
    <Header />
    <Banners />
    <Main />
  </div>
)

export default App;
