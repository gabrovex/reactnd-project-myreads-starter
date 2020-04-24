import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "../common/Book";

class SearchResults extends Component {
  render() {
    const { updateOptions, onBookUpdate, bookResults } = this.props;
    return (
      <div className="search-books-results">
        {bookResults.map((book) => (
          <ol key={book.id}>
            <Book book={book} updateOptions={updateOptions} onBookUpdate={onBookUpdate} />
          </ol>
        ))}
      </div>
    );
  }
}

SearchResults.propTypes = {
  bookResults: PropTypes.array.isRequired,
  updateOptions: PropTypes.array.isRequired,
  onBookUpdate: PropTypes.func.isRequired,
};

export default SearchResults;
