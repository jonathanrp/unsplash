import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: ''
    };
  }

  onInputChange = (event) => {
    this.setState({ val: event.target.value })
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.userSubmit(this.state.val);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          type="text"
          value={this.state.val}
          onChange={this.onInputChange}
        />
      </form>
    )
  }
}

export default SearchBar;