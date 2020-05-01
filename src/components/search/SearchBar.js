import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Debounce } from "react-throttle";
import PropTypes from "prop-types";
import * as BooksAPI from "../common/BooksAPI";

class SearchBar extends Component {

  handleSearchChange = (e) => {
    const query = e.target.value;
    BooksAPI.search(query).then((bookResults) => {
      // map the shelves' books and, if they are in the books' result,
      // update the result with the proper shelf
      this.props.books.map((book) =>
        bookResults.filter((booksResult) => booksResult.id === book.id)
          .map((booksResult) => (booksResult.shelf = book.shelf))
      );
      this.props.onSearchChange(bookResults);
    }).catch((error) => {
      this.props.onSearchChange([]);
    });
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
  books: PropTypes.array.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default SearchBar;
