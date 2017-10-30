import React, { Component } from 'react';
import CSharp from './icons/csharp.svg';
import Mysql from './icons/mysql.svg';
import Mongodb from './icons/mongodb.svg';
import Android from './icons/android.svg';
import Apple from './icons/apple-original.svg';
import Angular from './icons/angular.svg';
import ReactIcon from './icons/react.svg';
import Gallery from './photoComponent.js';

const oferta = {
  hah: 'OFERTA',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cursus sollicitudin ante, et dapibus mauris sodales ac. Donec semper mollis nisi vel venenatis. Vivamus urna elit, sagittis sit amet venenatis quis, porttitor non nisl. Phasellus id massa sit amet mauris scelerisque finibus et sed felis. Morbi a pretium massa. Aliquam a purus blandit, ornare odio quis, hendrerit erat. Duis hendrerit rutrum lectus quis consectetur. Aenean sed urna sit amet dui finibus gravida. Ut sed mauris commodo, cursus nulla sit amet, dictum metus. Fusce condimentum lacinia turpis, ac hendrerit orci lobortis commodo.'
}

const uslugi = {
  he: 'Usługi',
  text: 'Tutaj wymienione będą usługi świadczone przez nas'
}

const technologieList =
  [{src: CSharp, alt: 'mysql',
  text: 'Web Apps', id: '1'},
  {src: Mysql,
  text: 'Databases'},
  {src: Mongodb,
  text: 'DB'},
  {src: Android,
  text: 'Mobile Apps'},
  {src: Apple,
  text: 'Mobile Apps'},
  {src: Angular,
  text: 'Mobile Apps'},
  {src: ReactIcon,
  text: 'Mobile Apps'}]

const workProcess =
[{src: 'http://placehold.it/325x250', alt: 'something',
  text: 'Idea', id: '1'},
  {src: 'http://placehold.it/325x250', alt: 'something',
  text: 'Contact', id: '2'},
  {src: 'http://placehold.it/325x250', alt: 'something',
  text: 'Description', id: '3'},
  {src: 'http://placehold.it/325x250', alt: 'something',
  text: 'pricing', id: '4'},
  {src: 'http://placehold.it/325x250', alt: 'something',
  text: 'development', id: '5'},
  {src: 'http://placehold.it/325x250', alt: 'something',
  text: 'tests', id: '6'},
  {src: 'http://placehold.it/325x250', alt: 'something',
  text: 'deployment', id: '7'}]

class Offer extends Component{
  renderOfferDescription(){
return(
  <div>
  <div>{oferta}</div>
  <div>{uslugi}</div>
  </div>
)
  }

  renderTechnologyStack(){
      return(
        <Gallery images={technologieList} galleryName='technologyStack'/>
      );
  }

  renderWorkProcess(){
    return(
      <Gallery images={workProcess} galleryName='workProcess'/>
    );
  }

  render(){
    return(
      <div>
      {this.renderOfferDescription()}
      {this.renderTechnologyStack()}
      {this.renderWorkProcess()}
      </div>
    );
  }
}

export default Offer;
