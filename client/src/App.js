import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



// JD STOP HERE




const BookContext = React.createContext({
  books: [],
  currentBook: {
    title: '',
    authors: [],
    description: '',
    image: '',
    link: ''
  },
  savedBooks: [],
  loading: false,
  searchTitle: ''
});

const [books, setBooks] = useState([]);
const [currentBook, setCurrentBook] = useState({});
const [savedBooks, setSavedBooks] = useState([]),
const [loading, setLoading] = useState(false);
const [searchTitle, setSearchTitle] = useState('');

function App() {
  return (
    <Router>
      <Nav />
      <Jumbotron />
      <BookContext.Provider value={{books, setBooks, currentBook, setCurrentBook, savedBooks, setSavedBooks, loading, setLoading, searchTitle, setSearchTitle}}></BookContext.Provider>
      <Switch>
        <Route exact path='/' component={ Search } />
        <Route exact path='/saved' component={ Saved } />
        <Route exact path='/books/:id' component ={ Detail } />
      </Switch>
    </Router>
  );
}

export default App;
