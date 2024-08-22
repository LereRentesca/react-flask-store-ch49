import { useState } from 'react';
import "./ShoppingList.css";

function ShoppingList() {
    const [items, setItems] = useState([]);
    const [item, setItem] = useState("");

    function add() {
        // for obj or array
        // create a copy
        let copy = [...items];
        // modify the copy
        copy.push(item);
        // set the copy as the orgn
        setItems(copy);
    }

    function handleInput(e) {
        let text = e.target.value;
        setItem(text);
    }

    return (
        <div className="shopping-list">

            <div className="capture">
                <h3>Add items to your list</h3>
                <input onChange={handleInput} type="text" placeholder='Type item here' />
                <button onClick={add} className='btn btn-sm btn-dark'>Add</button>
            </div>

            <div className="list">
                {items.map(item => <h5>{item}</h5>)}
            </div>

        </div>
    );
}

export default ShoppingList;