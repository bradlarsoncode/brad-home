import React from 'react';
import Video from './Video';
import Nav from './Nav';
// import Pieces from './Pieces'
import './Place.css';

export default function Place() {
    return (
        <div className='videobg'>
            <Nav/>
            <Video id='video' />
        </div>
    )
}