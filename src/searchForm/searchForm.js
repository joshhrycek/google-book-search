import React , {Component}  from 'react';
import './searchForm.css';
import SearchBar from '../searchBar/searchBar';
import FilterBar from '../filterBar/filterBar';

class SearchForm extends Component {
    render () {
      return (
        <main>
          <SearchBar />
          <FilterBar />
        </main>
      )
    }
  }
  
  export default SearchForm;
