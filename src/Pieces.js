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
// ];

const options = {
  settings: {
    overlayColor: "rgb(25, 136, 124)",
  },
  buttons: {
    backgroundColor: "#1b5245",
    iconColor: "rgba(126, 172, 139, 0.8)",
  },
  
caption: {
  captionAlignment: 'start',
  captionColor: '#FFFFFF',
  captionContainerPadding: '20px 0 30px 0',
  captionFontFamily: 'inherit',
  captionFontSize: 'inherit',
  captionFontStyle: 'inherit',
  captionFontWeight: 'inherit',
  captionTextTransform: 'inherit',
  showCaption: true
}, 
};

function Pieces() {

  return (
    <div className='piecesbg'>
      <Nav />
      <div className='pieces'>
        <SRLWrapper 
        // customCaptions={customCaptions}
        options={options}
        >
            <Gallery photos={photos} className='photoscont'/>
        </SRLWrapper>
      </div>
    </div>
  );
}

export default Pieces;

