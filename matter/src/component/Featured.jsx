import React from 'react';
import './Featured.css';
import Card from './Card.jsx';


function Featured() {
    return <div className='featured'>
        <h1 className='title'>Featured</h1>
        <div className='box'>
            <Card sticker='new' title='Pueraria Mirifica And Study Phyto Estrogens' cost='$599.00'/>
            <Card sticker='new' title='Pueraria Mirifica And Study Phyto Estrogens' cost='$599.00'/>
            <Card sticker='new' title='Pueraria Mirifica And Study Phyto Estrogens' cost='$599.00'/>
            <Card title='Pueraria Mirifica And Study Phyto Estrogens' cost='$599.00'/>
            <Card sticker='new' title='Pueraria Mirifica And Study Phyto Estrogens' cost='$599.00'/>
            <Card title='Pueraria Mirifica And Study Phyto Estrogens' cost='$599.00'/>
            <Card sticker='new' title='Pueraria Mirifica And Study Phyto Estrogens' cost='$599.00'/>
            <Card title='Pueraria Mirifica And Study Phyto Estrogens' cost='$599.00'/>
        </div>
    </div>
}

export default Featured;