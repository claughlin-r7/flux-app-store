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

    @bind(actions.removeApp)
    removeApp(name) {
        let updatedApps = [...this.state.items];
        updatedApps = updatedApps.filter((app) => {
            return app.name !== name;
        });
        this.setState({
            items: updatedApps
        });
    }
}

export default BasketStore;
