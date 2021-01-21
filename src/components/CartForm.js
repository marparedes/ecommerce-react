import React, { useState, useEffect } from 'react';
import { Form, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { getFirestore } from '../firebase';
import { useCartContext } from './CartContext';
import NoItemMessage from './NoItemMessage';

export function OrderConfirmation({ orderId }) {
    return <div style={{margin:"20% 30px"}}>
        <div className="alert alert-success" style={{fontSize: 20, textAlign:"center", fontFamily: "Raleway"}} role="alert">
            Tu ID de compra es: {orderId}
        </div>
        <div style={{textAlign:"center"}}>
            <Link to={'/'}>
                <button className="btn btn-info">Volver a comprar</button>
            </Link>
        </div>
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
        } catch (error) {
            console.log('error')
        }
    }

    useEffect(() => {
        console.log('mounted');
    }, [list])


    return <div className="container" style={{marginTop: "10%", marginBottom:"10%"}}>
        {!success && !orderId ? <>
            {!orderId && list.length? <> 
                <Form data-toggle="validator">
                    <Form.Row>
                        
                        <Form.Group controlId="">
                            
                            <Form.Group controlId="">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control placeholder="Nombre" value={name} onInput={onNameChange}/>
                            </Form.Group>

                            <Form.Label>Telefono</Form.Label>
                            <Form.Control type="number" placeholder="Telefono" value={phone} onInput={onPhoneChange}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" id="inputEmail" required/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Confirmar Email</Form.Label>
                            <Form.Control type="email" placeholder="Repetir Email" data-match="#inputEmail" data-match-error="El email no es correcto" value={email} onInput={onEmailChange} required/>
                        </Form.Group>
                    </Form.Row>



                </Form>
                <button type="submit" className="btn btn-info" disabled={!name || !email || !phone} onClick={() => createOrder()}> Realizar Compra</button>

            </> : <NoItemMessage message="checkout"/>}
        </>
         : <OrderConfirmation orderId={orderId} /> }
    </div>
}