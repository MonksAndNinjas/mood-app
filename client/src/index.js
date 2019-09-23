import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import fitbitReducer from './reducers/userReducer';

import App from './App';
import Fitbit from './Fitbit';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const rootReducer = combineReducers({
  users: userReducer,
  fitbitData: fitbitReducer,
})
//import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render((
    <Provider store={store}>
      <Router>
        <Route exact path="/fitbit" component={Fitbit} />
        <App />
      </Router>
    </Provider>
  ), document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
