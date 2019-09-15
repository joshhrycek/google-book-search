import React , {Component}  from 'react';
import './App.css';
import SearchForm from './searchForm/searchForm';
import BookList from './bookList/bookList';


class App extends Component {
  render () {
    return (
      <main>
        <SearchForm />
        <BookList />
      </main>
    )
  }
}

export default App;