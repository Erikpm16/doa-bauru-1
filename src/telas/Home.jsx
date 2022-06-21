import React from 'react'
import Accordion from './Accordion';
import Navibar from './Navibar';
import Footer from './Footer';
import Carousel from './Carousel ';
import Map from './Map'


export default function Home(){
    return(
        <>
        <Navibar />
        <Carousel />
        <Map />
        <Accordion />
        <Footer />
        </>
    );
}