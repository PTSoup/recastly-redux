import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
// move to store
    this.state = {
      value: ''
    };
  }

  // move to reducer
  handleInputChange(e) {
    this.props.handleSearchInputChange(e.target.value);
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          // state thru store
          value={this.state.value}
          /* subscription */
          onChange={this.handleInputChange.bind(this)}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

export default Search;
