import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import ReduxThunk from 'redux-thunk'
import ReduxPromise from 'redux-promise';

import App from './app';
import Landing from './components/Landing';
import Profile from './components/Profile';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={browserHistory}>
          <Route path="/" component={App}>
              <IndexRoute component={Landing}/>
              <Route path="/profile" component={Profile}/>
              <Route path="*" component={App}/>
          </Route>
      </Router>
  </Provider>
  , document.querySelector('.root'));

