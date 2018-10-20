import React, { Component } from 'react';
import axios from 'axios';
import Image from './Image';

class Images extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      images: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000')
      .then(res => {
        const images = res.data;
        this.setState({ images });
      })
  }

  handleClick(e) {
    let authorName = e.target.getAttribute('authorname');
    // console.log('Clicked image', authorName);
    axios.get(`http://localhost:3000/author/${authorName}`)
      .then(res => {
        this.setState({
          images: res.data
        })
      });
    
    this.props.handleClickedAuthor(authorName);
  }

  render() {
    if (!this.state.images.length) {
      // console.log(this.state.images)
      return (
        <div className="Images">
          <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>  
      )
    }
    return (
      <div className="Images">
        {this.state.images.map((image, index) => {
          return (
            <Image src={`https://picsum.photos/200/300?image=${image.id}`} authorName={image.author} key={index} alt={image.id} handleClick={this.handleClick} />
          )
        })}
      </div>
    )
  }
  
}

export default Images;