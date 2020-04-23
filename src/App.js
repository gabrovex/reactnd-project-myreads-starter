import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom'
import Shelf from './components/Shelf';
import AddBook from './components/AddBook';
import * as BooksAPI from './BooksAPI';
import './App.css';


const shelves = [
  {
    id: 'currentlyReading',
    name: 'Currently Reading',
    isVisible: true,
  },
  {
    id: 'wantToRead',
    name: 'Want to Read',
    isVisible: true,
  },
  {
    id: 'read',
    name: 'Read',
    isVisible: true,
  },
  {
    id: 'none',
    name: 'None',
    isVisible: false,
  },  
]

class BooksApp extends Component {
  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  getBooksByShelfId = (shelfId) => (
      this.state.books.filter(book => book.shelf === shelfId)
  )
  
  updateBooks = (updatedBook) => {
    this.setState((state)=>({
      // get all the books but the outdated one, and concat the updated one
      books: state.books.filter((book) => book.id !== updatedBook.id).concat(updatedBook)
    }))
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/search' render={() =>
          <AddBook shelves={shelves} books={this.state.books} onShelfChange={this.updateBooks} />}
        />
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {shelves.filter(shelf => shelf.isVisible).map((shelf) => {
                  return <Shelf key={shelf.id} shelf={shelf} books={this.getBooksByShelfId(shelf.id)} shelves={shelves} onShelfChange={this.updateBooks} />
                })}
              </div>
            </div>
            <div className="open-search">
            <Link to='/search' className='add-contact'><button>Add a book</button></Link>
            </div>
          </div>
          )}/>
      </div>
    )
  }
}

export default BooksApp
