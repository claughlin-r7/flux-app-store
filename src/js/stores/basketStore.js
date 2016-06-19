import flux from 'control';
import {createStore, bind} from 'alt-utils/lib/decorators';
import actions from 'actions/basketActions';

@createStore(flux)
class BasketStore {
    constructor() {
        this.state = {
            items: []
        };
    }

    @bind(actions.buyApp)
    buyApp(app) {
        this.setState({
            items: [...this.state.items, app]
        });
    }
}

export default BasketStore;
