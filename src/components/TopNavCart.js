import React, { useState,useContext } from 'react';
import CartContext from '../context/CartContext';
function TopNavCart(){
    const navcart = useContext(CartContext);
    // console.log("cart",navcart);
    return(
        <>
            {   navcart &&  navcart.length>0 &&
                navcart[0].map((cart, i) => {
                    return <li className="notification" key={i}>
                        <div className="media">
                            <img className="img-radius" src="assets/images/user/avatar-2.jpg" alt="Generic placeholder "/>
                            <div className="media-body">
                                <p><strong>{cart.title}</strong><span className="n-time text-muted"><i className="icon feather icon-clock m-r-10"></i>30 min</span></p>
                                <p>{cart.description}</p>
                            </div>
                        </div>
                    </li> 
                })
            } 
        </>
    );
}

export default TopNavCart;