import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "../common/Book";

class SearchResults extends Component {
  render() {
    const { shelves, onBookUpdate, bookResults } = this.props;
    return (
      <div className="search-books-results">
        {bookResults.map((book) => (
          <ol key={book.id}>
            <Book book={book} shelves={shelves} onBookUpdate={onBookUpdate} />
          </ol>
        ))}
      </div>
    );
  }
}

SearchResults.propTypes = {
  bookResults: PropTypes.array.isRequired,
  shelves: PropTypes.array.isRequired,
  onBookUpdate: PropTypes.func.isRequired,
};

export default SearchResults;
