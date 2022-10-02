import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = (props) => {
    const [CartItemLength, setCartItemLength] = useState(0);

    function AddItem() {
        setCartItemLength(CartItemLength + 1)
    }

    return (
        <CartContext.Provider value={{CartItemLength, AddItem}}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;