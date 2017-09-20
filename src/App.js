import React, { Component } from 'react';
import logo from './icons/logo.svg';
import './styles/App.css';
import styled from 'styled-components';
import cn from "classnames"
import ThemeProvider from 'react-theme-provider';

  // Define our button, but with the use of props.theme this time
  const Button = styled.button`
  	font-size: 1em;
  	margin: 1em;
  	padding: 0.25em 1em;
  	border-radius: 3px;
  	color: ${props => props.theme.main};
  	border: 2px solid ${props => props.theme.main};
  `;

const InstideLabelh2 = styled.h2`
display: inline-block;
position: relative;
padding: .5em 1em;
font-style: normal;
color: #fff;
font-family: "Montserrat", serif;
font-weight: normal;
letter-spacing: 0.1em;
text-transform: uppercase;
background-color: ${props => props.theme.bglabel2};
&:after{
  right: -.05em;
  border-top: 0.5em solid rgba(8, 11, 12, 0.2);
  border-right: .5em solid transparent;
  content: " ";
position: absolute;
bottom: -.5em;
z-index: -5;
}
&:before{
  top: -.5em;
border-bottom: 0.5em solid rgba(8,11,12,0.2);
border-left: .5em solid transparent;
content: " ";
position: absolute;
left: 0;
z-index: -5;
}
`;

  const Labelh2 = styled.label`
   font-size: 1em;
   position: relative;
  &:after{
    right: -1.35em;
    content: " ";
    position: absolute;
    bottom: -1.65em;
    width: 2em;
    height: 3em;
    background-color: ${props => props.theme.bglabel};
    z-index: -8;
  }
  &:before{
    background-color: ${props => props.theme.bglabel};
    content: " ";
    position: absolute;
    width: 2em;
    height: 3em;
    top: -2em;
    left: -1.2em;
    z-index: -8;
  }
  `;

const DivMid = styled.div`
margin-top: 2em;
text-align: center;
display: inline-block;
position: relative;
padding: .8em 3em;
font-style: normal;
color: #fff;
z-index: -10;
`;

Labelh2.defaultProps = {
  theme: {
    bglabel: '#7DB376',
    bglabel2: 'blue'
  }
}

InstideLabelh2.defaultProps = {
  theme: {
    bglabel: '#7DB376',
    bglabel2: '#8ACB82'
  }
}

  // We're passing a default theme for Buttons that aren't wrapped in the ThemeProvider
  Button.defaultProps = {
  	theme: {
  		main: 'palevioletred',
      text: 'abc'
  	}
  }

  // Define what props.theme will look like
  const theme = {
  	main: 'mediumseagreen',
    text: 'something'
  };

  const blbl = {
    main: 'deepskyblue',
    text: 'oneoneone'
  };

  const w = {
    main: 'white'
  };

class App extends React.Component {

  constructor() {
    super()
    this.handleCheckBox = this.handleCheckBox.bind(this)
    this.state = {
      checked: false,
      main: 'white'
    }
  }

  handleCheckBox(e) {
    this.setState({
      checked: e.target.checked,
      main: 'white' ? 'black' : 'white'
    })
  }

  render(){
return    <div>
  <Button>DADA</Button>
  <ThemeProvider>
<input type="checkbox" onClick={this.handleCheckBox}/>
    <Button theme={blbl}>{blbl.text}</Button>
    <Button theme={theme}>{this.state.main}</Button>
    <Button theme={this.state.theme}>STATE THEME</Button>
    <DivMid>
      <Labelh2>
        <InstideLabelh2>Something</InstideLabelh2>
        </Labelh2>
    </DivMid>
  </ThemeProvider>
</div>
  }
}

export default App;
