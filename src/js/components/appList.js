import React from 'react';
import App from 'components/app';
import connectToStores from 'alt-utils/lib/connectToStores';
import AppStore from 'stores/appStore';
import AppActions from 'actions/appActions';

@connectToStores
class AppList extends React.Component {

    constructor(props) {
        super(props);
    }

    static getStores() {
        return [AppStore];
    }

    static getPropsFromStores() {
        return AppStore.getState();
    }

    componentDidMount() {
        AppActions.fetchApps();
    }

    renderAppList = () => {
        return this.props.apps.map((app) => {
            return <App {...app} />
        })
    };

    render() {
        return (
            <div className='app-list'>
                {this.renderAppList()}
            </div>
        );
    }
}

export default AppList;
