import React from 'react';
import Header from './Header.js'
import Footer from './Footer.js'
import Main from './Main.js'
import TopBanners from './components/Banners/TopBanners.js'
import './assets/styles/libs.css';
import './assets/styles/style.css';

const App = () => (
  <div>
    <Header />
    <TopBanners />
    <Main />
    <Footer />
  </div>
)

export default App;
