import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './UpdateBookModal.css';

class UpdateBookModal extends React.Component {
    render() {
        return (
            <Modal
                show={this.props.showUpdateBook}
                onHide={this.props.handlerShowUpdateBook}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update Your Favorite Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.props.handlerUpdateBook}>
                        <Form.Group className="mb-3" controlId="bookTitle">
                            <Form.Label>Book Title:</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={this.props.updateBook.title}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="bookDescription">
                            <Form.Label>Book Description:</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={this.props.updateBook.description}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="bookStatus">
                            <Form.Label>Is Available:</Form.Label>
                            <Form.Control 
                              type="text" 
                              defaultValue={this.props.updateBook.status} />
                        </Form.Group>
                        <div className="buttonModalContainer">
                            <Button 
                                className="buttonAdd buttonModal"
                                variant="primary" 
                                type="submit"
                                onClick={this.props.handlerUpdateBook} 
                            >
                                Update Book
                            </Button>
                            <Button
                                className="buttonDelete buttonModal"
                                variant="secondary"
                                onClick={this.props.handlerUpdateBook}
                            >
                                Close Form
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        )
    }
}

export default UpdateBookModal;

