import * as actionTypes from './shopping-types';

const INITIAL_STATE = {
    products: [
        {
            id:1,
            title: "Water Bottle",
            description: "This Bottle is Blue in color. It can be used to fill hot as well as cold water.",
            price: 190.00,
            image: "https://thumbs.dreamstime.com/b/bottle-water-16007470.jpg",
        },
        {
            id:2,
            title: "Bag",
            description: "This Bag is Black in color. It can carry laptop and have 2 compartments.",
            price: 590.00,
            image: "https://cdn.shopify.com/s/files/1/0119/9259/6542/files/Cypress.jpg?v=1599560069",
        },
        {
            id:3,
            title: "Lunch Box",
            description: "This Box is made up of stainless steel. It can be used to keep hot food for longer time.",
            price: 90.00,
            image: "https://m.media-amazon.com/images/I/61ElyzuU2zL._AC_SX466_.jpg",
        },
    ], // {id, title, descr, price, img}
    cart: [], // {id, title, descr, price, img, qty}
    currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const item = state.products.find((prod) => prod.id === action.payload.id);
            const inCart = state.cart.find((item) => 
                item.id === action.payload.id ? true : false
            ); 
            return {
                ...state,
                cart: inCart
                    ? state.cart.map((item) => 
                        item.id === action.payload.id
                            ? { ...item, qty: item.qty + 1}
                            : item
                        )
                    : [...state.cart, { ...item, qty: 1}],
            };
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            };
        case actionTypes.ADJUST_QUANTITY:
            return {
                ...state,
                cart: state.cart.map((item) => 
                    item.id === action.payload.id 
                        ? {...item, qty: +action.payload.qty}
                        : item
                ),
            };
        default:
            return state;
    }
};

export default shopReducer;