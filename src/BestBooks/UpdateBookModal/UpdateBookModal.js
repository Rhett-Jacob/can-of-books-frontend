import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

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
                                defaultValue="The Farmer Goes West"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="bookDescription">
                            <Form.Label>Book Description:</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue="The farmer runs out of soil for a third time."
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="bookStatus">
                            <Form.Label>Is Available:</Form.Label>
                            <Form.Control type="text" defaultValue="True" />
                        </Form.Group>
                        <div className="buttonModalContainer">
                            <Button 
                                className="buttonAdd buttonModal"
                                variant="primary" 
                                type="submit">
                                Update Book
                            </Button>
                            <Button
                                className="buttonDelete buttonModal"
                                variant="secondary"
                                onClick={this.props.handlerShowUpdateBook}
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