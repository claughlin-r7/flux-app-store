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
                Items: ({this.props.items.length})
            </div>
        );
    }
}

export default Basket;
