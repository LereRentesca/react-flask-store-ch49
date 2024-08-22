import { createContext } from 'react';

const GlobalContext = createContext({
    catalog: [],
    cart: [],
    addProductToCatalog: () => {},
    addProductToCart: () => {},
    removeProductFromCart: () => {},
    clearCart: () => {}
});

export default GlobalContext;