import React from 'react';
import {render} from 'react-dom';
import {Router, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';

/**
 * Customized CSS for App initilization
 */
// import './assets/css/normalize.css';
import '@blueprintjs/core/dist/blueprint.css';
import './assets/css/icomoon/styles.css';
import './assets/prebuilt/bootstrap.css'
import './assets/prebuilt/core.css'
import './assets/prebuilt/components.css'
import './assets/prebuilt/colors.css'
// import './assets/_main/bootstrap.less';
// import './assets/_main/core.less';
// import './assets/_main/components.less';
// import './assets/_main/colors.less';
import './assets/css/main.css';
// import './assets/sass/_.scss';

import routes from './routes';
import configureStore from './store/configureStore';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

const App = () =>
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>;

render(<App />, document.getElementById('root'));
