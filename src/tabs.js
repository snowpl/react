import React, { Component } from 'react';

export class Pane extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
        this.props.children
    )
  }
}

export class Tabs extends React.Component{
  constructor(){
    super();
    this.state ={
      selected: 0,
      tabsClass: "tabs__labels"
    }
  }

  handleClick(index, event) {
      event.preventDefault();
      this.setState({
        selected: index
      });
    }

  getInitialState(){
    return{
      selected: this.props.selected
    };
  }

  renderContent(){
    let contentName = (this.state.selected === 0);
    let classo = contentName? "tabs__content home" : "tabs__content";
    return(
      <div className={classo}>
        {this.props.children[this.state.selected]}
      </div>
    );
  }

  renderTitles(){
    function labels(child, index){
      let activeClass = (this.state.selected === index
                           ? 'active'
                           : '');
      return(
        <li className={index} key={index}>
        <figure>
          <a href={child.props.link}
          className={activeClass}
          onClick={this.handleClick.bind(this, index)}>
            <img src={child.props.src} alt= {child.props.label} />
            <figcaption>
              <div className="tabs__labels--text">{child.props.label}</div>
            </figcaption>
          </a>
          </figure>
        </li>
      );
    }

    let isHome = (this.state.selected === 0);
    let classo = isHome? "tabs__labels home" : "tabs__labels";
    return(
      <ul className={classo}>
        {this.props.children.map(labels.bind(this))}
      </ul>
    );
  }

  render(){
    return(
      <div className="tabs">
        {this.renderTitles()}
        {this.renderContent()}
      </div>
    );
  }
}

Tabs.propTypes = {
    selected: React.PropTypes.number,
    children: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.element
    ]).isRequired
  }

  Pane.propTypes = {
    label: React.PropTypes.string.isRequired,
    src: React.ProtoTypes,
    link: React.ProtoTypes,
    children: React.PropTypes.element.isRequired
  }
