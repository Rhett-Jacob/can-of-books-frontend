import React from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";

let SERVER = process.env.REACT_APP_SERVER;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  componentDidMount() {
    axios
      .get(`${SERVER}/books`)
      .then((res) => this.setState({ books: res.data.data }))
      .catch((err) => console.log(err));
  }

  render() {
    // console.log(this.state.books.length);

    /* TODO: render all the books in a Carousel */
    let CarouselItems = this.state.books.map((book,idx) => {
      return <Carousel.Item key={idx}>
                <img
                  className="d-block w-100"
                  style={{height: "500px" }}
                  src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                  alt={`${book.title}`}
                />
                <Carousel.Caption>
                  <h3>{`${book.title}`}</h3>
                  <p>{`${book.description}`}</p>
                  <p>{`${book.status}`}</p>
                </Carousel.Caption>
              </Carousel.Item>;
    });

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length > 0 ? (
          <Carousel>{CarouselItems}</Carousel>
        ) : (
          <Carousel>
            <Carousel.Item >
            <img
                  className="d-block w-100"
                  style={{height: "500px" }}
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
