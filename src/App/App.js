import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BestBooks from '../BestBooks/BestBooks';
import AboutUsProfile from '../About/About.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import {withAuth0} from '@auth0/auth0-react';
import CarouselBooks from "../BestBooks/CarouselBooks/CarouselBooks";
import UserProfile from '../UserProfile/UserProfile.js';
import Loading from '../Loading/Loading.js';

class App extends React.Component {
  render() {
    console.log(this.props.auth0.user);
    return (
      <div className='app'>
        <Router>
          <Header />
          <Routes>
            <Route 
              exact path="/"
              element={this.props.auth0.isAuthenticated? 
                <BestBooks />: 
                <CarouselBooks
                  noBooks={true}
                  books={[{ title: "Login to curate your book collection!" }]}/>}>
            </Route>

            <Route 
              exact path="/user"
              element={this.props.auth0.isAuthenticated?<UserProfile />:<Loading/>}
            >
            </Route>

            <Route 
              exact path="/about"
              element={<AboutUsProfile />}
            >
            </Route>
          </Routes>
          <Footer />
        </Router>
      </div>
    )
  }
}



export default withAuth0(App);
