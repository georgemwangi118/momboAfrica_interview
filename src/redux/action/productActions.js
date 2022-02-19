import api from '../../apis/api';
import { ActionTypes } from '../contexts/action-types';

export const fetchProducts = () => async (dispatch) => {
    const res = await api.get("/");
    dispatch({
        type: ActionTypes.FETCH_PRODUCTS,
        payload: res.data
    });
};

export const fetchProduct = (id) => async (dispatch) => {
    const res = await api.get(`/${id}`);
    dispatch ({
        type: ActionTypes.SELECTED_PRODUCT,
        payload: res.data
    });
};

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
};

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    }
};

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT
    }
};