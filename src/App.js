import React, { Component } from "react";
import { Route } from "react-router-dom";
import Shelves from "./components/Shelves";
import AddBook from "./components/AddBook";
import * as BooksAPI from "./BooksAPI";
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

  updateBooks = (updatedBook) => {
    this.setState((state) => ({
      // get all the books but the outdated one, and concat the updated one
      books: state.books.filter((book) => book.id !== updatedBook.id).concat(updatedBook),
    }));
  };

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <Shelves shelves={shelves} books={this.state.books} onShelfChange={this.updateBooks} />
          )}
        />
        <Route exact path="/search" render={() => (
            <AddBook shelves={shelves} books={this.state.books} onShelfChange={this.updateBooks} />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
