import React from 'react';
import { useCartContext } from './CartContext';
import deleteIcon from '../assets/deleteIcon.svg';
import {Link} from 'react-router-dom';
import 'firebase/firestore';
import NoItemMessage from './NoItemMessage';


function Cart() {

    const { list, deleteItem, cant, getTotal } = useCartContext();

    const center = {
        verticalAlign: "middle",
        fontWeight: 400
    }

    const sizeTitles = {
        fontSize: 25
    }
    const sizeProds = {
        fontSize: 20
    }


    return <div className="pt-5 pb-5">
    {cant > 0 ? <>
    <div className="container">
        <div className="row w-100">
            <div className="col-lg-12 col-md-12 col-12">
            <p style={{fontFamily:"Alata", margin: 20, fontSize:30}}> Carrito </p>

                
                    <table id="shoppingCart" className="table table-condensed">
                        <thead>
                            <tr style={sizeTitles}>
                                <th style={{width:"50%"}}>Producto</th>
                                <th style={{width:"12%"}}>Precio</th>
                                <th style={{width:"10%"}}>Cantidad</th>
                                <th style={{width:"16%"}}></th>
                            </tr>
                        </thead>
                    
                    </table>

                    <table id="shoppingCart" className="table table-condensed">
                        {list.map( item => <> 
                            <thead>
                                <tr style={sizeProds}>
                                    
                                    <th style={{width:"50%", ...center}}><img src={`/${item.imageId}`} style={{width: "20%"}} alt="cartProdImg"/> {item.title}</th>
                                    <th style={{width:"12%", ...center}}> ${item.price} </th>
                                    <th style={{width:"10%", textAlign: "center", ...center}}> {item.quantity} </th>
                                    <th style={{width:"16%", textAlign: "center", ...center}}><img src={deleteIcon} style={{cursor:'pointer', width: 20}} alt="deleteImg" onClick={()=> deleteItem(item)}/></th>
                            
                                </tr>
                            </thead>
                        </>)}
                    </table>

                

                <div className="float-right text-right">
                    <h4>Subtotal: ${getTotal()} </h4>
                </div>
            </div>
        </div>
        
        <div className="row mt-4 d-flex align-items-center">
            <div className="col-sm-6 order-md-2 text-right">
                <Link to={'/checkout'}>
                    <a className="btn btn-primary mb-4 btn-lg pl-5 pr-5" href="">Checkout</a>
                </Link>
            </div>
            <div className="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
                <Link to={'/'}>
                    <i className="fas fa-arrow-left mr-2"></i> Seguir Comprando
                </Link>
            </div>
        </div>
    </div>
    </> : <NoItemMessage message="carrito"/>}
  </div>

}

export default Cart;