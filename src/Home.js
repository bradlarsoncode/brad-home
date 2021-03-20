import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
        return (         
            <div id='homeBG'>
                <div id="parchment">
                    <div id='contain'>
                        <div className="typewriter">
                            <h1>Know Your Place.</h1>
                        </div>
                            <span>
                                <Link to="/pieces">
                                    <img src="https://webfilms-films.s3.amazonaws.com/place/door-1.png" id='btn1' alt='door'></img>       
                                </Link> 
                            </span>
                    </div>
                    <img className='stroke' src='https://webfilms-films.s3.amazonaws.com/place/stroke.png' alt='stroke'/> 
                </div>
            </div>
    )
}