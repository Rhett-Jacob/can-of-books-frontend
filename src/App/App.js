import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BestBooks from '../BestBooks/BestBooks';
import Profile from '../About/About.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <Header />
          <Routes>
            <Route 
              exact path="/"
              element={<BestBooks />}
            >
            </Route>
            <Route 
              exact path="/about"
              element={<Profile />}
            >
            </Route>
          </Routes>
          <Footer />
        </Router>
      </div>
    )
  }
}

export default App;
