import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';


export default class CarouselBook extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      carouselIndex:0
    }
  };

  handlerCarouselIndex = (selectedIndex) => {
    this.setState({ carouselIndex: selectedIndex });
  };

  render () {
    let CarouselItems = this.props.books.map((book, idx) => {
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
            {this.props.showSpinner ? (
              <Spinner animation="border" variant="primary" />
            ) : (
              <Button
                variant="primary"
                onClick={() => {
                  this.props.handlerDeleteBook(book._id);
                  this.setState({carouselIndex: 0 });
                }}
              >
                Delete Book
              </Button>
            )}
          </Carousel.Caption>
        </Carousel.Item>
      );
    });

    return (
          <Carousel
            interval={null}
            activeIndex={this.state.carouselIndex}
            onSelect={this.handlerCarouselIndex}
          >
            {CarouselItems}
          </Carousel>
    );
  }
}

{/* <CarouselBook 
books={this.state.books}
carouselIndex={this.state.carouselIndex}
handlerDeleteBook={this.handlerDeleteBook}
handerCarouselIndex={this.handlerCarouselIndex}
/> */}