import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";


class Search extends Component {
  
  componentDidMount() {
    this.props.onSearchChange([]);
  }

  render() {
    const { updateOptions, onBookUpdate, onSearchChange, bookResults, books } = this.props;
    return (
      <div className="search-books">
        <SearchBar onSearchChange={onSearchChange} books={books} />
        <SearchResults bookResults={bookResults} updateOptions={updateOptions} onBookUpdate={onBookUpdate} />
      </div>
    )
  }
}

Search.propTypes = {
  books: PropTypes.array.isRequired,
  updateOptions: PropTypes.array.isRequired,
  onBookUpdate: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default Search;
