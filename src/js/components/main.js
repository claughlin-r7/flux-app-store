import React from 'react';
import AppList from 'components/appList';
import Basket from 'components/basket';

class Main extends React.Component {
    render() {
        return (
            <div className='main'>
                <AppList />
                <Basket />
            </div>
        );
    }
}

export default Main;
