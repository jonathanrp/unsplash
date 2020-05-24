import React, { Component } from 'react';
import styled from 'styled-components';

class Image extends Component  {
  render() {
    const { likes, id, desc, url } = this.props;
    return (
      <styles.Image popular={likes > 1000}>
       <p>ID: {id}</p>
       <p>Descripción: {desc}</p>
       <p>Likes: {likes}</p>
       {this.props.likes > 1000 ? "Muy Popular" : "Poco Popular"}
       <img src={url} alt={desc} title={desc} />
      </styles.Image>
    )
  }
}

const styles = {};

styles.Image = styled.div`
 border: 1px solid grey;
 margin: 20px;
 font-family: Arial;

 ${props =>
  props.popular
    ? `
    border: 3px solid red;
  `
      : ''};

`;

export default Image;