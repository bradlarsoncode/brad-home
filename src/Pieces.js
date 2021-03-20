import React from 'react';
import Gallery from 'react-photo-gallery';
import { photos } from "./Photos";
import { SRLWrapper } from "simple-react-lightbox";
import './Place.css';
import Nav from './Nav'

// const customCaptions = [
//   { id: 0, caption: "I wanted to make this in order to fullfill my desire to reach out to others" },
//   { id: 1, caption: "captionTwo" },
//   { id: 2, caption: "captionThree" },
//    { id: 3, caption: "captionf" },
//   { id: 4, caption: "captionfive" },
//   { id: 5, caption: "captionsix" },
//    { id: 6, caption: "caption7" }
// ]
function Pieces() {

  return (
    <div className='piecesbg'>
      <Nav />
      <div className='pieces'>
        <SRLWrapper >
            <Gallery photos={photos} className='photoscont'/>
        </SRLWrapper> 
      </div>
    </div>
  );
}

export default Pieces;