import React, { useState } from 'react'
import './Video.css'
import { Jutsu } from 'react-jutsu'

const Video = () => {
  // const [room, setRoom] = useState('knowyourplace03232021');
  // const [name, setName] = useState('YourName');
  const room = 'knowyourplace03232021';
  const name = 'YourName';
  const [call, setCall] = useState(false);

  const handleClick = event => {
    event.preventDefault();
    if (room && name) setCall(true);
  };

  return call ? (
      <Jutsu
        roomName={room}
        displayName={name}
        containerStyles={{ display: 'block', width: '1200px', height: '800px', margin: 'auto', right: 'auto'}}
        onMeetingEnd={() => console.log('Meeting has ended')}
        loadingComponent={<p>loading ...</p>}
        errorComponent={<p>Oops, something went wrong</p>} />
    ) : (
          <button onClick={handleClick} type='submit' className='joinbutton'>
            <img src='https://webfilms-films.s3.amazonaws.com/place/464-4646065_typewritter-typewriter-with-paper-png-transparent-png+copy.png' alt='typewriter'/>
          </button>
  )
}

export default Video