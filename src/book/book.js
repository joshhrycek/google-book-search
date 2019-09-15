import React , {Component}  from 'react';
import './book.css';

//book thumbnail size is 128*199

class Book extends Component {
    render () {
      return (
      <div>
        <div className="book-result">
          <img alt='book cover'src="http://books.google.com/books/content?id=UbfnTcmkaKkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                className="book-pic"></img>
          <h2 className="title">Title</h2>
          <p>Author: Stephen King</p>
          <p>Price: $500.00</p>
          <p className='description'>This is the book description, look here at what this book is about. This is the book description, look here at what this book is about. This is the book description, look here at what this book is about.</p>
        </div>

        <div className="book-result">
        <img alt='book cover'src="http://books.google.com/books/content?id=UbfnTcmkaKkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              className="book-pic"></img>
        <h2 className="title">Title</h2>
        <p>Author: Stephen King</p>
        <p>Price: $500.00</p>
        <p className='description'>This is the book description, look here at what this book is about. This is the book description, look here at what this book is about. This is the book description, look here at what this book is about.</p>
      </div>
      </div>
      )
    }
  }
  
  export default Book;
