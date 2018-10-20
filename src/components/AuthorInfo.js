import React, { Component } from 'react';

class AuthorInfo extends Component {
  
  render() {
    if (this.props.clickedAuthor) {
      return(
        <div className="center">
          <h2>Images from {this.props.clickedAuthor}</h2>
        </div>
      );
    }
    
    return (<div></div>)
  }
}

export default AuthorInfo;