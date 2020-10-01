import React, { useContext, useState } from 'react';

export const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

export function CartProvider({ item, children }){
    const [ list, setList ] = useState(item || []);

    const [ cant , setCant ] = useState(0);

    function addItem(newItem) {
        setList([...list, newItem]);
        setCant(cant + newItem.quantity);
    }

    function deleteItem(item) {
        const del = list.filter(i => i.id !== item.id);
        setList(del);
        setCant(cant - item.quantity);
    }

    function getTotal() {
        return list.reduce((prev, next) => (prev + (next.quantity * next.price)), 0); 
    }

    function vaciarLista() {
        setList([]);
        setCant(0);
    }

    return <CartContext.Provider value={{list, addItem, cant: cant, deleteItem, getTotal, vaciarLista }}>
        {children}
    </CartContext.Provider>
}