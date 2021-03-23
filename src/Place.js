import React from 'react';
import Video from './Video';
import Nav from './Nav';
import './Place.css';

export default function Place() {
    return (
        <div className='videobg'>
            <Nav/>
            <Video/>
            <p className='instructions'>You may have permission issues with your camera or audio if you didn't use 'https'. The 's' matters.</p>
        </div>
    )
}