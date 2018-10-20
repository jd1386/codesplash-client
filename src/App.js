import React, { Component } from 'react';
import './App.css';
import AuthorInfo from './components/AuthorInfo';
import Images from './components/Images';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedAuthor: ''
    }
    this.handleClickedAuthor = this.handleClickedAuthor.bind(this);
  }

  handleClickedAuthor(authorName) {
    console.log(authorName);
    
    this.setState({
      clickedAuthor: authorName
    })
  }

  render() {
    return (
      <div>
        <header className="App-header"><a href="/">Codesplash</a></header>
        <AuthorInfo clickedAuthor={this.state.clickedAuthor}/>
        <Images handleClickedAuthor={this.handleClickedAuthor} />
      </div>
    );
  }
}

export default App;
