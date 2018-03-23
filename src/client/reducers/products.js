import {
    LOAD_PRODUCTS,
    LOAD_PRODUCTS_SUCCESS,
    LOAD_PRODUCTS_ERROR,
    FETCH_COMPLETE
} from '../actions/actionTypes';

var initialState = {
    loading: false,
    loaded: false,
    complete: false,
    error: null,
    page: 1,
    data: []
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case LOAD_PRODUCTS:
            return Object.assign({}, state, {
                loading: true
            });
        case LOAD_PRODUCTS_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                loaded: true,
                data: [...state.data, ...action.payload],
                page: state.page + 1
            });
        case LOAD_PRODUCTS_ERROR:
            return Object.assign({}, state, {
                loading: false,
                loaded: false,
                error: action.payload
            });
        case FETCH_COMPLETE:
            return Object.assign({}, state, {
                complete: true
            });
        default:
            return state;
    }
}