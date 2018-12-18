import React from 'react';
import './Header.css';

function Header() {
    return <div className='header'>
        <span className='logo'></span>
        <ul className='nav'>
            <li className='nav__item'>shop
                <ul className='menu'>
                    <li className='menu-item'>Apparels
                        <ul className='submenu'>
                            <li className='submenu__item'>pants</li>
                            <li className='submenu__item'>jumpsuits</li>
                            <li className='submenu__item'>shorts</li>
                            <li className='submenu__item'>tops</li>
                        </ul>
                    </li>
                    <li className='menu-item'>Accessories
                        <ul className='submenu'>
                            <li className='submenu__item'>necklaces</li>
                            <li className='submenu__item'>scarfs</li>
                        </ul>
                    </li>
                    <li className='menu-item'>Other
                        <ul className='submenu'>
                            <li className='submenu__item'>houseware</li>
                            <li className='submenu__item'>gift Cards</li>
                        </ul>
                    </li>
                    <li className='menu-item'>Shop by collection
                        <ul className='submenu'>
                            <li className='submenu__item'>sale/Last Call</li>
                            <li className='submenu__item'>essentials</li>
                        </ul>
                    </li>
                    <li className='menu-item'>Shop by techniques
                        <ul className='submenu'>
                            <li className='submenu__item'>block Printing</li>
                            <li className='submenu__item'>ikat</li>
                            <li className='submenu__item'>jamdani</li>
                            <li className='submenu__item'>handloom</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className='nav__item'>fabric</li>
            <li className='nav__item'>journal</li>
            <li className='nav__item'>about</li>
        </ul>
        <div></div>
    </div>
}

export default Header;