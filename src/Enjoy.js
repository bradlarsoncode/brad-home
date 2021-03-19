import React from 'react';
import videogif from './videogif.gif'
import { ExternalLink } from 'react-external-link';
class Enjoy extends React.Component {

    render() {
        return <div className="subbar"> 
        {/* <Link to="/home"> */}
            <img src='https://webfilms-films.s3.amazonaws.com/keykey.png' className="enjoyontv"/>
        {/* </Link> */}
                    {/* <h2 className="enjoyontv">Enjoy on your TV.</h2> */}
                        <div >   
                            {/* <p className="watchon">Watch on WebTV, TurboGrafx-16, </p><br/> */}
                            <div>
                                <ExternalLink href="https://photos.app.goo.gl/oaVRuuxCvAfqoL666">
                                <img className="tvstyle" src={videogif} /> 
                                </ExternalLink>
                            </div> 
                            {/* <p className="watchon">Microwaves, Zune, LaserDisc players, and</p><br/>
                            <p className="watchon">more.</p> */}

                         </div>
                </div>
    }
}

export default Enjoy