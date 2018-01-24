import React from 'react';
import Header from './Header.js'
import Main from './Main.js'
import TopBanners from './Banners/TopBanners.js'
import './assets/styles/libs.css';
import './assets/styles/style.css';

const App = () => (
  <div>
    <Header />
    <TopBanners />
    <Main />
  </div>
)

export default App;
