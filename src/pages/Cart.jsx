import { useContext } from "react";
import "./Cart.css";
import GlobalContext from "../context/GlobalContext";

function Cart() {

    let cart = useContext(GlobalContext).cart;

    function getNumOfProducts() {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            let prod = cart[i];
            total += prod.quantity;
        }

        return total;
    }

    function getCartTotal() {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            let prod = cart[i];
            total += (prod.price * prod.quantity);
        }

        return total.toFixed(2);
    }

    function goToPay() {
        console.log("User wants to pay!!")
    }


    return (
        <div className="cart">
            <h1>Your cart is ready!</h1>
            <h3>We have {getNumOfProducts()} products ready for your</h3>

            <div className="parent">
                <div className="list">
                    {cart.map(prod => <div className="cart-prod">
                        <img src={prod.image} alt="" />
                        <h5>{prod.title}</h5>
                        <label>Price: ${prod.price}</label>
                        <label>Quantity: {prod.quantity}</label>
                        <label>Total: ${(prod.quantity * prod.price).toFixed(2)}</label>
                        <button className="btn btn-sm btn-danger">Remove</button>
                    </div>
                    )}
                </div>

                <div className="total">
                    <h5>Your total is:</h5>
                    <h3>{getCartTotal()}</h3>
                    <hr />
                    <button onClick={goToPay} className="btn btn-primary">Proceed to payment &gt;</button>
                </div>
            </div>
        </div>
    );
}

/**
 * 
 * create a pay button below the total
 * 
 * when the user clicks the button
 * console a message 
 */

export default Cart;