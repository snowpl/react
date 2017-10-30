import React, { Component } from 'react';
//import { render } from 'react-dom';
import styled, { ThemeProvider } from 'styled-components';
import './styles/home-page.css';
import BulbOn from './icons/light_on.svg';
import BulbOff from './icons/light_off.svg';
import Gallery from './photoComponent.js';
import Kacper from './img/me.jpg';
import DickButt from './img/db.jpg';
import {Tabs, Pane} from './tabs.js';
import Oferta from './offer.js';
import Porftolio from './portfolio.js';
import HomeIcon from './icons/menu/home.svg';
import BlogIcon from './icons/menu/blog.svg';
import ContactIcon from './icons/menu/kontakt.svg';
import OfferIcon from './icons/menu/oferta.svg';
import PortfolioIcon from './icons/menu/portfolio.svg';
import TeamIcon from './icons/menu/team.svg';
import HomeIconDark from './icons/menu/home-dark.svg';
import BlogIconDark from './icons/menu/blog-dark.svg';
import ContactIconDark from './icons/menu/kontakt-dark.svg';
import PortfolioIconDark from './icons/menu/portfolio-dark.svg';
import OfferIconDark from './icons/menu/oferta-dark.svg';
import TeamIconDark from './icons/menu/team-dark.svg';
import BGLight from './img/bg-light.png';
import BGDark from './img/bg-dark.png';
import MobileAppsIcon from './icons/homePage/aplikacje-mobilne.svg';
import CMSIcon from './icons/homePage/cms.svg';
import RespIcon from './icons/homePage/responsywnosc.svg';
import ShopIcon from './icons/homePage/sklep.svg';
import MobileAppsIconDark from './icons/homePage/aplikacje-mobilne-dark.svg';
import CMSIconDark from './icons/homePage/cms-dark.svg';
import RespIconDark from './icons/homePage/responsywnosc-dark.svg';
import ShopIconDark from './icons/homePage/sklep-dark.svg';

const IMAG1 = [
{src: 'http://placehold.it/325x250', alt: 'something', text: 'blabla', id: '1'},
{src: DickButt, alt: 'something', text: 'text2', id: '2'}]

const IMAG2 = [
{src: Kacper, alt: 'something', text: 'Programowanie', id: '1'},
{src: 'http://placehold.it/325x250', alt: 'something', text: 'Grafika', id: '2'},
{src: 'http://placehold.it/325x250', alt: 'something', text: 'Programowanie', id: '3'},
{src: 'http://placehold.it/325x250', alt: 'something', text: 'Testowanie', id: '4'},
{src: 'http://placehold.it/325x250', alt: 'something', text: 'Animacje', id: '5'},
{src: 'http://placehold.it/325x250', alt: 'something', text: 'Kamera/Montaż', id: '6'},
{src: 'http://placehold.it/325x250', alt: 'something',text: 'Reżyseria', id: '7'}]

const homePageGal = [
  {src: RespIcon, alt: 'RWD WWW', text: 'Responsywne strony internetowe. Od prostych wizytówek po zaawansowane aplikacje webowe.', id: '1', header: 'responsywne strony www'},
  {src: ShopIcon, alt: 'Online Shops', text: 'Sklepy internetowe dla najbardziej wymagających', id: '2', header: 'sklepy internetowe'},
  {src: MobileAppsIcon, alt: 'Mobile Applications', text: 'Mobilne aplikacje na systemy IOS i android.', id: '3', header: 'aplikacje mobilne'},
  {src: CMSIcon, alt: 'CMS Systems', text: 'Łatwe i przyjazne w obsłudze systemy CMS', id: '4', header: 'systemy CMS'},
]

const  homePageGalNM = [
  {src: RespIconDark, alt: 'RWD WWW', text: 'Responsywne strony internetowe. Od prostych wizytówek po zaawansowane aplikacje webowe.', id: '1', header: 'responsywne strony www'},
  {src: ShopIconDark, alt: 'Online Shops', text: 'Sklepy internetowe dla najbardziej wymagających', id: '2', header: 'sklepy internetowe'},
  {src: MobileAppsIconDark, alt: 'Mobile Applications', text: 'Mobilne aplikacje na systemy IOS i android.', id: '3', header: 'aplikacje mobilne'},
  {src: CMSIconDark, alt: 'CMS Systems', text: 'Łatwe i przyjazne w obsłudze systemy CMS', id: '4', header: 'systemy CMS'},
]

