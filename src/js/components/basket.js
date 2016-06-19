import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import basketStore from 'stores/basketStore';

@connectToStores
class Basket extends React.Component {

    constructor(props) {
        super(props);
    }

    static getStores() {
        return [basketStore];
    }

    static getPropsFromStores() {
        return basketStore.getState();
    }

    render() {
        return (
            <div className='basket'>
                <ul>Products: {this.props.items.map((item) => {
                   return <li>{item.name}</li>;
                })}</ul>
                <p>Items: ({this.props.items.length})</p>
                <p>Total: £ {this.props.items.reduce((prev, current) => {
                    return prev + parseFloat(current.price.replace('£', ''));
                }, 0)}</p>
            </div>
        );
    }
}

export default Basket;
