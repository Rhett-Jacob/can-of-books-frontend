import React from 'react';
import Button from 'react-bootstrap/Button';
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
            </div>
        )
    }
}

export default HeaderButton;