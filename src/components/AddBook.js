import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Debounce } from "react-throttle";
import * as BooksAPI from "../BooksAPI";
import PropTypes from "prop-types";
import Book from "./Book";

class AddBook extends Component {
  state = {
    booksResult: [],
  };

  clearSearch = () => {
    this.setState({ booksResult: [] });
  };

  handleSearchChange = (e) => {
    BooksAPI.search(e.target.value).then((booksResult) => {
        // map the shelves' books and, if they are in the books' result,
        // update the result with the proper shelf
        this.props.books.map((book) =>
          booksResult.filter((booksResult) => booksResult.id === book.id)
            .map((booksResult) => (booksResult.shelf = book.shelf))
        );
        this.setState({ booksResult: booksResult });
      }).catch((err) => {
        this.clearSearch();
      });
  };

  render() {
    const { shelves, onShelfChange } = this.props;
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
        <div className="search-books-results">
          {this.state.booksResult.map((book) => (
            <ol key={book.id}><Book book={book} shelves={shelves} onShelfChange={onShelfChange} /></ol>
          ))}
        </div>
      </div>
    );
  }
}

AddBook.propTypes = {
  books: PropTypes.array.isRequired,
  shelves: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired,
};

export default AddBook;
