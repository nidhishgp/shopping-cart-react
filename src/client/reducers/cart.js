import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CHANGE_QUANTITY,
    EMPTY_CART
} from '../actions/actionTypes';

export default (state = [], action = {}) => {
    switch (action.type) {
        case ADD_TO_CART:
            if(itemInCart(action.payload.id, state)){
                return state;
            }
            return [
                ...state,
                {
                    id: action.payload.id,
                    quantity: action.payload.quantity
                }
            ];
        case REMOVE_FROM_CART:
            return state.filter(item => {
                return item.id !== action.payload.id;
            });
        case CHANGE_QUANTITY:
            return state.map(item => {
                if(item.id == action.payload.id) {
                    item.quantity = action.payload.quantity;
                }
                return item;
            });  
        case EMPTY_CART:
            return [];          
        default:
            return state;
    }
}

const itemInCart = (id, state) => {
    return state.find(item => id == item.id);
}