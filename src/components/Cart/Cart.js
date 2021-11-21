import React, {useState, useEffect} from "react";
import CartItem from "./CartItem/CartItem";
import styles from "./Cart.module.css";
import {connect} from "react-redux";

const Cart = ({ cart }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        let items = 0;
        let price = 0;

        cart.forEach((item) => {
            items += item.qty;
            price += item.qty * item.price;
        });

        setTotalPrice(price);
        setTotalItems(items);
    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems])
    return (
        <div>
            <div className={styles.flex__container}>
                {cart.map((item) => (
                    <CartItem key={item.id} itemData={item}/>
                ))}
            </div>
            <div class="card" style={{width: "18 rem"}}>
                <div class="card-body">
                    <h4 class="card-title">Cart Summary</h4>
                    <span>TOTAL: ({totalItems} items)</span>
                    <div>
                        <span>TOTAL AMOUNT: {totalPrice} Rs</span>
                    </div>
                    <div style={{margin: "4px"}}>
                        <button type="button" class="btn btn-danger">Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.shop.cart,
    }
}

export default connect(mapStateToProps)(Cart);