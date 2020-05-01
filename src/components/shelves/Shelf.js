import React from "react";
import PropTypes from "prop-types";
import Book from "../common/Book";

const Shelf = (props) => {
  const { shelf, books, updateOptions, onBookUpdate } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}><Book book={book} updateOptions={updateOptions} onBookUpdate={onBookUpdate} /></li>
          ))}
        </ol>
      </div>
    </div>
  );
}

Shelf.propTypes = {
  shelf: PropTypes.object.isRequired,
  updateOptions: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  onBookUpdate: PropTypes.func.isRequired,
};

export default Shelf;