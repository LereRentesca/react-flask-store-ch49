import { useContext, useState } from 'react';
import "./Product.css";
import QuantityPicker from './QuantityPicker';
import GlobalContext from '../context/GlobalContext';

function Product(props) {
    const [quantity, setQuantity] = useState(1);

    let addProductToCart = useContext(GlobalContext).addProductToCart;

    function handleQuantity(qty) {
       setQuantity(qty);
    }

    function getTotal() {
        let total = props.data.price * quantity;
        return total.toFixed(2);
    }
    
    function add() {
        //call the global fn
        let prod = {
            ...props.data,
            quantity: quantity
        };
        addProductToCart(prod);
    }

    return (
        <div className="product">

            <img src={props.data.image} alt=" " />

            <h3>{props.data.title}</h3>

            <div className="prices">
                <label>Total: ${getTotal()}</label>
                <label>Price: ${props.data.price.toFixed(2)}</label>
            </div>

            <div>
                <QuantityPicker onChange={handleQuantity}  />
                <button onClick={add} className='btn btn-sm btn-primary'>Add</button>
            </div>
            
        </div>
    );
}

export default Product;