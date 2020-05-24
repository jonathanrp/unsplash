import React, { Component } from 'react';
import SearchBar from '../../components/SearchBar';
import Image from './Image';

class SearchImage extends Component  {

  onSearchSubmit = (term) => {
    const { searchImagesBy } = this.props;
    searchImagesBy(term);
  }

  render() {
    const { images } = this.props;
    return (
      <div>
        SEARCH IMAGE VIEW:
        <SearchBar userSubmit={this.onSearchSubmit}/>
        {this.props.fetching && <div>LOADING</div>}
        {images && images.map(img => (
          <Image id={img.id} desc={img.alt_description} url={img.urls.thumb} likes={img.likes} />
        ))}
      </div>
    )
  }
}

export default SearchImage;