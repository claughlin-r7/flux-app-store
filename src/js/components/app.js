import React from 'react';
import Avatar from 'react-avatar';

class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <Avatar src={this.props.image} />
                <div className='details'>
                    <p>{this.props.name}</p>
                    <p>{this.props.price}</p>
                    <a href="#" class="button-0">Buy</a>
                </div>
            </div>
        );
    }
}

export default App;
