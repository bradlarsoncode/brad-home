import React from 'react';
import Gallery from 'react-photo-gallery';
import { photos } from "./Photos";
import { SRLWrapper } from "simple-react-lightbox";
import './Place.css';
import Nav from './Nav'

const options = {
  settings: {
    overlayColor: "#e7d8c1",
  },
  buttons: {
    backgroundColor: "rgba(0,0,0,.8)",
    iconColor: "#FFFFFF",
  },
  
caption: {
  captionAlignment: 'center',
  captionColor: '#000000',
  captionContainerPadding: '20px 200px 40px 200px',
  captionFontFamily: 'Georgia',
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
        <SRLWrapper options={options}>
            <Gallery photos={photos} className='photoscont'/>
        </SRLWrapper>
      </div>
    </div>
  );
}

export default Pieces;

