import React from 'react';
import videogif from './videogif.gif'
import { ExternalLink } from 'react-external-link';
import {Link} from 'react-router-dom';

function Enjoy (){
    // dateCheck(){
    //         const today = new Date();
    //             if(today.getDay() === 2 && today.getHours() === 19){
    //                 return true;
    //             }
    //         return false;
    //     }

    const timeNow = new Date();
    const whichDay = timeNow.getDay();
    const whatHour = timeNow.getHours();

    return <div className="subbar">
                {whichDay === 2 && whatHour === 20
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
                    
            </div>
}


export default Enjoy