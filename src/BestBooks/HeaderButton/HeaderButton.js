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
                    Add
                </Button>
                {!this.props.noBooks?
                    <Button
                        className="buttonUpdate marginLeft"
                        variant="secondary"
                        onClick={this.props.handlerShowUpdateBook}>
                        Update
                    </Button>:
                    null}
                
                {!this.props.noBooks?
                    (this.props.showSpinner?
                    <Spinner animation="border" variant="primary" />:
                    <Button
                        className="buttonDelete marginLeft"
                        variant="primary"
                        onClick={this.props.handlerDeleteBook}>
                        Delete
                    </Button>):
                    null
                }
                
            </div>
        )
    }
}

export default HeaderButton;