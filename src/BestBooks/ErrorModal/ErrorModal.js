import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default class ErrorModal extends React.Component {
  render() {
    return (
      <Modal
          show={this.props.showError}
          onHide={this.props.handlerClearError}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Error!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{this.props.errorMessage}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="buttonDelete buttonModal"
              variant="secondary"
              onClick={this.props.handlerClearError}
            >
              Dismiss Error
            </Button>
          </Modal.Footer>
        </Modal>
    );
  }
}
