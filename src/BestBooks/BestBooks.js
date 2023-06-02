import React from "react";
import axios from "axios";
import HeaderButton from "./HeaderButton/HeaderButton";
import AddBookModal from "./AddBookModal/AddBookModal";
import UpdateBookModal from "./UpdateBookModal/UpdateBookModal";
import ErrorModal from "./ErrorModal/ErrorModal.js";
import CarouselBooks from "./CarouselBooks/CarouselBooks";
import "./BestBooks.css";

let SERVER = process.env.REACT_APP_SERVER;

// cite description from wikipedia (https://en.wikipedia.org/wiki/Harry_Potter_and_the_Philosopher%27s_Stone_(film))
const addBook = {title:"Harry Potter and the Sorcerer's Stone",description:"A boy who learns on his eleventh birthday that he is the orphaned son of two powerful wizards and possesses unique magical powers of his own. He is summoned from his life as an unwanted child to become a student at Hogwarts, an English boarding school for wizards. There, he meets several friends who become his closest allies and help him discover the truth about his parents' mysterious deaths.",status:"true"};

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddBook: false,
      showUpdateBook: false,
      showError: false,
      showSpinner: false,
      noBooks: true,
      books: [],
      updateBook:{title:"NA",description:"NA",status:"NA"},
      carouselIndex:0,
      errorMessage: "",
    };
  }

  componentDidMount() {
    axios
      .get(`${SERVER}/books`)
      .then((res) => {
        const resBooks = res.data.data;
        this.setState({ books: resBooks, updateBook:resBooks[0]||{title:"NA",description:"NA",status:"NA"}, carouselIndex:0})})
      .then((item) => {
        this.state.books.length > 0
          ? this.setState({ noBooks: false })
          : this.setState({ noBooks: true });
      })
      .catch((err) => {
        // console.error(err);
        this.setState({
          showError: true,
          errorMessage: err.message,
          noBooks: true,
        });
      });
  }


  handlerCarouselIndex = (idx) => {
    this.setState(prevState => ({
      ...prevState,
      carouselIndex:idx,
      updateBook: prevState.books[idx]||{title:"NA",description:"NA",status:"NA"}
    }))
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
        .then((res) => {
          let resBook = res.data;
          this.setState(prevState => ({
            ...prevState,
            books: [...prevState.books, resBook],
            carouselIndex: prevState.books.length,
            updateBook:resBook,
            noBooks: false,
          }))}
        )
        .catch((err) => {
          // console.error(err.message);
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

  handlerUpdateBook = (e, id) => {
    e.preventDefault();
    // console.log(e.target);
    let bookTitle = e.target.bookTitle.value;
    let bookDescription = e.target.bookDescription.value;
    let bookStatus = e.target.bookStatus.value;

    if (bookTitle && bookDescription && bookStatus) {
      let updateBook = {
        _id:id,
        title: bookTitle,
        description: bookDescription,
        status: bookStatus,
      };
  
      let url = `${SERVER}/books/${id}`;
      // console.log(url,updateBook);
      this.setState({ showUpdateBook: false });

      axios
        .put(url, updateBook)
        .then((res) => {
          let updatedBook = res.data;
          this.setState(prevState => ({
            ...prevState,
            books: prevState.books.map(book=>book._id===id?updatedBook:book),
            noBooks: false,
            updateBook:updatedBook
          }));
          // console.log(res);
        }
        )
        .catch((err) => {
          // console.error(err.message);
          this.setState({ showError: true, errorMessage: err.message });
        });
    } else {
      this.setState({
        showError: true,
        errorMessage:
          "All fields must be filled out. Please carefully fill out the form.",
        showUpdateBook: false,
      });
    }
  };

  handlerDeleteBook = (id) => {
    this.setState({ showSpinner: true });
    let url = `${SERVER}/books/${id}`;
    axios
      .delete(url)
      .then((res) =>
        this.setState((prevState) => ({
          ...prevState,
          books: prevState.books.filter((book) => book._id !== id),
          noBooks: prevState.books.length === 1 ? true : false,
          showSpinner: false,
          carouselIndex:0,
          updateBook:prevState.books[0]||{title:"NA",description:"NA",status:"NA"}
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
    // console.log(this.state.updateBook);
    return (
      <>
        <HeaderButton
          noBooks={this.state.noBooks}
          showSpinner={this.state.showSpinner}
          handlerShowAddBook={() => this.setState({ showAddBook: true })}
          handlerDeleteBook={()=>this.handlerDeleteBook(this.state.updateBook._id)}
          handlerShowUpdateBook={()=>this.setState({showUpdateBook:true})}
        />

        <AddBookModal
          addBook={addBook}
          showAddBook={this.state.showAddBook}
          handlerShowAddBook={() => this.setState({ showAddBook: false })}
          handlerAddBook={this.handlerAddBook}
        />

        <UpdateBookModal
          updateBook={this.state.updateBook}
          showUpdateBook={this.state.showUpdateBook}
          handlerShowUpdateBook={(bool)=>this.setState({showUpdateBook:bool})}
          handlerUpdateBook={this.handlerUpdateBook}
        />

        <ErrorModal
          showError={this.state.showError}
          errorMessage={this.state.errorMessage}
          handlerClearError={() =>this.setState({ showError: false, errorMessage: "" })}
        />

        {this.state.noBooks ? (
          <CarouselBooks
            noBooks={this.state.noBooks}
            books={[{ title: "No Books in Collection" }]}
          />
        ) : (
          <CarouselBooks
            noBooks={this.state.noBooks}
            books={this.state.books}
            carouselIndex={this.state.carouselIndex}
            handlerCarouselIndex={this.handlerCarouselIndex}
          />
        )}
      </>
    );
  }
}

export default BestBooks;
