
import { useState } from 'react';
import GlobalContext from './GlobalContext';
import { catalog as oldCatalog } from '../services/DataService';

function GlobalProvider(props) {
    const [catalog, setCatalog] = useState(oldCatalog);
    const [cart, setCart] = useState([]);

    function addProductToCatalog(product){
        var copy = [...catalog];
        copy.push(product);
        setCatalog(copy);
        console.log(copy);
    }

    function addProductToCart(product) {        
        var copy = [...cart];
        copy.push(product);
        setCart(copy);
    }

    function clearCart() {
        console.log("Global clear");
    }

    function removeProductFromCart() {
        console.log("Global remove");
    }

    return (
        <GlobalContext.Provider value={{
            catalog: catalog,
            cart: cart,
            addProductToCatalog: addProductToCatalog,
            addProductToCart: addProductToCart,
            clearCart: clearCart,
            removeProductFromCart: removeProductFromCart,
        }}>
           {props.children}
        </GlobalContext.Provider>
    );
}

export default GlobalProvider;