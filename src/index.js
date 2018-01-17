import ReactDOM from 'react-dom';
import React from 'react';
import Header from './components/common/header.js';
import Footer from './components/common/footer.js';
import HeaderTitile from './components/common/headertitle.js';
import Searcbox from './components/common/searchbox.js';
import BackgroundImage from './components/common/backgroundimg.js';

ReactDOM.render((
  <div>
    <Header/>
    <HeaderTitile/>
    <BackgroundImage/>
    <Searcbox/>
    <Footer/>
  </div>
), document.getElementById('root')); 
