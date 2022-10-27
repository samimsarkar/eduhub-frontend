import React from 'react';
import { Link } from 'react-router-dom';
import background from './../../../assets/images/background.jpg';

const HeroSection = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${background})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-screen">
                    <h1 className="mb-5 text-2xl lg:text-4xl font-bold">LEARN YOUR FAVOURITE</h1>
                    <h1 className="mb-5 text-4xl lg:text-6xl font-bold"><span className="text-warning">PROGRAMMING</span> LANGUAGE</h1>
                    <Link to='/courses' className="btn btn-warning rounded hover:bg-transparent hover:text-warning">Get Started</Link>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;