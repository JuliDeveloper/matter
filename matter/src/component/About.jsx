import React from 'react';
import './About.css';

function About() {
    return <div className='about'>
        <h2 className='title'>About Matter</h2>
        <div className='container'>
            <div className='image'></div>
            <div className='description'>
                <p className='text'>Our mission is threefold - to foster designer-artisan collaborations, inspire consumers to value provenance and process, and pioneer industry change and sustainability for rural textile communities. </p>
                <h5 className='subtitle'>Artisan Employment Days Created</h5>
                <p className='info'>123456</p>
                <h5 className='subtitle'>Countries Involved To Date</h5>
                <p className='info'>India</p>
                <p className='info'>China</p>
                <p className='info'>Sri Lanka</p>
                <h5 className='subtitle'>#MatterTribe </h5>
                <p className='info'>12 designers</p>
                <p className='info'>12 Factories</p>
            </div>
        </div>
    </div>
}

export default About;