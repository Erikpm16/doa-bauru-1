import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import Accordion from './telas/Accordion';
import Navibar from './telas/Navibar';
import Carousel from './telas/Carousel ';
import Map from './telas/Map'
import reportWebVitals from './reportWebVitals';
import Footer from './telas/Footer';
import './telas/styles/index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navibar />
    <Carousel />
    <Map />
    <Accordion />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
