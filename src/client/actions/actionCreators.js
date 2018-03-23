import {
    LOAD_PRODUCTS,
    LOAD_PRODUCTS_SUCCESS,
    LOAD_PRODUCTS_ERROR,
    FETCH_COMPLETE,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CHANGE_QUANTITY,
    EMPTY_CART
} from './actionTypes';
import { fetchData } from '../services/api';

export function fetchProducts(page){
    return function (dispatch) {
        dispatch(loadProducts());
        fetchData(page).then(
            data => {
                dispatch(loadProductsSuccess(data.products));
                if (data.end) {
                    dispatch(fetchComplete());
                }
            },
            error => {
                dispatch(loadProductsError(error));
            }
        )
    }
}

export function loadProducts(){
    return {
        type: LOAD_PRODUCTS
    }
}

export function loadProductsSuccess(data){
    return {
        type: LOAD_PRODUCTS_SUCCESS,
        payload: data
    }
}

export function loadProductsError(error){
    return {
        type: LOAD_PRODUCTS_ERROR,
        payload: error
    }
}

export function fetchComplete(){
    return {
        type: FETCH_COMPLETE
    }
}

export function addToCart(id, quantity){
    return {
        type: ADD_TO_CART,
        payload: {
            id,
            quantity
        } 
    }
}

export function removeFromCart(id){
    return {
        type: REMOVE_FROM_CART,
        payload: {id}
    }
}

export function changeQuantity(id, quantity){
    return {
        type: CHANGE_QUANTITY,
        payload: {
            id,
            quantity
        }
    }
}

export function emptyCart(){
    return {
        type: EMPTY_CART
    }
}