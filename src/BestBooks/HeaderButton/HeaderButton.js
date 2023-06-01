import React from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from "react-bootstrap/Spinner";
import './HeaderButton.css';

class HeaderButton extends React.Component {
    render() {
        return (
            <div className='welcome'>
                <Button
                    className="buttonAdd"
                    variant="primary"
                    onClick={this.props.handlerShowAddBook}
                >
                    Add Book
                </Button>
                {!this.props.noBooks && (
                    <Button
                        className="buttonDelete"
                        variant="secondary"
                        onClick={this.props.handlerShowUpdateBook}>
                        Update Book
                    </Button>)}
                
                {this.props.showSpinner && !this.props.noBooks ?
                <Spinner animation="border" variant="primary" />:
                <Button
                    className="buttonDelete"
                    variant="primary"
                    onClick={this.props.handlerDeleteBook}>
                    Delete Book
                </Button>
                }
                
            </div>
        )
    }
}

export default HeaderButton;