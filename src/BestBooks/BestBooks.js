import React from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import HeaderButton from "./HeaderButton/HeaderButton";
import AddBookModal from "./AddBookModal/AddBookModal";
import ErrorModal from "./ErrorModal/ErrorModal.js";
import CarouselBook from "./CarouselBooks/CarouselBooks";
import "./BestBooks.css";

let SERVER = process.env.REACT_APP_SERVER;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddBook: false,
      books: [],
      showError: false,
      errorMessage: "",
      showSpinner:false,
    };
  }

  componentDidMount() {
    axios
      .get(`${SERVER}/books`)
      .then((res) => this.setState({ books: res.data.data }))
      .catch((err) => {
        console.error(err);
        this.setState({ showError: true, errorMessage: err.message });
      });
  }

  handlerAddBook = (e) => {
    e.preventDefault();
    let bookTitle = e.target.bookTitle.value;
    let bookDescription = e.target.bookDescription.value;
    let bookStatus = e.target.bookStatus.value;

    if (bookTitle && bookDescription && bookStatus) {
      let newBook = {
        title: bookTitle,
        description: bookDescription,
        status: bookStatus,
      };
      // console.log(typeof bookTitle, typeof bookDescription, typeof bookStatus);
      let url = `${SERVER}/books`;
      // console.log(url,newBook);
      this.setState({ showAddBook: false });

      axios
        .post(url, newBook)
        .then((res) =>
          this.setState({ books: [...this.state.books, res.data] })
        )
        .catch((err) => {
          console.error(err.message);
          this.setState({ showError: true, errorMessage: err.message });
        });
    } else {
      this.setState({
        showError: true,
        errorMessage:
          "All fields must be filled out. Please carefully fill out the form.",
        showAddBook: false,
      });
    }
  };

  handlerDeleteBook = (_id) => {
    this.setState({showSpinner:true});
    let url = `${SERVER}/books/${_id}`;
    axios
      .delete(url)
      .then((res) =>
        this.setState({
          books: this.state.books.filter((book) => book._id !== _id),
          showSpinner: false,
        })
      )
      .catch((err) => {
        this.setState({
          showError: true,
          errorMessage: err.message,
          showSpinner: false,
        });
      });
  };

  render() {

    return (
      <>
        <HeaderButton
          handlerShowAddBook={() => this.setState({ showAddBook: true })}
        />

        <AddBookModal
          showAddBook={this.state.showAddBook}
          handlerShowAddBook={() => this.setState({ showAddBook: false })}
          handlerAddBook={this.handlerAddBook}
        />

        <ErrorModal
          showError={this.state.showError}
          errorMessage={this.state.errorMessage}
          handlerClearError={() =>
            this.setState({ showError: false, errorMessage: "" })
          }
        />

        {this.state.books.length > 0 ? (
          
          <CarouselBook 
            showSpinner={this.state.showSpinner}
            books={this.state.books}
            handlerDeleteBook={this.handlerDeleteBook}
            />

        ) : (
          <Carousel activeIndex={0}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ height: "500px" }}
                src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                alt={"no books in book collection"}
              />
              <Carousel.Caption>
                <h3>No Books in Book Collection</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        )}
      </>
    );
  }
}

export default BestBooks;
