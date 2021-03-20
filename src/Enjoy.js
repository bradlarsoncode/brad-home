import React from 'react';
import videogif from './videogif.gif'
import { ExternalLink } from 'react-external-link';
import {Link} from 'react-router-dom';
class Enjoy extends React.Component {
    render() {
        return <div className="subbar"> 
                    {/* <Link to="/home"> */}
                        <img src='https://webfilms-films.s3.amazonaws.com/keykey.png' className="enjoyontv" alt='key'/>
                    {/* </Link> */}
                        <div >   
                            <div>
                                <ExternalLink href="https://photos.app.goo.gl/oaVRuuxCvAfqoL666">
                                <img className="tvstyle" src={videogif} alt='tv gif'/> 
                                </ExternalLink>
                            </div> 
                        </div>
                </div>
    }
}

export default Enjoy