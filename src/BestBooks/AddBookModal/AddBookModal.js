import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import './AddBookModal.css';

class AddBookModal extends React.Component {
    render() {
        return (
            <Modal
                show={this.props.showAddBook}
                onHide={this.props.handlerShowAddBook}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Your Favorite Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.props.handlerAddBook}>
                        <Form.Group 
                            className="mb-3" 
                            controlId="bookTitle">
                            <Form.Label>Book Title:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={this.props.addBook.title}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group 
                            className="mb-3" 
                            controlId="bookDescription">
                            <Form.Label>Book Description:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={this.props.addBook.description}
                            />
                        </Form.Group>
                        <Form.Group 
                            className="mb-3" 
                            controlId="bookStatus">
                            <Form.Label>Is Available:</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder={this.props.addBook.status} />
                        </Form.Group>
                        <div className="buttonModalContainer">
                            <Button 
                                className="buttonAdd buttonModal"
                                variant="primary" 
                                type="submit">
                                Save Book
                            </Button>
                            <Button
                                className="buttonDelete buttonModal"
                                variant="secondary"
                                onClick={this.props.handlerShowAddBook}>
                                Close Form
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        )
    }
}

export default AddBookModal;
