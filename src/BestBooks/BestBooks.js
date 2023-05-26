import React from "react";
import axios from "axios";
import HeaderButton from "./HeaderButton/HeaderButton";
import AddBookModal from "./AddBookModal/AddBookModal";
import ErrorModal from "./ErrorModal/ErrorModal.js";
import CarouselBooks from "./CarouselBooks/CarouselBooks";
import "./BestBooks.css";

let SERVER = process.env.REACT_APP_SERVER;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddBook: false,
      books: [],
      noBooks: true,
      showError: false,
      errorMessage: "",
      showSpinner: false,
    };
  }

  componentDidMount() {
    axios
      .get(`${SERVER}/books`)
      .then((res) => this.setState({ books: res.data.data }))
      .then((item) =>
        this.state.books.length > 0
          ? this.setState({ noBooks: false })
          : this.setState({ noBooks: true })
      )
      .catch((err) => {
        console.error(err);
        this.setState({
          showError: true,
          errorMessage: err.message,
          noBooks: true,
        });
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
          this.setState({
            books: [...this.state.books, res.data],
            noBooks: false,
          })
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
    this.setState({ showSpinner: true });
    let url = `${SERVER}/books/${_id}`;
    axios
      .delete(url)
      .then((res) =>
        this.setState((prevState) => ({
          ...prevState,
          books: this.state.books.filter((book) => book._id !== _id),
          noBooks: prevState.books.length === 1 ? true : false,
          showSpinner: false,
        }))
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
    console.log(this.state.noBooks, this.state.books);
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

        {this.state.noBooks ? (
          <CarouselBooks
            noBooks={this.state.noBooks}
            showSpinner={this.state.showSpinner}
            books={[{ title: "No Books in Collection" }]}
            handlerDeleteBook={this.handlerDeleteBook}
          />
        ) : (
          <CarouselBooks
            noBooks={this.state.noBooks}
            showSpinner={this.state.showSpinner}
            books={this.state.books}
            handlerDeleteBook={this.handlerDeleteBook}
          />
        )}
      </>
    );
  }
}

export default BestBooks;
