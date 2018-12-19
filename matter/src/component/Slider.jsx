import React from 'react';
import './Slider.css'

function Slider() {
    return <div className='slider'>
        <input type="radio" name="slider" id="slider1" checked/>
        <input type="radio" name="slider" id="slider2"/>
        
        <div className='slider__list_container'>
            <ul className='slider__list'>
                <li className='slider__item'>
                    <h2 className='slider__title'>Perfume Tips Tricks</h2>
                    <button className='slider__button'>shop now</button>
                    <img className='item__image one' src="" alt=""/>
                </li>
                <li className='slider__item'>
                    <h2 className='slider__title'>Perfume Tips Tricks</h2>
                    <button className='slider__button'>shop now</button>
                    <img className='item__image two' src="" alt=""/>
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