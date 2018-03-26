import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './containers/App';
import reducer from './reducers/index';
import './styles/app.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

render(
    <Provider store={ store }>
        <App />
    </Provider>
    , document.getElementById('app')
);



