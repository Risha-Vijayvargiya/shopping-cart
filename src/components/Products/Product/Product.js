import React from "react";
import styles from './Product.module.css';
import {connect} from 'react-redux';
import { addToCart } from "../../../redux/Shopping/shopping-actions";

const Product = ({ productData, addToCart }) => {
    return (
        <div className={styles.flex__container}>
            <div class="card" style={{width: "18 rem"}} className={styles.card}>
            <img className={styles.card__img__top} src={productData.image} class="card-img-top" alt={productData.title}/>
            <div class="card-body">
            <h5 class="card-title">{productData.title}</h5>
            <p class="card-text">{productData.description}</p>
            <p>{productData.price}</p>
            <button onClick={() => addToCart(productData.id)} type="button" class="btn btn-primary">
                Add to Cart
            </button>
            </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch(addToCart(id))
    }
}

export default connect(null, mapDispatchToProps)(Product);