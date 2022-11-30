import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart";
import './cart.css';


const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    const order ={
        buyer: {
            nombre: 'Rodolfo Gonzalez',
            email: 'rjgonzalezacosta@gmail.com',
            telefono: '11 5144-3679',
            addres: 'Capital Federal'
        },
        items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
        total: totalPrice(),
        
        
    }

    const handleClick = () => {
        
        const db = getFirestore();
        const orderCollection = collection(db, 'orders');
        addDoc(orderCollection, order)
           .then(({ id }) => console.log(id))
           
    }

     if (cart.length === 0) {
        return (
            <>
                <p>No hay elementos en el carrito</p>
                <Link to='/'>Hacer Compras</Link>
            </>
        );
    }

     return (
        <>
            {
              cart.map(product => <ItemCart key={product.id} product={product} />)
            }
        
            <p className="totalPrice">
                Total: {totalPrice()}
            </p>
            <div className="comprar">
                <button onClick={handleClick}>Emitir Compra</button>
            </div>    
        </>
    )
}




export default Cart