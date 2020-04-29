import React, { Component } from "react";
import * as BooksAPI from "../common/BooksAPI";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";


class Search extends Component {
  
  state = {
    bookResults: [],
  };

  clearSearch = () => {
    this.setState({ bookResults: [] });
  };

  searchChange = (query) => {
    BooksAPI.search(query).then((bookResults) => {
        // map the shelves' books and, if they are in the books' result,
        // update the result with the proper shelf
        this.props.books.map((book) =>
          bookResults.filter((booksResult) => booksResult.id === book.id)
            .map((booksResult) => (booksResult.shelf = book.shelf))
        );
        this.setState({ bookResults: bookResults });
      }).catch(() => {
        this.clearSearch();
      });
  };

  render() {
    const { updateOptions, onBookUpdate } = this.props;
    return (
      <div className="search-books">
        <SearchBar onSearchChange={this.searchChange} />
        <SearchResults bookResults={this.state.bookResults} updateOptions={updateOptions} onBookUpdate={onBookUpdate} />
      </div>
    );
  }
}

Search.propTypes = {
  books: PropTypes.array.isRequired,
  updateOptions: PropTypes.array.isRequired,
  onBookUpdate: PropTypes.func.isRequired,
};

export default Search;