const themes = {
  'light': {
    main: '#EFEFEF',
    image: BGLight,
    offerIcon : OfferIcon
  },
  'dark': {
    main: '#666',
    image: BGDark,
    offerIcon : OfferIconDark
  }
}

const DynamicDiv = styled.div`
  background: ${({ theme }) => theme.main};
  background-image: url(${({ theme }) => theme.image});
`

class NightMode extends Component {
  constructor() {
    super();
    this.state = {
      theme: 'light',
    };
  }

  changeTheme = theme => event => {
    this.setState({ theme })
  }

  render() {
    let btnm = null;
    let gallery = null;
    let homie = null;
    let homeGallery = null;
    let oferta = null;
    let kontakt = null;
    let portfolio = null;
    let team = null;
    let blog = null;
    if (this.state.theme === 'dark') {
      btnm = <div className="bulb" onClick={this.changeTheme('light')}>
      <img src={BulbOn} alt='bulb-on'/>
      </div>;
      gallery = <Gallery images={IMAG1} galleryName='gallery'/>;
      homeGallery = <Gallery images={homePageGalNM} galleryName ='homeGallery'/>;
      homie = <Pane label="home" src={HomeIconDark} link="#">
      <div className="home__content--dark"><h2>Twoja Firma Informatyczna</h2>
      <span>Nasza firma uwielbia wyzwania, podejmiemy się najtrudniejszego zadania - z tego jesteśmy znani.</span>
      <span>Wszystkie zelecenia traktujemy z pełnym zaangażowaniem i najwyższym priorytetem, najważniejsza jest satysfakcja klienta.</span>
      <span>Ofertę dzielimy na podstawowe zagadnienia IT, którymy się zajmujemy. W czym możemy Ci pomóc?</span>
       {homeGallery}</div>
      </Pane>;
      oferta = <Pane label="oferta" src={OfferIconDark} link="#">
        <Oferta/>
      </Pane>;
      kontakt = <Pane label="kontakt" src={ContactIconDark} link="#">
        <div>a</div>
      </Pane>;
      portfolio = <Pane label="portfolio" src={PortfolioIconDark} link="#">
        <Porftolio/>
      </Pane>;
      blog = <Pane label="blog" src={BlogIconDark} link="https://devonboard.wordpress.com/">
        <div>a</div>
      </Pane>;
      team = <Pane label="zespół" src={TeamIconDark} link="#">
        {gallery}
      </Pane>;
    } else {
      btnm = <div className="bulb" onClick={this.changeTheme('dark')}>
      <img src={BulbOff} alt='bulb-off'/>
      </div>;
      gallery = <Gallery images={IMAG2} galleryName='gallery'/>;
      homeGallery = <Gallery images={homePageGal} galleryName ='homeGallery'/>;
      homie = <Pane label="home" src={HomeIcon} link="#">
        <div className="home__content"><h2>Twoja Firma Informatyczna</h2>
        <span>Nasza firma uwielbia wyzwania, podejmiemy się najtrudniejszego zadania - z tego jesteśmy znani.</span>
        <span>Wszystkie zelecenia traktujemy z pełnym zaangażowaniem i najwyższym priorytetem, najważniejsza jest satysfakcja klienta.</span>
        <span>Ofertę dzielimy na podstawowe zagadnienia IT, którymy się zajmujemy. W czym możemy Ci pomóc?</span>
        {homeGallery}</div>
      </Pane>;
      oferta = <Pane label="oferta" src={OfferIcon} link="#">
        <Oferta/>
      </Pane>;

      kontakt = <Pane label="kontakt" src={ContactIcon} link="#">
        <div>a</div>
      </Pane>;
      portfolio = <Pane label="portfolio" src={PortfolioIcon} link="#">
        <Porftolio/>
      </Pane>;
      blog = <Pane label="blog" src={BlogIcon} link="https://devonboard.wordpress.com/">
        <div>a</div>
      </Pane>;
      team = <Pane label="zespół" src={TeamIcon} link="#">
        {gallery}
      </Pane>;
    }
    return (
      <ThemeProvider theme={themes[this.state.theme]}>
        <div>
          <DynamicDiv>
          {btnm}
          <Tabs selected={0}>
            {homie}
            {oferta}
            {kontakt}
            {portfolio}
            {blog}
            {team}
          </Tabs>
          <div id="navbar"></div>
          <div id="root"></div>

          </DynamicDiv>
        </div>
      </ThemeProvider>
    );
  }
}

export default NightMode;
