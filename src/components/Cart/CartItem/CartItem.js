import React, {useState} from "react";
import { connect } from "react-redux";
import styles from "./CartItem.module.css";
import { removeFromCart, adjustQuantity } from '../../../redux/Shopping/shopping-actions'

const CartItem = ({itemData, removeFromCart, adjustQuantity}) => {
    const [input, setInput] = useState(itemData.qty);
    const onChangeHandler = (e) => {
        setInput(e.target.value);
        adjustQuantity(itemData.id, e.target.value);
    };
    return(
        <div className={styles.flex__container}>
            <div class="card" style={{width: "18 rem"}} className={styles.card}>
            <img className={styles.card__img__top} src={itemData.image} class="card-img-top" alt={itemData.title}/>
            <div class="card-body">
            <h5 class="card-title">{itemData.title}</h5>
            <p class="card-text">{itemData.description}</p>
            <p>{itemData.price}</p>
            <div>
                <label htmlFor="qty">Qty </label>
                <input min="1" type="number" id="qty" name="qty" value={input} onChange={onChangeHandler} className={styles.input}/>
            </div>
            <button onClick={() => removeFromCart(itemData.id)} type="button" class="btn btn-danger">
                Remove From Cart
            </button>
            </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        adjustQuantity: (id, value) => dispatch(adjustQuantity(id, value)),
    };
};

export default connect(null, mapDispatchToProps)(CartItem);