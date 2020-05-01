import React from "react";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";


const Search  = (props) => {
  const { updateOptions, onBookUpdate, onSearchChange, bookResults, books } = props;
  return (
    <div className="search-books">
      <SearchBar onSearchChange={onSearchChange} books={books} />
      <SearchResults bookResults={bookResults} updateOptions={updateOptions} onBookUpdate={onBookUpdate} />
    </div>
  );
}

Search.propTypes = {
  books: PropTypes.array.isRequired,
  updateOptions: PropTypes.array.isRequired,
  onBookUpdate: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default Search;
