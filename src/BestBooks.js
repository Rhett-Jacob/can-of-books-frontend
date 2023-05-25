import React from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

let SERVER = process.env.REACT_APP_SERVER;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddBook: false,
      books: [],
      showError: false,
      errorMessage: "",
    };
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  componentDidMount() {
    axios
      .get(`${SERVER}/books`)
      .then((res) => this.setState({ books: res.data.data }))
      .catch((err) => {console.error(err); this.setState({showError: true, errorMessage: err.message})});
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
        .catch((err) => {console.error(err.message); this.setState({showError: true, errorMessage: err.message})});
      } else {
      this.setState({
        showError: true,
        errorMessage:
          "All fields must be filled out. Please carefully fill out the form.",
        showAddBook: false,
      });
    }
  };

  // handlerDeleteBook = () => {

  // }

  render() {
    console.log(this.state.books);

    /* TODO: render all the books in a Carousel */
    let CarouselItems = this.state.books.map((book, idx) => {
      return (
        <Carousel.Item key={idx}>
          <img
            className="d-block w-100"
            style={{ height: "500px" }}
            src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
            alt={`${book.title}`}
          />
          <Carousel.Caption>
            <h3>{`${book.title}`}</h3>
            <p>{`${book.description}`}</p>
            <p>{`${book.status}`}</p>
            {/* <Button variant='primary' onClick={()=>handlerDeleteBook(book._id)}>Delete Book</Button> */}
          </Carousel.Caption>
        </Carousel.Item>
      );
    });

    return (
      <>
        <div>
          <h2>Bookshelf</h2>
          <Button
            variant="primary"
            onClick={() => this.setState({ showAddBook: true })}
          >
            Add Book
          </Button>
        </div>

        <Modal
          show={this.state.showAddBook}
          onHide={() => this.setState({ showAddBook: false })}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Your Favorite Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handlerAddBook}>
              <Form.Group className="mb-3" controlId="bookTitle">
                <Form.Label>Book Title:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="The Farmer Goes West"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="bookDescription">
                <Form.Label>Book Description:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="The farmer runs out of soil for a third time."
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="bookStatus">
                <Form.Label>Is Available:</Form.Label>
                <Form.Control type="text" placeholder="True" />
              </Form.Group>
              <Button
                variant="secondary"
                onClick={() => this.setState({ showAddBook: false })}
              >
                Close Form
              </Button>
              <Button variant="primary" type="submit">
                Save Book
              </Button>
            </Form>
          </Modal.Body>
          {/* <Modal.Footer>
          </Modal.Footer> */}
        </Modal>

        <Modal
          show={this.state.showError}
          onHide={() => this.setState({ showError: false, errorMessage: "" })}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Error!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{this.state.errorMessage}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() =>
                this.setState({ showError: false, errorMessage: "" })
              }
            >
              Dismiss Error
            </Button>
          </Modal.Footer>
        </Modal>

        {this.state.books.length > 0 ? (
          <Carousel>{CarouselItems}</Carousel>
        ) : (
          <Carousel>
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
