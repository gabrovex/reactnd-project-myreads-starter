import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "../common/Book";

class Shelf extends Component {
  
  render() {
    const { shelf, books, shelves, onBookUpdate } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id}><Book book={book} shelves={shelves} onBookUpdate={onBookUpdate} /></li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

Shelf.propTypes = {
  shelf: PropTypes.object.isRequired,
  shelves: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  onBookUpdate: PropTypes.func.isRequired,
};

export default Shelf;
