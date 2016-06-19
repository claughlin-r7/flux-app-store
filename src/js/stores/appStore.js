import flux from 'control';
import {createStore, bind} from 'alt-utils/lib/decorators';
import actions from 'actions/appActions';

@createStore(flux)
class AppStore {
    constructor() {
        this.state = {
            apps: []
        };
    }

    @bind(actions.setApps)
    setApps(apps) {
        this.setState({apps});
    }
}

export default AppStore;
