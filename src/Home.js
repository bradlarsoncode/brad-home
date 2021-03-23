import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import $ from 'jquery';

export default function Home() {

    $(function () {
        $("#parchment").mousemove(function (e) {
            $(".cursor").show().css({
                "left": e.clientX-120,
                "top": e.clientY-30
                
            });
        }).mouseout(function () {
            $(".cursor").hide();
        });
    });
        return (         
            <div id='homeBG'>
                <div id="parchment"><img src='https://webfilms-films.s3.amazonaws.com/keykey.png' alt='key' className='cursor'/>
                    <div id='contain'>
                        <div className="typewriter">
                            <h1>Know Your Place.</h1>
                        </div>
                            <span>
                                
                                <Link to="/pieces" id='door'>
                                    <img src="https://webfilms-films.s3.amazonaws.com/place/door-1.png" id='btn1' alt='door'></img>       
                                </Link> 
                            </span>
                    </div>
                    <img className='stroke' src='https://webfilms-films.s3.amazonaws.com/place/stroke.png' alt='stroke'/> 
                </div>
            </div>
    )
}