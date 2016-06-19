/*eslint-disable */
import React from  'react';
/*eslint-enable */
import '../scss/main.scss';
import { render } from 'react-dom'
//Components
import Main from 'components/main';

render((
    <div id='outer-container'>
        <Main />
    </div>
), document.getElementById('content'));
