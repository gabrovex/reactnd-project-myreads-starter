import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Debounce } from "react-throttle";
import PropTypes from "prop-types";

class SearchBar extends Component {

  clearSearch = () => {
    this.setState({ bookResults: [] });
  };

  handleSearchChange = (e) => {
    this.props.onSearchChange(e.target.value)
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="add-contact"><button className="close-search">Close</button></Link>
          <div className="search-books-input-wrapper">
            {/* wait 300ms before triggering onChange to avoid too many request  */}
            <Debounce time="300" handler="onChange">
              <input onChange={this.handleSearchChange} type="text" placeholder="Search by title or author" />
            </Debounce>
          </div>
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
};

export default SearchBar;
