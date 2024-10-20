import React from "react";
import Navbar from './components/navbar';
import Carousel from './components/carousel';
import Services from './components/ourService';
import AboutUs from './components/aboutUs';
import Projects from './components/project';
import Testimonial from './components/testimonial';
import Footer from './components/footer';
import './app.css';

function DisplayUi() {
    return (
        <div className="App">
            <Navbar />
            <Carousel />
            <Services />
            <AboutUs />
            <Projects />
            <Testimonial />
            <Footer />
        </div>
    );
}

export default DisplayUi;