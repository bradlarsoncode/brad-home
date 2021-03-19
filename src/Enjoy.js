import React from 'react';
import videogif from './videogif.gif'
import {Link} from 'react-router-dom';

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
                                <img className="tvstyle" src={videogif} /> 
                            </div> 
                            {/* <p className="watchon">Microwaves, Zune, LaserDisc players, and</p><br/>
                            <p className="watchon">more.</p> */}

                         </div>
                </div>
    }
}

export default Enjoy