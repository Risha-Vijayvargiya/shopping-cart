import * as actionTypes from './shopping-types';

export const addToCart = (itemID) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemID,
        },
    };
};

export const removeFromCart = (itemID) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID
        },
    };
};

export const adjustQuantity = (itemID, value) => {
    return {
        type: actionTypes.ADJUST_QUANTITY,
        payload: {
            id: itemID,
            qty: value,
        },
    };
};
