import React from 'react';
import Enjoy from './Enjoy';
import './Splash.css';
import { ExternalLink } from 'react-external-link';

// import banner from './banner.png';
import logo from './logo.png'

class Splash extends React.Component {
    render(){
        const birthday = true
        console.log(birthday === true)
        return(
            <div className="blackbg">
                <div className="wrapper">
                    <div className="banner">
                        <img className="logo" src={logo}/>
                        
                        <a href="/login" >
                            <input className="sign-in-button"
                                type="submit" value="Sign In" />
                        </a>
                        <h1 className="unlimited">Unlimited movies, films,<br />
                            flicks, and more</h1>
                           
                                {/* <form className="sign-up"> */}
                                    <ExternalLink href="https://bradlarsoncode.github.io/Peace/">
                                            <button className="free">TRY 30 DAYS FREE</button>
                                    </ExternalLink>
                                {/* </form>  */}
                    
                        <p className="ready">Ready to watch? Click below to create or restart your membership.</p>
                        <h2 className="watch-anywhere">Watch anywhere. Cancel anytime.</h2>   
                    </div>
                    <div>
                        <Enjoy />
                    </div>
                </div>
                {/* <footer className="footfoot">
                    <div className="splashfooter">
                        <p className="splashfootertop">Hiring?</p>
                        <a href="https://www.linkedin.com/in/bradlarsoncode" target="_blank" className="splashfooteritems">LinkedIn</a>
                        <a href="https://github.com/bradlarsoncode/Webfilms" target="_blank" className="splashfooteritems">GitHub</a>
                        <a href="https://angel.co/u/brad-larson-4" target="_blank" className="splashfooteritems">AngelList</a>
                        <a href="http://www.bradlarson.me" target="_blank" className="splashfooteritems">Portfolio</a>
                    </div>
                </footer>    */}
            </div>
        )
    }
}

export default Splash