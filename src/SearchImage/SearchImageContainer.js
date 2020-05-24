import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchImagesBy } from './actions';
import SearchImage from './views';

class SearchImageContainer extends Component  {
  render() {
    const { searchImagesBy, fetching } = this.props;
    return (
      <SearchImage
        searchImagesBy={searchImagesBy}
        images={this.props.images}
        fetching={fetching}
      />
    )
  }
}

const mapStateToProps = state => ({
  images: state.images,
  fetching: state.fetching,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      searchImagesBy,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchImageContainer);