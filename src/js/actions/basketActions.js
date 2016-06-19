import flux from 'control';
import {createActions} from 'alt-utils/lib/decorators';

@createActions(flux)
class BasketActions {

    constructor() {
        this.generateActions(
            'buyApp'
        );
    }

}

export default BasketActions;
