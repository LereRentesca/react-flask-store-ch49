import { useState } from 'react';
import "./QuantityPicker.css";

function QuantityPicker(props) {
    const [quantity, setQuantity] = useState(1);

    function increase() {
        const val = quantity + 1;
        setQuantity(val);
        props.onChange(val);
    }

    function decrease() {       
        const val = quantity - 1;        
        if (val >= 1) {
            setQuantity(val);
            props.onChange(val);
        }
    }

    return (
        <div className="qt-picker">
            <button className='btn btn-sm btn-secondary' disabled={quantity == 1} onClick={decrease}>-</button>
            <label>{quantity}</label>
            <button className='btn btn-sm btn-secondary' onClick={increase}>+</button>
        </div>
    );
}

export default QuantityPicker;
