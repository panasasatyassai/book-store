import {Component} from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'; 
import './App.css';
import Home from './components/Home';
import BooksList from './components/BooksList';
import BooksDetails from './components/BooksDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import NotFound from './components/NotFound';
class App extends Component {
  render(){
    return (
       <>
        <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={Home} />
           <Route exact path='/books' Component={BooksList} />
           <Route exact path='/books/:id' Component={BooksDetails} />
           <Route exact path='/cart' Component={Cart} />
           <Route exact path='/checkout' Component={Checkout} />
           <Route exact path='/not-found' Component={NotFound} />
        </Routes>
        </BrowserRouter>
       </>
    )
  }
}


 

export default App;
