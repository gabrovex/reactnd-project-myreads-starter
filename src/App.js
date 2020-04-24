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
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  updateBooks = (bookToUpdate, shelfId) => {
    BooksAPI.update(bookToUpdate, shelfId).then(() => {
      bookToUpdate.shelf = shelfId;
      this.setState((state) => ({
        // get all the books but the outdated one, and concat the updated one
        books: state.books.filter((book) => book.id !== bookToUpdate.id).concat(bookToUpdate),
      }));
    });
  };

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <Shelves shelves={shelves} books={this.state.books} onBookUpdate={this.updateBooks} />
          )}
        />
        <Route exact path="/search" render={() => (
            <Search updateOptions={shelves} books={this.state.books} onBookUpdate={this.updateBooks} />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
