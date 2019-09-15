import React , {Component}  from 'react';
import './bookList.css';
import Book from '../book/book';

class BookList extends Component {
    render () {
      return (
        <div className="book-list">
          <Book />
        </div>
      )
    }
  }
  
  export default BookList;
