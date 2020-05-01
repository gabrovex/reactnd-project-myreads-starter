import React, { Component } from "react";
import { Route } from "react-router-dom";
import Shelves from "./components/shelves/Shelves";
import Search from "./components/search/Search";
import * as BooksAPI from "./components/common/BooksAPI";
import "./App.css";

const shelves = [
  {
    id: "currentlyReading",
    name: "Currently Reading",
    isVisible: true,
  },
  {
    id: "wantToRead",
    name: "Want to Read",
    isVisible: true,
  },
  {
    id: "read",
    name: "Read",
    isVisible: true,
  },
  {
    id: "none",
    name: "None",
    isVisible: false,
  },
];

class BooksApp extends Component {

  state = {
    books: [], // contains the books in our shelves
    bookResults: [], // contains the books of the search result
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  updateBooks = (bookToUpdate, shelf) => {
    BooksAPI.update(bookToUpdate, shelf).then(() => {
      this.setState((state) => ({
        books: this.updateBooksState(state.books, bookToUpdate.id, shelf),
        bookResults: this.updateBooksState(state.bookResults, bookToUpdate.id, shelf),
      }));
    });
  };

  // return the array of books updated with the proper shelf
  updateBooksState = (books, bookToUpdateID, shelf) =>
    (books.map(book => (book.id === bookToUpdateID ? { ...book, shelf } : book)));

  updateBookResults = (bookResults) => {
    this.setState({ bookResults });
  };

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <Shelves shelves={shelves} books={this.state.books} onBookUpdate={this.updateBooks} />
          )}
        />
        <Route exact path="/search" render={() => (
            <Search
              updateOptions={shelves}
              books={this.state.books}
              bookResults={this.state.bookResults}
              onBookUpdate={this.updateBooks} 
              onSearchChange={this.updateBookResults} 
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;