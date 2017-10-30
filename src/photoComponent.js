import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Gallery extends Component{

  renderImage(image){
    return(
            <li key={image.Id}>
                    <img src= {image.src} alt= {image.alt}/>
                    <h3>{image.header}</h3>
                    <span>{image.text}</span>
            </li>
          )}

  render(){
    return(
      <div className={this.props.galleryName}>
        <ul className={this.props.galleryName + '__list'}>
          {this.props.images.map(image => this.renderImage(image))}
        </ul>
      </div>
    )
  }
}

  Gallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
          src : PropTypes.string,
          alt: PropTypes.string,
          text: PropTypes.string,
          id: PropTypes.number,
          href: PropTypes.string,
          header: PropTypes.string
        })),
    galleryName: PropTypes.string
};

export default Gallery;
