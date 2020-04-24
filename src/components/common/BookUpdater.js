import React, { Component } from "react";
import PropTypes from "prop-types";

const DEFAULT_SHELF_ID = "none";

class BookUpdater extends Component {
  
  handleBookUpdate = (event) => {
    const { book, onBookUpdate } = this.props;
    onBookUpdate(book, event.target.value);
  };

  render() {
    const { updateOptions, book } = this.props;
    return (
      <div className="book-shelf-changer">
        <select value={book.shelf || DEFAULT_SHELF_ID} onChange={this.handleBookUpdate} >
          <option value="move" disabled>Move to...</option>
          {updateOptions.map((shelf) => (
            <option key={shelf.id} value={shelf.id}>{shelf.name}</option>
          ))}
        </select>
      </div>
    );
  }
}

BookUpdater.propTypes = {
  book: PropTypes.object.isRequired,
  updateOptions: PropTypes.array.isRequired,
  onBookUpdate: PropTypes.func.isRequired,
};

export default BookUpdater;
