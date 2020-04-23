import React, { Component } from "react";
import PropTypes from "prop-types";
import * as BooksAPI from "../BooksAPI";

const DEFAULT_SHELF_ID = "none";

class ShelfSelector extends Component {
  handleShelfChange = (event) => {
    const { book, onShelfChange } = this.props;
    const shelf = event.target.value;

    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf;
      onShelfChange(book);
    });
  };

  render() {
    const { shelves, book } = this.props;
    return (
      <div className="book-shelf-changer">
        <select value={book.shelf || DEFAULT_SHELF_ID} onChange={this.handleShelfChange} >
          <option value="move" disabled>Move to...</option>
          {shelves.map((shelf) => (
            <option key={shelf.id} value={shelf.id}>{shelf.name} </option>
          ))}
        </select>
      </div>
    );
  }
}

ShelfSelector.propTypes = {
  book: PropTypes.object.isRequired,
  shelves: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired,
};

export default ShelfSelector;
