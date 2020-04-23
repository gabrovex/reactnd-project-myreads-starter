import React, {Component} from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import ShelfSelector from './ShelfSelector';

class Book extends Component {
  render() {
    const {book, shelves, onShelfChange} = this.props;
    return (
        <div className="book">
          <div className="book-top">

            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks && book.imageLinks.thumbnail}")` }}></div>
            <ShelfSelector shelves={shelves} book={book} onShelfChange={onShelfChange}/>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
        </div>
    )
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  shelves: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired
}

export default Book
