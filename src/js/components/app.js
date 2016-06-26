import React from 'react';
import Avatar from 'react-avatar';
import BasketActions from 'actions/basketActions';

class App extends React.Component {

    buyApp = () => {
        BasketActions.buyApp({
            name: this.props.name,
            price: this.props.price
        });
    };

    render() {
        return (
            <div className='app'>
                <Avatar src={this.props.avatar} />
                <div className='details'>
                    <p>{this.props.name}</p>
                    <p>{this.props.price}</p>
                    <p>Stock: {this.props.stock}</p>
                    <a disabled={this.props.stock === 0 ? 'disabled': ''}
                       onClick={this.buyApp} class="button-0">Buy</a>
                </div>
            </div>
        );
    }
}

export default App;
