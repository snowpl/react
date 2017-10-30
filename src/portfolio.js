import React from 'react';
import Gallery from './photoComponent.js';

const PorftolioImg = [
{
  src: 'http://placehold.it/325x250', alt: 'websites',
  text: 'websites', id: '1'
},
{
  src: 'http://placehold.it/325x250', alt: 'graphics',
  text: 'Grafika', id: '2'
},
{
  src: 'http://placehold.it/325x250', alt: 'mobile-apps',
  text: 'Aplikacje mobilne', id: '3'
},
{
  src: 'http://placehold.it/325x250', alt: 'animations',
  text: 'Animacje', id: '4'
},
{
  src: 'http://placehold.it/325x250', alt: 'movies',
  text: 'Filmy reklamowe', id: '5'
}]

class Porftolio extends React.Component{
  render(){
    return(
      <div>
      <h2>Portfolio</h2>
      <Gallery images={PorftolioImg}  galleryName='portfolio'/>
      </div>
    );
  }

}

export default Porftolio;
