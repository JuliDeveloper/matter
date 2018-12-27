import React from 'react';
import './Explore.css';

function Explore() {
    return <div className='container'>
        <h1 className='title'>Explore</h1>
        <div className='box'>
            <div className='box__big'>
                <div className='denomination'>
                    <span className='indication'>fieldtested</span>
                    <span className='date'>january 19, 2017</span>
                </div>
                <h2 className='box__title'>Connected Clothing: Raye Padit</h2>
                <p className='text'>As a voice for conscious fashion, Raye Padit is motivated by the belief that one person’s actions, no matter how small, holds great impact. This core ideal has driven him to start his three passion projects: Connected Threads Asia, PeyaR, and Swagalls.</p>
                <div className='image'></div>
            </div>
            <div className='case'>
                <div className='box__small'>
                    <div className='denomination'>
                        <span className='indication'>fieldtested</span>
                        <span className='date'>january 19, 2017</span>
                    </div>
                    <h2 className='small__title'>Kérastase: A Collaboration</h2>
                    <div className='small__image bag'></div>
                </div>
                <div className='box__small'>
                    <div className='denomination'>
                        <span className='indication'>fieldtested</span>
                        <span className='date'>january 19, 2017</span>
                    </div>
                    <h2 className='small__title'>Remarkable Resilience: Grace Kim</h2>
                    <p className='small__text'>A woman in my life who has shown remarkable resilience is my best friend Grace. Since she was a kid, she struggled with general anxiety disorder and panic disorder.</p>
                </div>
            </div>
            <div className='case'>
                <div className='box__small'>
                    <div className='denomination'>
                        <span className='indication'>fieldtested</span>
                        <span className='date'>january 19, 2017</span>
                    </div>
                    <h2 className='small__title'>Jaclynn Seah</h2>
                    <p className='small__text'>Jaclynn’s wandering spirit has brought her from the lush greenery of South America to the craters of Indonesia.</p>
                </div>
                <div className='box__small'>
                    <div className='denomination'>
                        <span className='indication'>fieldtested</span>
                        <span className='date'>january 19, 2017</span>
                    </div>
                    <h2 className='small__title'>How To Wear The Lounge Lunghi</h2>
                    <div className='small__image shirt'></div>
                </div>
            </div>
        </div>
        <button className='explore__button'>see the journal</button>
    </div>
}

export default Explore;