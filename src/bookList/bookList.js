import React , {Component}  from 'react';
import './bookList.css';
import Book from '../book/book';

class BookList extends Component {
    render () {
      return (
        <main>
            <p>Here is a book List</p>
            <Book />
        </main>
      )
    }
  }
  
  export default BookList;
