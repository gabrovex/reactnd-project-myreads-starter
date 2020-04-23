import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Shelf from "./Shelf";

class Shelves extends Component {
  
  getBooksByShelfId = (shelfId) =>
    this.props.books.filter((book) => book.shelf === shelfId);

  render() {
    const { shelves, onShelfChange } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelves.filter((shelf) => shelf.isVisible).map((shelf) => (
                <Shelf
                  key={shelf.id}
                  shelf={shelf}
                  books={this.getBooksByShelfId(shelf.id)}
                  shelves={shelves}
                  onShelfChange={onShelfChange}
                />
              ))}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search" className="add-contact"><button>Add a book</button></Link>
        </div>
      </div>
    );
  }
}

Shelf.propTypes = {
  shelves: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired,
};

export default Shelves;