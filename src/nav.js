import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '80px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
    top: '6em'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    fontSize: '1.15em',
    overflow: 'none'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    padding: '6em 0 0 0',
    'text-decoration': 'none'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

class Nav extends React.Component {
  showSettings (event) {
    event.preventDefault();

  }

  render () {
    return (
      <Menu width={'180px'} noOverlay styles={styles}>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">Oferta</a>
        <a id="portfolio" className="menu-item" href="/portfolio">portfolio</a>
        <a id="team" className="menu-item" href="/team">zespół</a>
        <a id="blog" className="menu-item" href="/blog">blog</a>
        <a id="contact" className="menu-item" href="/contact">kontakt</a>

      </Menu>
    );
  }
}

export default Nav;
