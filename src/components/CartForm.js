import React, { useState, useEffect } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { getFirestore } from '../firebase';
import { useCartContext } from './CartContext';

export function OrderConfirmation({ orderId }) {
    return <div>
        <p> Feedback del orderId: {orderId} </p>
    </div>
}

export default function CartForm() {

    const { list, getTotal, vaciarLista } = useCartContext();

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);

    const [ orderId, setOrderId ] = useState(null);
    const [ success, setSuccess ] = useState(false);

    function onNameChange(event) {
        setName(event.target.value)
    }

    function onEmailChange(event) {
        setEmail(event.target.value);
    }

    function onPhoneChange(event) {
        setPhone(event.target.value)
    }

    async function createOrder() {
        const db = getFirestore();
        const orders = db.collection("orders");

        const buyer = {
            name: name,
            email: email,
            phone: phone
        }

        const items = list.map(cartItem => ({id: cartItem.id, title: cartItem.title, price: cartItem.price, quantity: cartItem.quantity}));

        const newOrder = {
            buyer,
            items: items,
            date: firebase.firestore.FieldValue.serverTimestamp(),
            total: getTotal(),
        }

        try {
            const { id } = await orders.add(newOrder);
            setOrderId(id);
            setSuccess(true);
            vaciarLista();
            console.log('id:', id);
            console.log(success)
        } catch (error) {
            // feedback para el usuario
            console.log('error')
        }
    }

    // probar hacer un useEffect (return ) para cuando salga del componente se borre el orderId
    useEffect(() => {
        console.log('mounted');
        console.log(success)
        return console.log('dismounted ' + success);
    }, [list])


    return <div className="container" style={{marginTop: "10%"}}>
        {!success && !orderId ? <>
            {!orderId && list.length? <> 
                <Form>
                    <Form.Row>
                        
                        <Form.Group controlId="">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control placeholder="Nombre" value={name} onInput={onNameChange}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Confirmar Email</Form.Label>
                            <Form.Control type="email" placeholder="Repetir Email" value={email} onInput={onEmailChange}/>
                        </Form.Group>
                    </Form.Row>


                    <Form.Group controlId="">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control placeholder="Telefono" value={phone} onInput={onPhoneChange}/>
                    </Form.Group>

                </Form>
                <button type="submit" className="btn btn-info" disabled={!name || !email || !phone} onClick={() => createOrder()}> Realizar Compra</button>

            </> : <p>  No hay productos para hacer Checkout </p>}
        </>
         : <OrderConfirmation orderId={orderId} /> }
    </div>
}