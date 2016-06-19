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
                <Avatar src={this.props.image} />
                <div className='details'>
                    <p>{this.props.name}</p>
                    <p>{this.props.price}</p>
                    <a onClick={this.buyApp} class="button-0">Buy</a>
                </div>
            </div>
        );
    }
}

export default App;
