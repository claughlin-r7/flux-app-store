import flux from 'control';
import {createActions} from 'alt-utils/lib/decorators';
import AppStore from 'stores/basketStore';

@createActions(flux)
class BasketActions {

    constructor() {
        this.generateActions(
            'addItem'
        );
    }

}

export default BasketActions;
