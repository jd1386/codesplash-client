import React, { Component } from 'react';

class Image extends Component {
  mouseEnter(e) {
    e.preventDefault();
    let authorName = e.target.getAttribute('authorname');
    // console.log(authorName);
  }

  render() {
    return <img className="tile" src={this.props.src} authorname={this.props.authorName} key={this.props.index} alt={this.props.alt} onMouseEnter={this.mouseEnter} onClick={this.props.handleClick} />
  }
}

export default Image;