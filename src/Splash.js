import React from 'react';
import Enjoy from './Enjoy';
import './Splash.css';
import { ExternalLink } from 'react-external-link';
import logo from './logo.png'

class Splash extends React.Component {
    render(){
        const birthday = true
        console.log(birthday === true)
        return(
            <div className="blackbg">
                <div className="wrapper">
                    <div className="banner">
                        <ExternalLink href="https://vimeo.com/444080204">
                            <img className="logo" src={logo} alt='webfilms logo'/>
                        </ExternalLink>
                        <ExternalLink href="https://photos.app.goo.gl/aCntBwLAs7CPn4Np8" >
                            <input className="sign-in-button" type="submit" value="Sign In" />
                        </ExternalLink>
                        <h1 className="unlimited">Unlimited movies, films,<br />
                            flicks, and more</h1>
                                    <ExternalLink href="https://bradlarsoncode.github.io/Peace/">
                                            <button className="free">TRY 30 DAYS FREE</button>
                                    </ExternalLink>
                        <p className="ready">Ready to watch? Click below to create or restart your membership.</p>
                        <h2 className="watch-anywhere">Watch anywhere. Cancel anytime.</h2>   
                    </div>
                    <div>
                        <Enjoy />
                    </div>
                </div>
            </div>
        )
    }
}

export default Splash