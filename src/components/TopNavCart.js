import React, { useState,useEffect } from 'react';
function TopNavCart(props){
    // const [navcart, setNavcart] = useState([]);
    const cart_info=props.cart;
    // console.log("cart",cart_info);
    // function update_cart(data){
    //     setNavcart(data);
    // }
    return(
        <>
            {   cart_info &&  cart_info.length>0 &&
                cart_info.map((cart, i) => {
                    <li className="notification">
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