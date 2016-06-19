import flux from 'control';
import {createActions} from 'alt-utils/lib/decorators';
import AppStore from 'stores/appStore';
import apps from 'apps';

@createActions(flux)
class AppActions {

    constructor() {
        this.generateActions(
            'setApps'
        );
    }

    fetchApps() {
        setTimeout(() => {
            this.setApps(apps);
        }, 3000);
    }

}

export default AppActions;
