# MyReads Project

MyReads project, is a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. 
This is the Udacity React course first project .

## Install and start

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## App Functionality
In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

- Currently Reading
- Want to Read
- Read

Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. The default value for the control should always be the current shelf the book is in.

The main page also has a link to /search, a search page that allows you to find books to add to your library.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library.

The search page also has a link to / (the root URL), which leads back to the main page.

When you navigate back to the main page from the search page, you instantly see all of the selections you made on the search page in your library.