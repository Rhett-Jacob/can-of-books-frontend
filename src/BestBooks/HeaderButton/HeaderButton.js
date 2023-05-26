import React from 'react';
import Button from 'react-bootstrap/Button';
import './HeaderButton.css';

class HeaderButton extends React.Component {
    render() {
        return (
            <div>
                <h2>Bookshelf</h2>
                <Button
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