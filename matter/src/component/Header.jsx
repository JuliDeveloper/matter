import React from 'react';
import './Header.css';

function Header() {
    return <div className='header'>
        <div className='info'>Free shipping for orders above USD 150</div>
        <div className='navigation'>
            <span className='logo'></span>
            <ul className='nav'>
                <li className='nav__item one'>shop
                    <ul className='menu'>
                        <li className='menu-item'>Apparels
                            <ul className='submenu'>
                                <li className='submenu__item'>pants
                                    <ul className='dropdown-menu'>
                                        <li className='dropdown-menu__item'>Sideswept Dhoti</li>
                                        <li className='dropdown-menu__item'>Lounge Longhi</li>
                                        <li className='dropdown-menu__item'>Side Longhi</li>
                                        <li className='dropdown-menu__item'>Modern Mope</li>
                                        <li className='dropdown-menu__item'>Easy Dhoti</li>
                                        <li className='dropdown-menu__item'>Classic Wideleg</li>
                                    </ul>
                                </li>
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
                                <li className='submenu__item'>gift cards</li>
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
                <li className='nav__item two'>fabric</li>
                <li className='nav__item three'>journal</li>
                <li className='nav__item four'>about</li>
            </ul>
            <div className='personal'>
                <div className='profile'>
                    <span className='user'>welcom, Alex</span>
                    <span className='avatar'></span>
                </div>
                <button className='login'>login</button>
                <button className='button search'></button>
                <button className='button likes'></button>
                <button className='button bag'></button>
            </div>
        </div>
    </div>
}

export default Header;