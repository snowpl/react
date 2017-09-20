import React, { Component } from 'react';

class Gallery extends Component{
  constructor(){
    super();

  }

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
    images: React.PropTypes.arrayOf(React.PropTypes.shape({
          src : React.PropTypes.string,
          alt: React.PropTypes.string,
          text: React.PropTypes.string,
          id: React.PropTypes.number,
          href: React.PropTypes.string,
          header: React.PropTypes.string
        })),
    galleryName: React.PropTypes.string
};

export default Gallery;
