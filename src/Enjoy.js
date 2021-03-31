import React from 'react';
import videogif from './videogif.gif'
import { ExternalLink } from 'react-external-link';
import {Link} from 'react-router-dom';

function Enjoy (){

    const timeNow = new Date();
    const whichDay = timeNow.getUTCDay();
    const whatHour = timeNow.getUTCHours();
    const minutes = timeNow.getUTCMinutes();
    const seconds = timeNow.getUTCSeconds();

    return <div className="subbar"> 
                {whichDay === 3 && whatHour === 0
                ?   <Link to="/home">
                        <img src='https://webfilms-films.s3.amazonaws.com/keykey.png' className="enjoyontv" alt='key'/>
                    </Link>
                    
                :<img src='https://webfilms-films.s3.amazonaws.com/keykey.png' className="hiddenkey" alt='key'/>}
                
                    <div >   
                        <div>
                            <ExternalLink href="https://photos.app.goo.gl/oaVRuuxCvAfqoL666">
                            <img className="tvstyle" src={videogif} alt='tv gif'/> 
                            </ExternalLink>
                        </div> 
                    </div>
                    {/* {whatHour === 0 && whichDay === 3 && minutes === 0 && seconds === 0 ? window.location.reload(true) : null} */}
            </div>
}


export default Enjoy