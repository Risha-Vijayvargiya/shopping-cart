import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';

const Navbar = ({ cart }) => {

    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        let count = 0;
        cart.forEach((item) => {
            count += item.qty;
        });
        
        setCartCount(count);
    }, [cart, cartCount]);

    return (
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <h2 class="navbar-brand">Shopping Cart</h2>
                <Link to="/cart">
                <button type="button" class="btn btn-primary position-relative">
                Cart
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartCount}
                <span class="visually-hidden">No. of Items</span>
                </span>
                </button>
                </Link>
            </div>
        </nav>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
    };
};

export default connect(mapStateToProps)(Navbar);