import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./CarouselBooks.css";

export default class CarouselBooks extends React.Component {

  render() {
    let CarouselItems = this.props.books.map((book, idx) => {
      return (
      <Carousel.Item 
        className='carouselItem'
        key={idx}>
        <img
          className="d-block w-100 carouselImage"
          style={{ height: "500px" }}
          src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
          alt={`${book.title}`}
        />
        <Carousel.Caption
          className='carouselCaption'>
          {!this.props.noBooks ? (
            <>
              <p className="carouselCaptionHeader carouselText">{`${book.title}`}</p>
              <p className="carouselText">{`${book.description}`}</p>
              <p className="carouselText">{`Available: ${book.status}`}</p>
            </>
          ) : (
            <h3 className="carouselCaptionHeader carouselText">{`${book.title}`}</h3>
          )}
        </Carousel.Caption>
      </Carousel.Item>
      );
    });

    return (
      <Container className="carouselContainer">
        <Row 
          className="justify-content-md-center carouselRow">
          <Col 
            xs={10} md={10} lg={10}
            className="carouselColumn">
            <Carousel
              className="carouselParent"
              interval={null}
              activeIndex={this.props.carouselIndex}
              onSelect={this.props.handlerCarouselIndex}
            >
              {CarouselItems}
            </Carousel>
          </Col>
        </Row>
      </Container>
    );
  }
}
