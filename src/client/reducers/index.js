import { combineReducers } from 'redux';

import products from './products';
import cart from './cart';

const reducer = combineReducers({
    cart,
    products
});

export default reducer;