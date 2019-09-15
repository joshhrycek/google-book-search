import React , {Component}  from 'react';
import './searchForm.css';

class SearchForm extends Component {
    render () {
      return (
        <div>
        <h1 className="header">Google Book Search</h1>
        <form className="book-search">
          <label className="search">Search:
          <input type="text" placeholder="Book Title"></input>
          </label>
          <label className="filter">Book Type:
          <select name="print-type">
            <option value="all">All</option>
            <option value="print">Print</option>
            <option value="ebook">E-book</option>
          </select>
          </label>
        </form>
        </div>
      )
    }
  }
  
  export default SearchForm;
