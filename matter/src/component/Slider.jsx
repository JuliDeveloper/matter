import React from 'react';
import './Slider.css'

function Slider() {
    return <div className='slider'>
        <input type="radio" name="slider" id="slider1" checked/>
        <input type="radio" name="slider" id="slider2"/>
        
        <div className='slider__list_container'>
            <ul className='slider__list'>
                <li className='slider__item'>
                    <h2>Apparels</h2>
                    <p>White Gold began gaining popularity in the early 1900’s as an alternative to platinum.</p>
                    <img className='item__image one' src="../images/1.jpg" alt=""/>
                </li>
                <li className='slider__item'>
                    <h2>Pants</h2>
                    <p>Apparels</p>
                    <img className='item__image two' src="../images/2.jpg" alt=""/>
                </li>
            </ul>
        </div>

        <label for="slide1" class="slider__prev slider__prev-one"></label>
        <label for="slide2" class="slider__prev slider__prev-two"></label>

        <label for="slide1" class="slider__next slider__next-one"></label>
        <label for="slide2" class="slider__next slider__next-two"></label>

        <div class="slider__pagination">
            <label class="slider__dotted slider__dotted--one" for="slide1"></label>
            <label class="slider__dotted slider__dotted--two" for="slide2"></label>
        </div>
    </div>
}

export default Slider;