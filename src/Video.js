import React, { useState } from 'react'
import './Video.css'
import { Jutsu } from 'react-jutsu'

const Video = () => {
  const [room, setRoom] = useState('knowyourplace03232021');
  const [name, setName] = useState('Name');
  const [call, setCall] = useState(false);

  const handleClick = event => {
    event.preventDefault();
    if (room && name) setCall(true);
  };

  return call ? (
    <Jutsu className='video'
      roomName={room}
      displayName={name}
      containerStyles={{ width: '1200px', height: '800px' }}
      onMeetingEnd={() => console.log('Meeting has ended')}
      loadingComponent={<p>loading ...</p>}
      errorComponent={<p>Oops, something went wrong</p>} />
  ) : (
      <button onClick={handleClick} type='submit'>
        Join Group Video Chat
      </button>
  )
}

export default Video

// import React, { useState } from 'react'

// import { Jutsu } from 'react-jutsu'

// const Video = () => {
//   const [room, setRoom] = useState('')
//   const [name, setName] = useState('')
//   const [call, setCall] = useState(false)
//   const [password, setPassword] = useState('')

//   const handleClick = event => {
//     event.preventDefault()
//     if (room && name) setCall(true)
//   }

//   return call ? (
//     <Jutsu
//       roomName={room}
//       displayName={name}
//       password={password}
//       onMeetingEnd={() => console.log('Meeting has ended')}
//       loadingComponent={<p>loading ...</p>}
//       errorComponent={<p>Oops, something went wrong</p>} />
//   ) : (
//     <form>
//       <input id='room' type='text' placeholder='Room' value={room} onChange={(e) => setRoom(e.target.value)} />
//       <input id='name' type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
//       <input id='password' type='text' placeholder='Password (optional)' value={password} onChange={(e) => setPassword(e.target.value)} />
//       <button onClick={handleClick} type='submit'>
//         Start / Join
//       </button>
//     </form>
//   )
// }

// export default Video